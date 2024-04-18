const prisma = require("../db/prisma");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const {
  hashPassword,
  checkPassword,
  exclude,
  checkJWT,
  createJWT,
} = require("../utils");

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, confirmPassword, role } = req.body;
  console.log(req.body);
  if (password !== confirmPassword) {
    return next(new AppError("Passwords do not match", 400));
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

  createJWT(newUser, 200, res, "New account created!");
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  //! Check if there is a email and password
  if (!email || !password)
    return next(new AppError("Please provide email and password", 400));

  const user = await prisma.user.findUnique({
    where: { email },
  });

  const match = await checkPassword(password, user?.password);

  //! Check if password correct
  if (!user || !match)
    return next(new AppError("Wrong email or password!", 401));

  createJWT(user, 200, res, "Login successfully!");
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.protected = catchAsync(async (req, res, next) => {
  let token;

  // ! Check if there is a token in headers or cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError("Unauthorized request", 403));
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

  const data = exclude(currentUser, ["password", "createdAt"]);

  // ! Save user data
  req.user = data;

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
