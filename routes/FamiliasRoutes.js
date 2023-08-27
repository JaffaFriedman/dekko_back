const express = require('express')

const familiaRouter = express.Router()

const { getFamilias } = require('../controllers/FamiliasControllers')

 
familiaRouter.route('/familias')
  .get(getFamilias)

module.exports = familiaRouter
