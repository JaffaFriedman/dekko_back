const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require('./routes/productRoutes')
const orderRouter = require("./routes/orderRoutes");

require('dotenv').config();
require('./config/database');
const cors=requiere(cors);
const app = express();

app.listen(process.env.PORT, () => console.log(`Servidor conectado en puerto: ${process.env.PORT}`))
const corsOptions={
    origin:process.env.FRONTEND_URL,
    optionesSuccessStatus:200
}

app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

/* Clase 

app.get('/',(req,res)=> { res.status(200).json{mensaje:'ruta get'}})

app.listen(4000, ()=>{console.log('escuchando en el puerto 4000')})

app.put('/',(req,res)=> { res.status(200).json{mensaje:'ruta put'}})
*/