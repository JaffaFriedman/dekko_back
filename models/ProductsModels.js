const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  familias: { type: String, required: true },
  categorias: { type: String, required: true },
  catalogo: { type: String, required: true },
  nombre: { type: String, lowercase: true, minLength: 2, required: true },
  descripcion: { type: String, lowercase: true, minLength: 2, required: true },
  url: [{ type: String, required: true }],
  ancho: {
    type: Number,
    required: true,
    min: [100, 'El ancho debe ser mayor o igual a 100cm']
  },
  alto: {
    type: Number,
    required: true,
    min: [100, 'El alto debe ser mayor o igual a 100cm']
  },
  peso: {
    type: Number,
    required: true,
    min: [0.01, 'El peso debe ser mayor que 0']
  },
  precio: {
    type: Number,
    required: true,
    min: [1, 'El precio debe ser mayor que 0']
  },
  venta: { type: String }
})

const Product = mongoose.model('products', productSchema)

module.exports = Product
