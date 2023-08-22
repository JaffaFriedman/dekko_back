const mongoose = require('mongoose')
const Tela = mongoose.model('telas')

const getTela = async (req, res) => {
  try {
    const tela = await Tela.find({
        familia: req.params.familia,
        categoria: req.params.categoria
      })
    if (tela) {
      return res.status(200).json({
        message: 'getTela: Encontrada',
        info: tela
      })
    }
    return res.status(404).json({
      message: 'getTela: No encontrada'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getTela: Internal Server Error',
      error
    })
  }
}
const getTelas = async (req, res) => {
  try {
 
    const tela = await Tela.find()
    res.json({ success: true, info: tela })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

module.exports = {
  getTela,getTelas
}
