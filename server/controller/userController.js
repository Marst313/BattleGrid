const prisma = require('../db/prisma');

exports.getAllUser = async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json({
    users,
  });
};
