const userRouter = require('./routes/userRoutes');
const globalErrorHandle = require('./controller/errorController');
const AppError = require('./utils/appError');

const hpp = require('hpp');
const helmet = require('helmet');
const express = require('express');
const { rateLimit } = require('express-rate-limit');

const app = express();

// ! Set security HTTP headers
app.use(helmet());

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

// ! Prevent paramater pollution
app.use(hpp());

// ! Routes
app.use('/api/v1/user', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`));
});

app.use(globalErrorHandle);

module.exports = app;
