const mongoose = require('mongoose')
const generateToken = require('../helpers/generateToken')
const hashPassword = require('../helpers/hashPassword')

const User = mongoose.model('user')

const signUp = async (req, res) => {
  const {
    email,
    password,
    nombre,
    rut,
    direccion,
    comuna,
    telefono,
    rol,
    premium,
    dob
  } = req.body
  const emailLowerCase = email.toLowerCase()
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (!regexPassword.test(password)) {
    return res.status(401).json({
      message:
        'Singup :Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter'
    })
  }
  const hashedPassword = hashPassword(password)
  try {
    const user = new User({
      email: emailLowerCase,
      password: hashedPassword,
      nombre,
      rut,
      direccion,
      comuna,
      telefono,
      rol,
      premium,
      dob
    })
    const resp = await user.save()
    const token = generateToken(resp)
    return res.status(201).json({
      message: 'signUp: Usuario Registrado',
      token
    })
  } catch (error) {
    return res.status(500).json({
      message: 'signUp: Internal Server Error',
      detail: error
    })
  }
}

const getUsers = async (req, res) => {
  try {
    const resp = await User.find()
    return res.status(200).json({
      message: 'getUsers: OK',
      detail: resp
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getUsers: Internal Server Error',
      detail: error
    })
  }
}
const getUserById = async (req, res) => {
  const { _id } = req.params
  try {
    const user = await User.findById( _id )
    if (user) {
      return res.status(200).json({
        message: 'getUserById: Encontrado',
        detail: user
      })
    }
    return res.status(404).json({
      message: 'getUserById: Not found'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'getUserById: Server Error',
      error
    })
  }
}
const updateUser = async (req, res) => {
  const { _id, userUpdated } = req.body
  try {
    const resp = await User.findByIdAndUpdate(_id, userUpdated, { new: true })
    if (resp) {
      return res.status(200).json({
        messege: 'updateUserById: ok',
        detail: resp
      })
    }
    return res.status(404).json({
      message: 'updateUserById: Not found'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'updateUser: Internal Server Error',
      detail: error
    })
  }
}
const deleteUser = async (req, res) => {
  const { _id } = req.body

  try {
    const resp = await User.findByIdAndDelete(_id)
    return res.status(200).json({
      messege: 'deleteUser: OK',
      detail: resp
    })

  } catch (error) {
    return res.status(500).json({
      message: 'deleteUser: Internal Server Error',
      detail: error
    })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const emailLowerCase = email.toLowerCase()
  const passwordHash = hashPassword(password)

  try {
    const userValidated = await User.findOne({ email: emailLowerCase })
    if (!userValidated) {
      return res.status(401).json({
        message: 'login: Usuario no registrado'
      })
    }
    if (userValidated.password === passwordHash) {
      const token = generateToken(userValidated)
      return res.status(200).json({
        message: 'login: User logged in successfully',
        userId: userValidated._id,
        token
      })
    } else {
      return res.status(401).json({
        message: 'login: Invalid Password'
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'login: Server Error'
    })
  }
}

const deleteUserById = async (req, res) => {
  const { _id } = req.params
  try {
    const resp = await User.findByIdAndDelete(_id)
    if (resp) {
      return res.status(200).json({
        messege: 'deleteUserById: OK',
        detail: resp
      })
    }
    return res.status(404).json({
      message: 'deleteUserById: Not found'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'deleteUserById: Server Error',
      error
    })
  }
}

const updateUserById = async (req, res) => {
  const { _id, userUpdated } = req.params
  try {
    const resp = await User.findByIdAndUpdate(_id, userUpdated, { new: true })
    if (resp) {
      return res.status(200).json({
        messege: 'updateUserById: ok',
        detail: resp
      })
    }
    return res.status(404).json({
      message: 'updateUserById: Not found'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'updateUserById: Server Error',
      error
    })
  }
}

module.exports = {
  signUp,
  getUsers,
  updateUser,
  deleteUser,
  login,
  getUserById,
  deleteUserById
}
