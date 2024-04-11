const prisma = require('../db/prisma');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const { hashPassword, checkPassword, exclude, checkJWT, createJWT } = require('../utils');

exports.signup = catchAsync(async (req, res, next) => {
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
      profile: {
        create: {},
      },
    },
  });

  createJWT(newUser, 200, res, 'New account created!');
});

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //! Check if there is a email and password
  if (!email || !password) return next(new AppError('Please provide email and password', 400));

  const user = await prisma.user.findUnique({
    where: { email },
  });

  const match = await checkPassword(password, user?.password);

  //! Check if password correct
  if (!user || !match) return next(new AppError('Wrong email or password!', 401));

  createJWT(user, 200, res, 'Login successfully!');
};

exports.protected = catchAsync(async (req, res, next) => {
  let token;

  // ! Check if there is a token in headers or cookies
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('Unauthorized request', 403));
  }

  const id = await checkJWT(token);

  const currentUser = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });

  const data = exclude(currentUser, ['password', 'createdAt']);

  // ! Save user data
  req.user = data;

  next();
});
