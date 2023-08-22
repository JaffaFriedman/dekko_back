const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
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
    password: {
      type: String,
      require: true
    },
    nombre: {
      type: String,
      require: true
    },
    rut: {
      type: String,
      require: true
    },
    direccion: {
      type: String,
      require: false
    },
    comuna: {
      type: String,
      require: false
    },
    telefono: {
      type: Number,
      require: false
    },
    rol: {
      type: String,
      default: 'USER',
      require: false
    },
    premium: {
      type: Boolean,
      require: false,
      default: false
    },
    dob: {
      type: Date,
      require: false
    },
    salt: String
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('users', userSchema)

module.exports = User
