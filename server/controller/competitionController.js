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
exports.uploadThumbnailPhoto = upload.single('thumbnail');

exports.createNewCompetition = catchAsync(async (req, res, next) => {
  const { title, prizepool, startDate, endDate, type, include_3rdPlace, maxParticipants, currentParticipants, thumbnail } = req.body;

  const data = req.body;
  console.log(data);

  const newCompetition = await prisma.tourney.create({
    data: {
      title,
      user: {
        connect: {
          id: req.user.id,
        },
      },
      prizepool: parseFloat(prizepool),
      startDate,
      endDate,
      thumbnail,
      FormatTour: {
        create: {
          type,
          include_3rdPlace: Boolean(include_3rdPlace),
          maxParticipants: parseInt(maxParticipants),
          currentParticipants: parseInt(currentParticipants),
        },
      },
    },
    include: {
      FormatTour: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'New competition successfully created!',
    data: {
      newCompetition,
    },
  });
});

exports.getAllCompetition = catchAsync(async (req, res, next) => {
  const allCompetition = await prisma.tourney.findMany({
    include: {
      FormatTour: true,
    },
  });

  if (!allCompetition) return next(new AppError('There is no tournaments yet!', 400));

  res.status(200).json({
    status: 'success',
    message: 'All competition',
    data: {
      allCompetition,
    },
  });
});

exports.getSingleCompetition = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const competition = await prisma.tourney.findUnique({
    where: {
      id,
    },
    include: {
      FormatTour: true,
    },
  });

  if (!competition) return next(new AppError('There is no competition with that id', 404));

  res.status(200).json({
    status: 'success',
    message: 'Single competition',
    data: {
      competition,
    },
  });
});

exports.updateCompetition = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, prizepool, startDate, endDate, type, include_3rdPlace, maxParicipants, currentParticipants } = req.body;

  if (currentParticipants > maxParicipants) return next(new AppError('Current participants is higher than maximum!', 400));

  /* {
    "title":"Update competition",
    "prizepool":10,
    "startDate":"2024-05-10T15:00:00Z",
    "endDate":"2024-05-15T15:00:00Z",
    "type":"SWISS",
    "include_3rdPlace":true,
    "currentParticipants":5,
    "maxParicipants":5
}
 */

  // req.file.path = 'thumbnail/';

  const updateUser = await prisma.tourney.update({
    where: {
      id,
    },
    data: {
      title,
      prizepool,
      startDate,
      endDate,
      thumbnail: req.imageUrl,

      FormatTour: {
        update: {
          type,
          include_3rdPlace,
          maxParicipants,
          currentParticipants,
        },
      },
    },
    include: {
      FormatTour: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'Success update competition',
    data: {
      updateUser,
    },
  });
});

exports.deleteCompetition = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await prisma.tourney.delete({
    where: {
      id,
    },
  });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
