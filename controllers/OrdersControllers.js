const mongoose = require('mongoose')
const Order = mongoose.model('orders')
const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body)
    await newOrder.save()
    res.json({ success: true, message: 'Order Creado', info: newOrder })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const getOrders = async (req, res) => {
  try {
    const order = await Order.find()
    res.json({ success: true, info: order })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}
const updateOrder = async (req, res) => {
  const { _id, OrderUpdated } = req.body
  try {
    const resp = await Order.findByIdAndUpdate(_id, OrderUpdated, { new: true })
    if (resp) {
      return res.status(200).json({
        message: 'updateOrder: ok',
        detail: resp
      })
    }
    return res.status(404).json({
      message: 'updateOrder: No encontrado'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'updateOrder: Internal Server Error',
      detail: error
    })
  }
}
const getOrderById = async (req, res) => {
  const { _id } = req.params
  try {
    const order = await Order.findById(_id)
    if (order) {
      return res.status(200).json({
        message: 'getOrderById: Encontrado',
        detail: order
      })
    }
    return res.status(404).json({
      message: 'getOrderById: No encontrado'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getOrderById: Internal Server Error',
      error
    })
  }
}

const getOrderByCode = async (req, res) => {
  const { codigo } = req.params
  try {
    const order = await Order.findById(codigo)
    if (order) {
      return res.status(200).json({
        message: 'getOrderById: Encontrado',
        detail: order
      })
    }
    return res.status(404).json({
      message: 'getOrderById: Not found'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getOrderById: Server Error',
      error
    })
  }
}
const deleteOrder = async (req, res) => {
  const { _id } = req.body

  try {
    const resp = await Order.findByIdAndDelete(_id)
    return res.status(200).json({
      message: 'deleteOrder: OK',
      detail: resp
    })
  } catch (error) {
    return res.status(500).json({
      message: 'deleteOrder: Internal Server Error',
      detail: error
    })
  }
}
module.exports = {
  createOrder,
  getOrders,
  getOrderByCode,
  getOrderById,
  updateOrder,
  deleteOrder
}
