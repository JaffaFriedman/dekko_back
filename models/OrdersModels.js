const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
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
  }
})

const Order = mongoose.model('orders', orderSchema)

module.exports = Order
