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
const getProductsController = require('../controllers/getProducts');
const updateProductController = require('../controllers/updateProduct');



router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get("/user-details", authToken ,userDetailController)
router.get('/logout', userLogoutController)

//admin panel
router.get('/all-users', authToken, allUsersController)
router.post('/update-users', authToken, updateUserController)

//product
router.post('/upload-product', authToken, UploadProductController)
router.get('/get-product', getProductsController)
router.post('/update-product', updateProductController)


module.exports = router