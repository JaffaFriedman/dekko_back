const express = require('express')

const userRouter = express.Router()

const {
  signUp,
  getUsers,
  updateUserById,
  login,
  getUserById,
  deleteUserById
} = require('../controllers/UsersControllers')

const auth = require('../middlewares/auth')

userRouter.get('/users', getUsers)
userRouter.post('/users', signUp)
userRouter.post('/users/login', login)
userRouter.get('/users/:_id', auth, getUserById)
userRouter.put('/users/:_id', auth, updateUserById)
userRouter.delete('users/:_id', auth, deleteUserById)

module.exports = userRouter
