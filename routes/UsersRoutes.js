const express = require('express')

const userRouter = express.Router()

const {
  signUp,
  getUsers,
  updateUser,
  deleteUser,
  login,
  getUserById,
  deleteUserById
} = require('../controllers/UsersControllers')

const auth = require('../middlewares/auth')

userRouter.get('/users', getUsers)
userRouter.delete('/users', deleteUser)
userRouter.post('/users', signUp)
userRouter.post('/users/login', login)
userRouter.get('/users/:_id', auth, getUserById)
userRouter.put('/users/', updateUser)
userRouter.delete('users/:_id', auth, deleteUserById)

module.exports = userRouter
