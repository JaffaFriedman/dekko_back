require('dotenv').config()
const { expressjwt } = require('express-jwt')
const secret = process.env.SECRET

const getToken = req => {
  const { authorization } = req.headers

  if (authorization) {
    const [type, token] = authorization.split(' ')
    //  Antes   return type === 'Bearer' ? token : null ;
    return type === 'Token'||type==='Bearer' ? token : null
  }

  return null
}

const auth = expressjwt({
  secret,
  algorithms: ['HS256'],
  userProperty: 'user',
  getToken
})

module.exports = auth

/*
Tarea: delete debe eliminar usuarios a traves de id que proviene del token, ademas en el controlador de productos deben crear el editProduct , deleteProduct y getProduct , añadiendo si sea pertinente el middleware visto en clases.
*/
