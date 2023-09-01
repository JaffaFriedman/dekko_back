const express = require('express')

const productRouter = express.Router()

const { getProduct,getProductById } = require('../controllers/ProductsControllers')


productRouter.route('/products/familia/:familia/categoria/:categoria').get(getProduct)
productRouter.route('/products/categoria/:_id').get(getProductById)



module.exports = productRouter
