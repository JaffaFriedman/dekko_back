const express = require('express')

const contactRouter = express.Router()

const {
  clientContact,
  getContacts
} = require('../controllers/ContactControllers')

contactRouter.get('/contact', getContacts)
contactRouter.post('/contact', clientContact)

module.exports = contactRouter
