const express = require('express')

const productRouter = express.Router()

const { getProduct } = require('../controllers/ProductsControllers')

const auth = require('../middlewares/auth')

productRouter
  .route('/products/familia/:familia/categoria/:categoria')
  .get(getProduct)

module.exports = productRouter
