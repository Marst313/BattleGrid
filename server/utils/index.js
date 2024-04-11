const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.hashPassword = async (password) => {
  try {
    const saltRounds = 12;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

exports.checkPassword = async (candidatePassword, userPassword) => {
  try {
    const match = await bcrypt.compare(candidatePassword, userPassword);

    return match;
  } catch (error) {
    console.log(error);
  }
};

exports.exclude = (user, keys) => {
  return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
};

exports.createJWT = async (user, statusCode, res, message) => {
  const token = jwt.sign(
    {
      data: user.id,
    },
    process.env.JSON_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  const data = this.exclude(user, ['password', 'createdAt']);

  res.status(statusCode).json({
    status: 'success',
    message,
    token,
    data: {
      user: data,
    },
  });
};

exports.checkJWT = async (token) => {
  const decode = await promisify(jwt.verify)(token, process.env.JSON_SECRET_KEY);

  return decode.data;
};
