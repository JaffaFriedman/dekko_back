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


orderRouter.post('/', createOrder)
orderRouter.get('/', getOrders)
orderRouter.get('/:codigo', getOrderByCode)
orderRouter.get('/:_id', getOrderById)
orderRouter.post('/:_id', auth, updateOrder)
orderRouter.delete('/:_id', auth, deleteOrder)

module.exports = orderRouter
