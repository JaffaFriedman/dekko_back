const mercadoPago = require('mercadopago')
mercadoPago.configurations.setAccessToken(process.env.ACCESS_TOKEN)

/*
var payment_data = {
  transaction_amount: 100,
  token: process.env.ACCESS_TOKEN,
  installments: 1,
  payer: {
    type: "customer"
    id: "123456789-jxOV430go9fx2e"
  }
};


 
mercadoago.payment.create(payment_data).then(function (data) {
  console.log(data);
});

*/

const items = [
  {
    id: '2',
    category_id: '',
    currency_id: 'CLP',
    description: '',
    title: 'Curso de React',
    quantity: 1,
    unit_price: 30000
  },
  {
    id: '3',
    category_id: '',
    currency_id: 'CLP',
    description: '',
    title: 'Curso de React',
    quantity: 1,
    unit_price: 20000
  },
  {
    id: '4',
    category_id: '',
    currency_id: 'CLP',
    description: '',
    title: 'Curso de React',
    quantity: 1,
    unit_price: 10000
  }
]

/*
const createPayment = async (req, res) => {
  const { title, unit_price, quantity } = req.body
  console.log(title)
  try {
    mercadoPago.configure({
      access_token: process.env.ACCESS_TOKEN
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
*/

const createPayment = async (req, res) => {
  try {
    mercadoPago.configure({
      access_token: process.env.ACCESS_TOKEN
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
