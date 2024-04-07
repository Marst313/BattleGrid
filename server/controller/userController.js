const prisma = require('../db/prisma');

exports.getAllUser = async (req, res) => {
  const users = await prisma.user.findMany({
    where: { name: 'dharma' },
  });

  res.status(200).json({
    users,
  });
};
