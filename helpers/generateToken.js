const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KEY

const generateToken = Users => {
  const { _id, nombre, email, premium } = Users
  return jwt.sign(
    {
      _id,
      nombre,
      email,
      premium
    },
    secret,
    {
      expiresIn: '1d'
    }
  )
}

module.exports = generateToken
