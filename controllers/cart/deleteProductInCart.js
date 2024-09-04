const cartModel = require("../../models/cartProduct")


const deleteProductInCartController = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const cartProductId = req.body._id

        const deleteProduct = await cartModel.deleteOne({ _id : cartProductId})

        res.json({
            message : "Product Deleted From Cart",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteProductInCartController