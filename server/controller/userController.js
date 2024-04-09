const prisma = require('../db/prisma');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllUser = async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      profile: {},
    },
  });

  res.status(200).json({
    users,
  });
};

exports.deleteSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  // Delete User
  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(500).json({
    message: 'success',
    data: null,
  });
});
