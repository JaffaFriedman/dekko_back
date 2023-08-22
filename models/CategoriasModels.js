const mongoose = require('mongoose')

const categoriaSchema = new mongoose.Schema({
  familias: { type: String, required: true },
  categorias: { type: String, required: true },
  catalogo: { type: String, required: true },
  descripcion: { type: String, lowercase: true, minLength: 2, required: true },
  url: { type: String, required: false },
  link: { type: String, required: false },
  width: { type: String, required: false }
})

const Categoria = mongoose.model('categorias', categoriaSchema)

module.exports = Categoria
