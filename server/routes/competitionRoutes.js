const express = require('express');

const authController = require('../controller/authController');
const { createNewCompetition, getAllCompetition, getSingleCompetition, updateCompetition, deleteCompetition } = require('../controller/competitionController');

const router = express.Router();

router
  .route('/:id') //
  .get(getSingleCompetition)
  .patch(authController.protected, authController.restrictTo('ADMIN'), updateCompetition)
  .delete(authController.protected, authController.restrictTo('ADMIN'), deleteCompetition);

router
  .route('/') //
  .get(getAllCompetition)
  .post(authController.protected, authController.restrictTo('ADMIN'), createNewCompetition);

module.exports = router;
