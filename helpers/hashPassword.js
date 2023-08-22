const crypto = require('crypto')

const hashPassword = password => {
  let salt = process.env.SALT
  return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
}

module.exports = hashPassword
