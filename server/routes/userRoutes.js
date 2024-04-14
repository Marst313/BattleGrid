const express = require('express');

const userController = require('../controller/userController');
const authController = require('../controller/authController');
const { uploadImageFirebase } = require('../middleware/uploadImageFirebase');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.patch(
  '/uploadPhoto', //
  authController.protected,
  userController.uploadUserPhoto,
  uploadImageFirebase,
  userController.updateMe
);

router.use(authController.protected, authController.restrictTo('ADMIN'));

router.delete('/:id', userController.deleteSingleUser);

router.get('/', userController.getAllUser);

module.exports = router;
