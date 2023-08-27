const mongoose = require('mongoose')

const Contact = mongoose.model('contacts')

const clientContact = async (req, res) => {
  const { email, nombre, rut, telefono, asunto, mensaje } = req.body
  const emailLowerCase = email.toLowerCase()

  try {
    const contact = new Contact({
      email: emailLowerCase,
      nombre,
      telefono,
      asunto,
      mensaje
    })
    return res.status(201).json({
      message: 'clientContact: Contacto Registrado',
      token
    })
  } catch (error) {
    return res.status(500).json({
      message: 'clientContact: Internal Server Error',
      detail: error
    })
  }
}

const getContacts = async (req, res) => {
  try {
    const resp = await Contact.find()
    return res.status(200).json({
      message: 'getContacts: OK',
      detail: resp
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getContacts: Internal Server Error',
      detail: error
    })
  }
}

module.exports = {
  getContacts,
  clientContact
}
