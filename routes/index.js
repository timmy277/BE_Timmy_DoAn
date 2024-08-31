const express = require('express');
const router = express.Router();

const userSignUp = require('../controllers/userSignUp');
const userLogIn = require('../controllers/userLogIn');
const userDetailController = require('../controllers/userDetail');
const authToken = require('../middleware/authToken');
const userLogoutController = require('../controllers/userLogout');
const allUsersController = require('../controllers/allUsers');
const updateUserController = require('../controllers/updateUser');
const UploadProductController = require('../controllers/uploadProduct');



router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get("/user-details", authToken ,userDetailController)
router.get('/logout', userLogoutController)

//admin panel
router.get('/all-users', authToken, allUsersController)
router.post('/update-users', authToken, updateUserController)

//product
router.post('/upload-product', authToken, UploadProductController)

module.exports = router