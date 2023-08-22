const express = require('express')

const familiaRouter = express.Router()

const { getFamilias } = require('../controllers/FamiliasControllers')

const auth = require('../middlewares/auth')

 
familiaRouter.route('/familias')
  .get(getFamilias)

module.exports = familiaRouter
