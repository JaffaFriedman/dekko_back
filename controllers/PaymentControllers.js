const mercadoPago = require('mercadopago')
mercadoPago.configurations.setAccessToken(process.env.ACCESS_TOKEN)



const createPayment = async (req, res) => {
  try {
    mercadoPago.configure({
      access_token: process.env.ACCESS_TOKEN
    })
    const  items =req.body 
    const preference = {
      items,
      back_urls: {
        success: 'http://localhost:5173/success-purchase',
        pending: 'http://localhost:4000/payment/pending-payment',
        failure: 'http://localhost:4000/payment/failure-payment'
      }
    }
    const respuesta = await mercadoPago.preferences.create(preference)
    return res.status(200).json({
      message: 'OK',
      detail: respuesta
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server Error',
      error
    })
  }
}

const successPayment = async (req, res) => {
  res.status(200).json({
    message: 'OK',
    detail: req.query
  })
}
const pendingPayment = async (req, res) => {
  res.status(200).json({
    message: 'OK',
    detail: req.query
  })
}
const failurePayment = async (req, res) => {
  res.status(200).json({
    message: 'OK',
    detail: req.query
  })
}

module.exports = {
  createPayment,
  pendingPayment,
  successPayment,
  failurePayment
}
