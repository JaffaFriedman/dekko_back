const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      index: true,
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
        }
      }
    },
    nombre: {
      type: String,
      require: true
    },
    telefono: {
      type: Number,
      require: false
    },
    asunto: {
      type: String,
      require: false
    },
    mensaje: {
      type: String,
      require: false
    }
  },
  {
    timestamps: true
  }
)

const Contact = mongoose.model('contacts', contactSchema)

module.exports = Contact
