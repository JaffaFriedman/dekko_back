const express = require('express')

const categoriaRouter = express.Router()

const {
  getCategorias,
  getCategoria,
  getCategoriaByName
} = require('../controllers/CategoriasControllers')


categoriaRouter.route('/categorias')
  .get(getCategorias)

categoriaRouter.route('/categorias/familia/:familia')
  .get(getCategoria)

categoriaRouter.route('/categorias/familia/:familia/categoria/:categoria')
  .get(getCategoriaByName)

module.exports = categoriaRouter
