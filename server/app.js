const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const { rateLimit } = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');

const userRouter = require('./routes/userRoutes');
const competitionRouter = require('./routes/competitionRoutes');
const globalErrorHandle = require('./controller/errorController');
const AppError = require('./utils/appError');

const app = express();

//? Validator email and etc
//?

// ! Set security HTTP headers
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3001',
  })
);

// ! Option Cors
app.options('*', cors());

// ! Limiter request
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// ! Body parser
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// ! Prevent paramater pollution
app.use(hpp());

// ! Prevent xss sanitization
app.use(xss());

// ! Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/competition', competitionRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`));
});

app.use(globalErrorHandle);

module.exports = app;
