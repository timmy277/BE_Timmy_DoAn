const productModel = require("../models/productModel")

const getProductsController = async(req, res) => {
    try {
        const allProducts = await productModel.find().sort({ createdAt: -1 })
        res.status(200).json({
            data: allProducts,
            error: false,
            success: true,  
            message: "All products"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getProductsController