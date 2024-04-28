const express = require('express');

const authController = require('../controller/authController');
const { createNewCompetition, getAllCompetition, getSingleCompetition, updateCompetition, deleteCompetition, uploadThumbnailPhoto } = require('../controller/competitionController');
const { uploadImageFirebase } = require('../middleware/uploadImageFirebase');

const router = express.Router();

router
  .route('/') //
  .get(getAllCompetition)
  .post(
    authController.protected, //
    authController.restrictTo('ADMIN'),
    // uploadThumbnailPhoto,
    // uploadImageFirebase,
    createNewCompetition
  );

router
  .route('/:id') //
  .get(getSingleCompetition)
  .patch(
    authController.protected, //
    authController.restrictTo('ADMIN'),
    uploadThumbnailPhoto,
    uploadImageFirebase,
    updateCompetition
  )
  .delete(authController.protected, authController.restrictTo('ADMIN'), deleteCompetition);

module.exports = router;
