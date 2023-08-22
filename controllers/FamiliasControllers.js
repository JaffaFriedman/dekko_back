const mongoose = require('mongoose')
const Familia = mongoose.model('familias')

const getFamilias = async (req, res) => {
  try {
    const familia = await Familia.find()
    res.json({ success: true, info: familia })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

module.exports = {
  getFamilias
}
