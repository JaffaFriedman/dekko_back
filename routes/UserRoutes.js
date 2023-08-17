const express = require('express')

const router = express.Router()

const {
  signUp,
  getUsers,
  updateUser,
  deleteUser,
  login,
  getUserById,
  deleteUserById
} = require('../controllers/UserControllers')

const auth = require('../middlewares/auth')
router.get('/', getUsers)
router.delete('/', deleteUser)
router.post('/', signUp)
router.post('/login',login)
router.get('/:_id', auth,  getUserById)
router.put('/', updateUser)
router.delete('/:_id', auth, deleteUserById)

module.exports = router