const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Base de datos conectado con exito!!!'));

