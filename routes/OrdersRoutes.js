const express = require('express')

const orderRouter = express.Router()

const {
  createOrder,
  getOrders,
  getOrderByCode,
  getOrderById,
  updateOrder,
  deleteOrder
} = require('../controllers/OrdersControllers')

const auth = require('../middlewares/auth')


orderRouter.post('/orders', createOrder)
orderRouter.get('/orders', getOrders)
orderRouter.get('/orders/:codigo', getOrderByCode)
orderRouter.get('/orders/:_id', getOrderById)
orderRouter.post('/orders/:_id', auth, updateOrder)
orderRouter.delete('/orders/:_id', auth, deleteOrder)

module.exports = orderRouter
