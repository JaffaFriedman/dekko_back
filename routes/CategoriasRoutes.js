const express = require('express')

const categoriaRouter = express.Router()

const {
  getCategorias,
  getCategoria
} = require('../controllers/CategoriasControllers')


categoriaRouter.route('/categorias')
  .get(getCategorias)

categoriaRouter.route('/categorias/familia/:familia')
  .get(getCategoria)


module.exports = categoriaRouter
