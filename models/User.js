const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


  
  
const userSchema = new mongoose.Schema({
    correo: {
        type: String,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
        required: true
    },
    password: {
        type: String,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/gm],
        required: true
    },
    rut: {
        type: String
    },
    direccion: {
        type: String
    },
    nombre: {
        type: String,
        default: "Nombre no especificado",
        trim: true,
        lowercase: true,
        minLength: 2
    },
    comuna: {
        type: String
    },
    telefono: {
        match: [/^\d{9}$/],
        type: number
    },
    salt: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    fecharegistro: {
        type: String
    },
    favoriteProducts: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    }
})

userSchema.methods.hashPassword = function(password){
    this.salt = crypto.randomBytes(10).toString('hex'); 
    this.password = crypto.pbkdf2Sync(password, this.salt, 5000, 10, 'sha-512').toString('hex');
}


userSchema.methods.hashValidation = function(password, salt, passwordDB){
    const hash = crypto.pbkdf2Sync(password, salt, 5000, 10, 'sha-512').toString('hex')
    return hash === passwordDB;
}

userSchema.methods.generateToken = function(){
    const payload = {
        id: this._id,
        correo: this.correo
    }
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: 900000})
    return token;
}

userSchema.methods.validaRut= function validarModulo11(numero) {
    let suma = 0;
    let pesos = [2, 3, 4, 5, 6, 7, 8, 9];
  
    for (let i = 0; i < numero.length - 1; i++) {
      suma += numero[numero.length - 2 - i] * pesos[i % pesos.length];
    }
  
    let residuo = suma % 11;
    let digitoVerificador = 11 - residuo;
  
    if (digitoVerificador === 10) {
      digitoVerificador = 'K';
    } else if (digitoVerificador === 11) {
      digitoVerificador = '0';
    }
      return digitoVerificador.toString().toUpperCase() === numero[numero.length - 1].toUpperCase();
  }
const User = mongoose.model('user', userSchema);

module.exports = User;