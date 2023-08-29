require('dotenv').config()

//Modelos
require('./models/CategoriasModels')
require('./models/FamiliasModels')
require('./models/OrdersModels')
require('./models/ProductsModels')
require('./models/TelasModels')
require('./models/TexturasModels')
require('./models/UsersModels')
require('./models/ContactModels')
const cors = require('cors')
//Rutas
const categoriaRoutes = require('./routes/CategoriasRoutes')
const familiaRoutes = require('./routes/FamiliasRoutes')
const orderRoutes = require('./routes/OrdersRoutes')
const productRoutes = require('./routes/ProductsRoutes')
const telaRoutes = require('./routes/TelasRoutes')
const texturaRoutes = require('./routes/TexturasRoutes')
const userRoutes = require('./routes/UsersRoutes')
const paymentRoutes=require('./routes/PaymentRoutes.js')
const contactRoutes=require('./routes/ContactRoutes.js')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI + 'Backend_EC')
const port = process.env.PORT
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}
app.use(cors())
app.use(express.json())

app.use(categoriaRoutes)
app.use(productRoutes)
app.use(familiaRoutes)
app.use(productRoutes)
app.use(telaRoutes)
app.use(texturaRoutes)
app.use(userRoutes)
app.use(orderRoutes)
app.use(paymentRoutes)
app.use(contactRoutes)


app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta get",
  });
});

app.post("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta post",
    detail: "",
  });
});

app.put("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta put",
  });
});

app.delete("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta delete",
  });
});

app.listen(port, () => {
  console.log(`eschuchando en el puerto ${port}`);
});


