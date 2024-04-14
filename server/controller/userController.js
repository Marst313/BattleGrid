const multer = require('multer');

const prisma = require('../db/prisma');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images!'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadUserPhoto = upload.single('photo');

exports.updateMe = catchAsync(async (req, res, next) => {
  // Save url to prisma

  await prisma.user.update({
    where: { id: req.user.id },
    data: {
      profile: {
        update: {
          photo: req.imageUrl,
        },
      },
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'Successfully upload and update photo!',
    images: req.imageUrl,
  });
});

exports.getAllUser = catchAsync(async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      profile: {},
    },
  });

  res.status(200).json({
    users,
  });
});

exports.deleteSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  // Delete User
  await prisma.user.delete({
    where: {
      id,
    },
  });

  res.status(204).json({
    message: 'success',
    data: null,
  });
});
