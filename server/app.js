const userRouter = require('./routes/userRoutes');

const helmet = require('helmet');
const express = require('express');
const AppError = require('./utils/appError');

const app = express();

// ! Body parser
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/user', userRouter);

app.all('*', (req, res, next) => {
  /*   const err = new Error(`Cant find ${req.originalUrl} on this server`);
    err.status = 'fail';
    err.statusCode = 404; */

  next(new AppError(`Cant find ${req.originalUrl} on this server`));
});

module.exports = app;
