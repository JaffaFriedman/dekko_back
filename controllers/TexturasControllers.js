const mongoose = require('mongoose')
const Textura = mongoose.model('texturas')

const getTextura = async (req, res) => {
  try {
 
    const textura = await Textura.find({
      familia: req.params.familia
    })
    if (Textura) {
      return res.status(200).json({
        message: 'getTextura: Encontrada',
        info: textura
      })
    }
    return res.status(404).json({
      message: 'getTextura: No encontrada'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getTextura: Internal Server Error',
      error
    })
  }
}

const getTexturas = async (req, res) => {
  try {
 
    const textura = await Textura.find()
    res.json({ success: true, info: textura })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

module.exports = {
  getTextura,
  getTexturas
}
