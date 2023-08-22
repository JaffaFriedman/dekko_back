const mongoose = require('mongoose')

const telaSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  familia: { type: String, required: true },
  categoria: { type: String, required: true },
  nombre: { type: String, },
  descripcion: { type: String, lowercase: true, minLength: 2, required: true },
  url: { type: String, required: false } 
})

const Telas = mongoose.model('telas', telaSchema)

module.exports = Telas
