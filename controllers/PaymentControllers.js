const mercadoPago = require('mercadopago')

const items = [
  {
    id: '1234',
    title: 'Curso de React',
    description: 'Curso de React desde absoluto cero',
    picture_url:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    quantity: 1,
    currency_id: 'CLP',
    unit_price: 10000
  }
]

const createPayment = async (req, res) => {
  const { title, unit_price, quantity } = req.body
  try {
    mercadoPago.configure({
      access_token:
        'TEST-3534791006678035-082317-28cda58075c7b37e9b52085bc031cebe-232196575'
    })
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
