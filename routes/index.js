const express = require("express");
const router = express.Router();

const userSignUp = require("../controllers/user/userSignUp");
const userLogIn = require("../controllers/user/userLogIn");
const userDetailController = require("../controllers/user/userDetail");
const authToken = require("../middleware/authToken");
const userLogoutController = require("../controllers/user/userLogout");
const allUsersController = require("../controllers/user/allUsers");
const UploadProductController = require("../controllers/product/uploadProduct");
const getProductsController = require("../controllers/product/getProducts");
const updateProductController = require("../controllers/product/updateProduct");
const updateUserController = require("../controllers/user/updateUser");
const getCategoryProductController = require("../controllers/product/getCategoryProduct");
const getCategoryWiseProductController = require("../controllers/product/getCategoryWiseProduct");
const getProductDetailController = require("../controllers/product/getProductDetail");
const addToCartController = require("../controllers/cart/addToCart");
const countProductInCartController = require("../controllers/cart/countProductInCart");

//user
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.get("/user-details", authToken, userDetailController);
router.get("/logout", userLogoutController);

//admin panel
router.get("/all-users", authToken, allUsersController);
router.post("/update-users", authToken, updateUserController);

//product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductsController);
router.post("/update-product", updateProductController);
router.get("/get-category-product", getCategoryProductController);
router.post("/category-product", getCategoryWiseProductController);
router.post("/product-detail", getProductDetailController)

//cart
router.post("/add-to-cart", authToken, addToCartController);
router.get("/count-productInCart", authToken, countProductInCartController);

module.exports = router;
