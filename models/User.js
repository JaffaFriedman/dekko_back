const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        required: true
        } 
    ,
    coreo: {
        type: String,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
        required: true,
        unique: true,
        index: true
    },
    nombre: {
        type: String,
        default: "Nombre no especificado",
        trim: true,
        lowercase: true,
        minLength: 2
    },
    password: {
        type: String,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/gm],
        required: true
    },
    salt: {
        type: String
    },
    rut: {
        type: String
    },
    direccion: {
        type: String
    },
    comuna: {
        type: String
    },
    ciudad: {
        type: String
    },
    productosFavoritoss: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    isPremium: {
        type: Boolean,
        require: true,
        default: false
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
})

userSchema.methods.hashPassword = function (password) {
    this.salt = crypto.randomBytes(10).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 5000, 10, 'sha-512').toString('hex');
}


userSchema.methods.hashValidation = function (password, salt, passwordDB) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha-512').toString('hex');
  //clase  const hash = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('hex')
    return hash === passwordDB;
}

userSchema.methods.generateToken = function () {
    const payload = {
        id: this._id,
        correo: this.correo
    }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 900000 })
    return token;
}


const User = mongoose.model('user', userSchema);

module.exports = User;