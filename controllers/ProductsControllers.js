const mongoose = require('mongoose')
const Product = mongoose.model('products')

const getProduct = async (req, res) => {
  try {
    // const product = await Product.find({familia : req.params.familia}

    const product = await Product.find({
      familia: req.params.familia,
      categoria: req.params.categoria
    })
    if (product) {
      return res.status(200).json({
        message: 'getProduct: Encontrada',
        info: product
      })
    }
    return res.status(404).json({
      message: 'getProduct: No encontrada'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getProduct: Internal Server Error',
      error
    })
  }
}

module.exports = {
  getProduct
}
