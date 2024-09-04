const productModel = require("../../models/productModel")

const getCategoryProductController = async (req, res) =>{
    try{
        const productCategory = await productModel.distinct("category")
        
        const getProductByCategory = []
        for(const category of productCategory){
            const product = await productModel.findOne({category: category})

            if(product){
                getProductByCategory.push(product)
            }
        }

        res.status(200).json({
            data: getProductByCategory,
            error: false,
            success: true,
            message: "Get category product successfully"
        })
    }catch(error){
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryProductController