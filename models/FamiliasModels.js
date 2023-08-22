const mongoose = require('mongoose')

const familiaSchema = new mongoose.Schema({
  familia: { type: String, required: true },
  width: { type: String, required: false },
  url: { type: String, required: false },
  link: { type: String, required: false },
  mensaje: { type: String, lowercase: true, minLength: 2, required: false }
})

const Familia = mongoose.model('familias', familiaSchema)

module.exports = Familia
