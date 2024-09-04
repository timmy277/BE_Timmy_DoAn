const productModel = require("../../models/productModel")

const getProductDetailController = async (req, res) => {
    try{
        const { productId } = req.body
        const product = await productModel.findById(productId)

        res.json({
            data: product,
            error: false,
            success: true,
            message: "Product details fetched successfully",
        })
    }
    catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = getProductDetailController;