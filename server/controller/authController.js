const prisma = require('../db/prisma');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { hashPassword, checkPassword, exclude } = require('../utils/hashPassword');

const jwt = require('jsonwebtoken');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, confirmPassword, role } = req.body;
 console.log(req.body)
  if (password !== confirmPassword) {
    return next(new AppError('Passwords do not match', 400));
  }

  const encryptPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: encryptPassword,
      role,
      profile: {
        create: {},
      },
    },
  });

  const token = jwt.sign(
    {
      data: newUser.id,
    },
    process.env.JSON_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  res.status(200).json({
    status: 'success',
    message: 'New Account Created!',
    newUser: {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token,
    },
  });
});

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
console.log(req.body)
  //! Check if there is a email and password
  if (!email || !password) return next(new AppError('Please provide email and password', 400));

  const user = await prisma.user.findUnique({
    where: { email },
  });

  const match = await checkPassword(password, user?.password);

  //! Check if password correct
  if (!user || !match) return next(new AppError('Wrong email or password!', 401));

  const data = exclude(user, ['password', 'createdAt']);

  res.status(200).json({
    status: 'success',
    data,
  });
};
