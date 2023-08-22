const mongoose = require('mongoose')

const texturaSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  familia: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, lowercase: true, minLength: 2, required: true },
  url: { type: String, required: false },
  precio: {
    type: Number,
    required: true,
    min: [1, 'El precio debe ser mayor que 0']
  }
})

const Textura = mongoose.model('texturas', texturaSchema)

module.exports = Textura
