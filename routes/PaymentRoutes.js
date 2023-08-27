const express = require('express')
const {
  createPayment,
  successPayment,
  pendingPayment,
  failurePayment
} = require('../controllers/PaymentControllers')
const paymentRouter = express.Router()

paymentRouter.get('/payment/prueba', (req, res) => {
  res.json({
    message: 'ruta payment'
  })
})

paymentRouter.post('/payment/create-payment', createPayment)

paymentRouter.post('/payment/success-payment', successPayment)
paymentRouter.post('/payment/pending-payment', pendingPayment)
paymentRouter.post('/payment/failure-payment', failurePayment)

module.exports = paymentRouter
