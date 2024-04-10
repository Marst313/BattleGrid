const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.delete('/:id', userController.deleteSingleUser);

router.get('/', userController.getAllUser);

module.exports = router;
