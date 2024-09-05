const cartModel = require("../../models/cartProduct")

const addToCartController = async(req, res) => {

    try {
        const {productId} = req?.body
        const currentUser = req?.userId

        const isProductAvailable = await cartModel.findOne({productId, userId: currentUser})

        if(isProductAvailable){
            return res.json({
                message: "Product already in cart",
                error: true,
                success: false
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new cartModel(payload)
        const saveCart = await newAddToCart.save()

        return res.status(201).json({
            message: "Product added to cart successfully",
            error: false,
            success: true,  
            data: saveCart
        });

    }
    catch(error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

module.exports = addToCartController;