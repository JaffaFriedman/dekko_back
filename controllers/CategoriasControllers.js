const mongoose = require('mongoose')
const Categoria = mongoose.model('categorias')


const getCategorias = async (req, res) => {
  try {
    const categoria = await Categoria.find()
    res.json({ success: true,  message: 'getCategorias',info: categoria })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}


const getCategoria = async (req, res) => {
  try {
   const categoria = await Categoria.find({familia : req.params.familia})
    if (categoria) {
      return res.status(200).json({
        message: 'getCategoria: Encontrada',
        info: categoria
      })
    }
    return res.status(404).json({
      message: 'getCategoria: No encontrada'
    })

  } catch (error) {
    return res.status(500).json({
      message: 'getCategoria: Internal Server Error',
      error
    })
  }
}
const getCategoriaByName = async (req, res) => {
  try {
    const categoria = await Categoria.findOne({
      familia: req.params.familia,
      categoria: req.params.categoria
    })
    if (categoria) {
      return res.status(200).json({
        message: 'getCategoriaByName: Encontrada',
        info: categoria
      })
    }
    return res.status(404).json({
      message: 'getCategoriaByName: No encontrada'
    })

  } catch (error) {
    return res.status(500).json({
      message: 'getCategoriaByName: Internal Server Error',
      error
    })
  }
}

module.exports = {
  getCategorias,
  getCategoria,
  getCategoriaByName
}
