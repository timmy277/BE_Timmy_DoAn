const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const productController = require('./controllers/productController')
const app = express()
const port = 3001
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./db');



app.get('/products', (req, res) => {
    const data = [
        {
            url: 'acx',
            name: 'ACX',
            description: 'aaaa'
        },{
            url: 'acxq',
            name: 'wACX',
            description: 'tttaaaa'
        }
    ]
    res.send({code: 200, message: 'Fetch success', data: data})
})


app.post('/add-product', productController.addProduct);
app.get('/get-products', productController.getProducts);
app.post('/edit-product', productController.editProduct);
app.get('/get-product/:id', productController.getProductById);
app.post('/delete-products', productController.deleteProducts);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  