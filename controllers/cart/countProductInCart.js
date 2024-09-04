const cartModel = require("../../models/cartProduct")

const countProductInCartController = async (req, res) => {

    try {
        const userId = req.userId
        const count = await cartModel.countDocuments({ 
            userId: userId 
        })

        res.json({
            data: {
                count: count
            },
            error: false,
            success: true,
            message: "Get count of products in cart successfully"
        })

    }
    catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = countProductInCartController