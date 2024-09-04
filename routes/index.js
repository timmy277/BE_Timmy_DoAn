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
const getProductInCartController = require("../controllers/cart/getProductInCart");
const updateProductInCartController = require("../controllers/cart/updateProductInCart");
const deleteProductInCartController = require("../controllers/cart/deleteProductInCart");
const searchProductController = require("../controllers/product/searchProduct");
const filterProductController = require("../controllers/product/filterProduct");

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
router.post("/product-detail", getProductDetailController);
router.get("/search-product", searchProductController);
router.post("/filter-product", filterProductController);

//cart
router.post("/add-to-cart", authToken, addToCartController);
router.get("/count-productInCart", authToken, countProductInCartController);
router.get("/get-productInCart", authToken, getProductInCartController);
router.post("/update-productInCart", authToken, updateProductInCartController);
router.post("/delete-productInCart", authToken, deleteProductInCartController);

module.exports = router;
