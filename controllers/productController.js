const productModel = require('../models/productModel')

module.exports.addProduct = async (req, res) => {
    console.log(req.body, "5")
    
    const newProduct = new productModel(req.body)
    const isSaved = await newProduct.save();
    if (isSaved) {
        res.send('Saved')
    }
    else {
        res.send('Failed to save')
    }
}

module.exports.getProducts = async (req, res) => {
    const data = await productModel.find({});
    if(data.length > 0){
        res.send({code: 200, message: 'Find success', data: data})
    }
    else if(data.length == 0){
        res.send({code: 404, message: 'Data not found'})
    }
    else{
        res.send({code: 500, message: 'Server error'})
    }
}



module.exports.editProduct = async (req, res) => {
    const newData = {};
    
    if(req.body.url){
        newData["url"] = req.body.url;
    }
    if(req.body.name){
        newData["name"] = req.body.name;
    }
    if(req.body.description){
        newData["description"] = req.body.description;
    }
    
    const id = req.body.id;
    let filter = {_id: id}

    let doc = await productModel.findOneAndUpdate(filter, newData, {new: true})

    if(doc){
        res.send({code: 200, message: 'Edit success', data: doc})
    }
    else if(data.length == 0){
        res.send({code: 404, message: 'Data not found'})
    }
    else{
        res.send({code: 500, message: 'Server error'})
    }
}



module.exports.getProductById = async (req, res) => {
    let data = await productModel.findById(req.params.id);
    if(data){
        res.send({code: 200, message: 'Find By ID successed', data: data})
    }
    else{
        res.send({code: 500, message: 'Server error'})
    }
}


module.exports.deleteProducts = async (req, res) => {
    const ids = req.body
    const response = await productModel.deleteMany({_id: { $in: ids}})
    if(response){
        res.send({code: 200, message: 'Delete successed', data: response})
    }
    else{
        res.send({code: 500, message: 'Server error'})
    }
}