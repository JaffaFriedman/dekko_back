const express = require('express')

const contactRouter = express.Router()

const {
  clientContact,
  getContacts
} = require('../controllers/ContactControllers')

contactRouter.get('/contact', getContacts)
contactRouter.patch('/contact', clientContact)

module.exports = contactRouter
