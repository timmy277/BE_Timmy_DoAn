const express = require('express');
const router = express.Router();

const userSignUp = require('../controllers/userSignUpController');
const userLogIn = require('../controllers/userLogInController');



router.post('/signup', userSignUp);
router.post('/login', userLogIn);

module.exports = router