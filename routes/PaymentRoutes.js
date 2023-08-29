const express = require('express')
 
const paymentRouter = express.Router()


const {
  createPayment,
  successPayment,
  pendingPayment,
  failurePayment
} = require('../controllers/PaymentControllers')


paymentRouter.get('/payment/prueba', (req, res) => {
  res.json({
    message: 'ruta payment'
  })
})

paymentRouter.post('/payment/create-payment', createPayment)

paymentRouter.post('https://api.mercadopago.com/payment/success-payment', successPayment)
paymentRouter.post('https://api.mercadopago.com/payment/pending-payment', pendingPayment)
paymentRouter.post('https://api.mercadopago.com/payment/failure-payment', failurePayment)

module.exports = paymentRouter
