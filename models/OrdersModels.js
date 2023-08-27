const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
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
    direccion: {
      type: String,
      require: true
    },
    comuna: {
      type: String,
      require: true
    },
    telefono: {
      type: Number,
      require: false
    },
    totalProductos: {
      type: Number,
      require: true
    },
    precioTotal: {
      type: Number,
      require: true
    },
    items: [
      {
        imagen: {
          type: String,
          require: true
        },
        glosa: {
          type: String,
          require: true
        },
        cantidad: {
          type: Number,
          require: true
        },
        precio: {
          type: Number,
          require: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

const Order = mongoose.model('orders', orderSchema)

module.exports = Order
