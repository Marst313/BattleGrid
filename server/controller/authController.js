const prisma = require('../db/prisma');
const AppError = require('../utils/appError');
const { hashPassword } = require('../utils/hashPassword');

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

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
      },
    });

    res.status(200).json({
      status: 'success',
      message: 'New Account Created!',
      newUser: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
