# Proyecto aplicación ECommerce

Este proyecto consiste en una aplicación para una tienda real de papel mural y cortinas, la idea hacer uso de distintas herramientas.

La aplicación esta dividida en un modulo para el frontend y otro para el backend:

## Aplicación FrontEnd

La aplicación cuenta con paginas para el cliente final y una sección de administración.

## Aplicación Backend
Esta aplicación permite interactuar con la base de datos mongodb que contiene los datos de los productos, clientes y sus compras.

# Aplicación Backend
### Sección para el cliente final

Este sitio tiene las siguientes paginas para el cliente final:

Home con un carusel.
Nostros con una reseña y una lista de imagenes tipo quilt.
Tiene un catalogo que permite seleccionar las diferentes categorias de productos. La aplicación se comporta diferente en cada una de ellas:
Murales a Medida, el cliente elige la imagen, textura de papel y entrega sus medidas.
Papel de constructora, aca hay 2 opciones por bobinas o metros cuadrados.
Papel mural importado en rollos.
Cortinas, el cliente elige el tipo, la tela y entrega sus medidas.
Cada categoria tiene una vista para agregar al carrito
Hay una vista del carro de compra que permite pagar
Inicio de Sesión con opción de registro y olvido de clave
Contacto para dejar un mensaje.

### Sección de administración

Sección de administración que permite:
Revisar las compras
Revisar los productos

### Instalación

Para crear la aplicacion usamos
npx create-react-app dekko_front

y luego instalamos las siguientes librerias con npm:

npm i cors 
##### 
npm i dotenv
#####  
npm i express
#####  
npm i express-jwt 
##### 
npm i jsonwebtoken 
##### 
npm i mongoose 

### Deploy

Las aplicaciones se subieron a github y se uso Netlify para el deployment.
