const express = require('express')

const texturaRouter = express.Router()

const {
  getTextura,
  getTexturas
} = require('../controllers/TexturasControllers')

const auth = require('../middlewares/auth')

texturaRouter.route('/texturas').get(getTexturas)

texturaRouter
  .route('/texturas/familia/:familia')
  .get(getTextura)

module.exports = texturaRouter
