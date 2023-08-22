require('dotenv').config()

//Modelos
require('./models/CategoriasModels')
require('./models/FamiliasModels')
require('./models/OrdersModels')
require('./models/ProductsModels')
require('./models/TelasModels')
require('./models/TexturasModels')
require('./models/UsersModels')

const cors = require('cors')
//Rutas

const categoriaRoutes = require('./routes/CategoriasRoutes')
const familiaRoutes = require('./routes/FamiliasRoutes')
const orderRoutes = require('./routes/OrdersRoutes')
const productRoutes = require('./routes/ProductsRoutes')
const telaRoutes = require('./routes/TelasRoutes')
const texturaRoutes = require('./routes/TexturasRoutes')
const userRoutes = require('./routes/UsersRoutes')

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

app.listen(port, () => {
  console.log(`eschuchando en el puerto ${port}`)
});
