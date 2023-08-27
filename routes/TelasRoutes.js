const express = require('express')

const telaRouter = express.Router()

const { getTela,getTelas } = require('../controllers/TelasControllers')


telaRouter.route('/telas')
  .get(getTelas)

telaRouter.route('/telas/familia/:familia/categoria/:categoria')
  .get(getTela)


module.exports = telaRouter
