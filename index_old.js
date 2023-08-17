const express = require("express");

require('dotenv').config();
require('./config/database');

const cors = require('cors');
const app = express();

app.use(cors);

const userRouter = require("./routes/UserRoutes");
const productRouter = require('./routes/ProductRoutes')
const orderRouter = require("./routes/OrderRoutes");

const   corsOptions={
    origin:process.env.FRONTEND_URL,
    optionesSuccessStatus:200
}

app.listen(process.env.PORT, () => console.log(`Servidor conectado en puerto: ${process.env.PORT}`))
app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

/* Clase 

app.get('/',(req,res)=> { res.status(200).json{mensaje:'ruta get'}})
app.listen(4000, ()=>{console.log('escuchando en el puerto 4000')})
app.put('/',(req,res)=> { res.status(200).json{mensaje:'ruta put'}})
*/