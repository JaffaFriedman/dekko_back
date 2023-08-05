let tablaProductos = [
  {
    sku: 1,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Boys & Girls I',
    nombre: 'B&G0304',
    descripcion: 'Selva con jirafas y elefantes',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_I04.png.webp',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_M04.png.webp'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 2,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Boys & Girls VI',
    nombre: 'B&G0602',
    descripcion: 'Elefantes y Aves',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/BG05_I_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/BG05_I_M02.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 3,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori II',
    nombre: 'SHI0204',
    descripcion: 'Imitación tela con franjas verticales rosadas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/01/SHI02_W_I04.png',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/01/SHI02_W_M04.png'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 3,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori I',
    nombre: 'SHI0123',
    descripcion: 'Imitación tela con franjas verticales rosadas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/09/SHI01_W_I23.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/09/SHI02_W_M23.png'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 4,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori I',
    nombre: 'SHI0126',
    descripcion: 'Imitación tela con franjas verticales rosadas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/09/SHI01_W_I26.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/09/SHI01_W_M26.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 5,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'New Baby I',
    nombre: 'NEW BAB0130',
    descripcion: 'Globlo en cielo con nubes celestes, con luna y estrellas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_I30.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_M30.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 6,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Sea World I',
    nombre: 'SEA0106',
    descripcion: 'Sirenas en fondo maritimo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SEA01_I_I06.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SEA01_I_M06.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 7,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Sea World I',
    nombre: 'SEA0120',
    descripcion: 'Fondo marino con plantas naranjo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/SEA01_I_I20.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/SEA01_I_M20.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/SEA01_I_M20-1.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 8,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Boys and Girls III',
    nombre: 'B&GA0301',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_I01.png',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_M01.png'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 9,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Boys and Girls III',
    nombre: 'B&GA0304',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_I04.png',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_M04.png'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 10,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Boys and Girls III',
    nombre: 'B&GA0312',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_I12.png',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_M12.png'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 11,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Crazy Forest & Sea',
    nombre: 'CFS0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/CFS01_I_I01-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/CFS01_I_M01-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 12,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Crazy Forest & Sea',
    nombre: 'CFS0109',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/CFS01_I_I09-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/CFS01_I_M09-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 13,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Crazy Forest & Sea',
    nombre: 'CFS0115',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/CFS01_I_I15-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/CFS01_I_M15-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 14,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas III',
    nombre: 'MAP0301',
    descripcion: 'Mapa infantil con fondo verde agua y autitos',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/10/MAP0301F_M.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 15,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas I',
    nombre: 'MAP0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 16,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas I',
    nombre: 'MAP0110',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_I10.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_M10.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 17,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas I',
    nombre: 'MAP0102',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_M02.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 18,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas I',
    nombre: 'MAP0103',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_I03.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP01_W_M03.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 19,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas II',
    nombre: 'MAP0201',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP02_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP02_W_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 20,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas II',
    nombre: 'MAP0209',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP02_W_I09.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP02_W_M09.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 21,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas III',
    nombre: 'MAP0301',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 22,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas III',
    nombre: 'MAP0323',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_I23.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_M23.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 23,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas III',
    nombre: 'MAP0326',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_I27.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_M27.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 24,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas III',
    nombre: 'MAP0325',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_I25.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_M25.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 25,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas II',
    nombre: 'MAP0216',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP02_W_I16.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/MAP02_W_M16.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 26,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen II',
    nombre: 'KIT0201',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_I01-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_M01-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 27,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen II',
    nombre: 'KIT0202',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_I02-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_M02-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 28,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen II',
    nombre: 'KIT0204',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_I04-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_M04-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 9,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen I',
    nombre: 'KIT0127',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT01_W_I27-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT01_W_M27-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 29,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen I',
    nombre: 'KIT0109',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT01_W_I09-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT01_W_M09-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 30,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen I',
    nombre: 'KIT0121',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT01_W_I21-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT01_W_M21-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 31,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen III',
    nombre: 'KIT0317',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/KIT03_W_I17.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/KIT03_W_M17.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 32,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen III',
    nombre: 'KIT0327',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/KIT03_W_I27.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/KIT03_W_M27.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 33,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen III',
    nombre: 'KIT0320',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/KIT03_W_I20.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/KIT03_W_M20.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 34,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0102',
    descripcion: 'Foto de Paris con la torre Eiffel y auto antiguo rojo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M02.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 35,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0106',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I06.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M06.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 36,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0113',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I13.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M13.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 37,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0112',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I12.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M12.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 38,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0119',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I19.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M19.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 39,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0124',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I24.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M24.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 40,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Landscapes I',
    nombre: 'LAN0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_I_I01-1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_I_M01.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 41,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Landscapes I',
    nombre: 'LAN0105',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_W_I05.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_W_M05.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 42,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Landscapes I',
    nombre: 'LAN0119',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_W_I19.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_W_M19.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 43,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Landscapes I',
    nombre: 'LAN0129',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_W_I29.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN01_W_M29.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 44,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Landscapes II',
    nombre: 'LAN0208',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN02_W_I08.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN02_W_M08.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 45,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Landscapes II',
    nombre: 'LAN0228',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN02_W_I28.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/LAN02_W_M28.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 46,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: 'Telar',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_45e09180a99e4a0695aab181b1106f3c~mv2.png/v1/fill/w_906,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_45e09180a99e4a0695aab181b1106f3c~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 220,
    pesos: [
      { peso: 220, precio: 4990 },
      { peso: 240, precio: 5990 },
      { peso: 280, precio: 6990 },
      { peso: 320, precio: 7990 },
      { peso: 380, precio: 8990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_d083cbfb2bdc474d977923e40012fb84~mv2.png/v1/fill/w_914,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_d083cbfb2bdc474d977923e40012fb84~mv2.png' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_91671df121ee4f01ab0a6988aca12a6a~mv2.png/v1/fill/w_909,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_91671df121ee4f01ab0a6988aca12a6a~mv2.png' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_45e09180a99e4a0695aab181b1106f3c~mv2.png/v1/fill/w_906,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_45e09180a99e4a0695aab181b1106f3c~mv2.png' },
      { codigo: 4, url: 'https://static.wixstatic.com/media/12b4f4_dc4e7bab8a024c5c960ef947b1f1ccf7~mv2.png/v1/fill/w_907,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_dc4e7bab8a024c5c960ef947b1f1ccf7~mv2.png' },
      { codigo: 5, url: 'https://static.wixstatic.com/media/12b4f4_04c07861316943ab8b18b55fa3cebfd4~mv2.png/v1/fill/w_912,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_04c07861316943ab8b18b55fa3cebfd4~mv2.png' },
      { codigo: 6, url: 'https://static.wixstatic.com/media/12b4f4_325961911d7f421c964ae732b84c58dc~mv2.png/v1/fill/w_909,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_325961911d7f421c964ae732b84c58dc~mv2.png' },
      { codigo: 7, url: 'https://static.wixstatic.com/media/12b4f4_8bfb97c2039842e5a9970b2fe2089cf9~mv2.png/v1/fill/w_918,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_8bfb97c2039842e5a9970b2fe2089cf9~mv2.png' },
      { codigo: 8, url: 'https://static.wixstatic.com/media/12b4f4_bd064e90f38f4db4838aa1e66039f1ed~mv2.png/v1/fill/w_913,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_bd064e90f38f4db4838aa1e66039f1ed~mv2.png' },
      { codigo: 9, url: 'https://static.wixstatic.com/media/12b4f4_a0fcfee2eed64f478285277964de904f~mv2.png/v1/fill/w_917,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_a0fcfee2eed64f478285277964de904f~mv2.png' }

    ],
    venta: 'mt2'
  },
  {
    sku: 47,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: 'Lino',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 220,
    pesos: [
      { peso: 220, precio: 4990 },
      { peso: 240, precio: 5990 },
      { peso: 280, precio: 6990 },
      { peso: 320, precio: 7990 },
      { peso: 380, precio: 8990 }],

    precio: 4990,

    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_e45eb04aa60949739a13cc40753df4d4~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_e45eb04aa60949739a13cc40753df4d4~mv2.png' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_8315879a1df34a73b28f75feec8c3967~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_8315879a1df34a73b28f75feec8c3967~mv2.png' },
      { codigo: 4, url: 'https://static.wixstatic.com/media/12b4f4_9d0fa309a191432c9448196639c7019c~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9d0fa309a191432c9448196639c7019c~mv2.png' },
      { codigo: 5, url: 'https://static.wixstatic.com/media/12b4f4_0cab72d8df4b4e13ac308c170164444e~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_0cab72d8df4b4e13ac308c170164444e~mv2.png' },
      { codigo: 6, url: 'https://static.wixstatic.com/media/12b4f4_8819d8b4c2404f59affaf1bf0ed24d48~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_8819d8b4c2404f59affaf1bf0ed24d48~mv2.png' },
      { codigo: 7, url: 'https://static.wixstatic.com/media/12b4f4_74666e2504e1497693ad7d277eb9931a~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_74666e2504e1497693ad7d277eb9931a~mv2.png' },
      { codigo: 8, url: 'https://static.wixstatic.com/media/12b4f4_45ed10cef93149819aa520dd55092c05~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_45ed10cef93149819aa520dd55092c05~mv2.png' },
      { codigo: 9, url: 'https://static.wixstatic.com/media/12b4f4_a062ac1de15444ca99dafde0539f7da9~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_a062ac1de15444ca99dafde0539f7da9~mv2.png' },
      { codigo: 10, url: 'https://static.wixstatic.com/media/12b4f4_007e037e8be44edb9e60c97e45547696~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_007e037e8be44edb9e60c97e45547696~mv2.png' },
      { codigo: 11, url: 'https://static.wixstatic.com/media/12b4f4_e7f83ab8b4ad4a9abc6d5f996c4c1b09~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_e7f83ab8b4ad4a9abc6d5f996c4c1b09~mv2.png' },
      { codigo: 12, url: 'https://static.wixstatic.com/media/12b4f4_7e292d61432743e08be9d98ad0ceaebb~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_7e292d61432743e08be9d98ad0ceaebb~mv2.png' },
    ],
    venta: 'mt2'
  },
  {
    sku: 48,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: 'Corteza',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_ba7909f4a28d4d0f8cd54a34a70453e5~mv2.png/v1/fill/w_912,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_ba7909f4a28d4d0f8cd54a34a70453e5~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 220,
    pesos: [
      { peso: 220, precio: 4990 },
      { peso: 240, precio: 5990 },
      { peso: 280, precio: 6990 },
      { peso: 320, precio: 7990 },
      { peso: 380, precio: 8990 }],

    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_ba7909f4a28d4d0f8cd54a34a70453e5~mv2.png/v1/fill/w_912,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_ba7909f4a28d4d0f8cd54a34a70453e5~mv2.png' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_fe8ad04e2ee945bdb426c7e39771f94c~mv2.png/v1/fill/w_535,h_451,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_fe8ad04e2ee945bdb426c7e39771f94c~mv2.png' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_f4fc1df2ab174cd0a6cc673a7937ec42~mv2.png/v1/fill/w_540,h_451,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_f4fc1df2ab174cd0a6cc673a7937ec42~mv2.png' }
    ],
    venta: 'mt2'
  },
  {
    sku: 49,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: 'New Gala',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_5c3d7cc2d8d14294a5d050e4dc714f93~mv2.png/v1/fill/w_903,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_5c3d7cc2d8d14294a5d050e4dc714f93~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 220,
    pesos: [
      { peso: 220, precio: 4990 },
      { peso: 240, precio: 5990 },
      { peso: 280, precio: 6990 },
      { peso: 320, precio: 7990 },
      { peso: 380, precio: 8990 }],

    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_e45eb04aa60949739a13cc40753df4d4~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_e45eb04aa60949739a13cc40753df4d4~mv2.png' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_8315879a1df34a73b28f75feec8c3967~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_8315879a1df34a73b28f75feec8c3967~mv2.png' },
      { codigo: 4, url: 'https://static.wixstatic.com/media/12b4f4_9d0fa309a191432c9448196639c7019c~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9d0fa309a191432c9448196639c7019c~mv2.png' },
      { codigo: 5, url: 'https://static.wixstatic.com/media/12b4f4_0cab72d8df4b4e13ac308c170164444e~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_0cab72d8df4b4e13ac308c170164444e~mv2.png' },
      { codigo: 6, url: 'https://static.wixstatic.com/media/12b4f4_8819d8b4c2404f59affaf1bf0ed24d48~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_8819d8b4c2404f59affaf1bf0ed24d48~mv2.png' },
      { codigo: 7, url: 'https://static.wixstatic.com/media/12b4f4_74666e2504e1497693ad7d277eb9931a~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_74666e2504e1497693ad7d277eb9931a~mv2.png' },
      { codigo: 8, url: 'https://static.wixstatic.com/media/12b4f4_45ed10cef93149819aa520dd55092c05~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_45ed10cef93149819aa520dd55092c05~mv2.png' },
      { codigo: 9, url: 'https://static.wixstatic.com/media/12b4f4_a062ac1de15444ca99dafde0539f7da9~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_a062ac1de15444ca99dafde0539f7da9~mv2.png' },
      { codigo: 10, url: 'https://static.wixstatic.com/media/12b4f4_007e037e8be44edb9e60c97e45547696~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_007e037e8be44edb9e60c97e45547696~mv2.png' },
      { codigo: 11, url: 'https://static.wixstatic.com/media/12b4f4_e7f83ab8b4ad4a9abc6d5f996c4c1b09~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_e7f83ab8b4ad4a9abc6d5f996c4c1b09~mv2.png' },
      { codigo: 12, url: 'https://static.wixstatic.com/media/12b4f4_7e292d61432743e08be9d98ad0ceaebb~mv2.png/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_7e292d61432743e08be9d98ad0ceaebb~mv2.png' },
    ],
    venta: 'mt2'
  },
  {
    sku: 50,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: 'Rustic',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_146d4161b2004b90aa9bf2124b7f7043~mv2.png/v1/fill/w_914,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_146d4161b2004b90aa9bf2124b7f7043~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 220,
    pesos: [
      { peso: 220, precio: 4990 },
      { peso: 240, precio: 5990 },
      { peso: 280, precio: 6990 },
      { peso: 320, precio: 7990 },
      { peso: 380, precio: 8990 }],

    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_146d4161b2004b90aa9bf2124b7f7043~mv2.png/v1/fill/w_914,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_146d4161b2004b90aa9bf2124b7f7043~mv2.png', },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_1dbfd3c9739e41df92853129908c079a~mv2.png/v1/fill/w_536,h_451,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_1dbfd3c9739e41df92853129908c079a~mv2.png' }],
    venta: 'mt2'
  },
  {
    sku: 51,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'CORTINA ROLLER',
    catalogo: 'Coleccion Primavera',
    nombre: 'Cortina Roller',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_0a8f9a90328d47cdbcacc93e53d71adf~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_0a8f9a90328d47cdbcacc93e53d71adf~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_9450e3e1f5dc4cdba49edd64a11f18a2~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9450e3e1f5dc4cdba49edd64a11f18a2~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_9f212a7066f446ef890cb4ac685767cb~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9f212a7066f446ef890cb4ac685767cb~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 600,
    precio: 79990,
    venta: 'mt2'
  },
  {
    sku: 52,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'PERSIANA',
    catalogo: 'Coleccion Primavera',
    nombre: 'Persiana de Aluminio 16mm',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_bd462bf7812d42819484f17e629fc653~mv2.jpg/v1/fill/w_1145,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_bd462bf7812d42819484f17e629fc653~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_69e8f5c25dca407cbafad9a68ecb34e3~mv2.jpg/v1/fill/w_660,h_495,al_c,q_80,enc_auto/12b4f4_69e8f5c25dca407cbafad9a68ecb34e3~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_6184613e121b4ecb833d72c49e870235~mv2.jpg/v1/fill/w_720,h_360,al_c,lg_1,q_80,enc_auto/12b4f4_6184613e121b4ecb833d72c49e870235~mv2.jpg',],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 39990,
    venta: 'mt2'
  },
  {
    sku: 53,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'PERSIANA',
    catalogo: 'Coleccion Primavera',
    nombre: 'Persiana de Aluminio 25mm',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_1079fa76846347c68c0eec66d13865d3~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/12b4f4_1079fa76846347c68c0eec66d13865d3~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_6a9efb94faae4be6ad6954460ede9085~mv2.jpg/v1/fill/w_600,h_436,al_c,q_80,enc_auto/12b4f4_6a9efb94faae4be6ad6954460ede9085~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_c1135e2754be494b8021e9ea016858c8~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_80,enc_auto/12b4f4_c1135e2754be494b8021e9ea016858c8~mv2.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 39990,
    venta: 'mt2'
  },
  {
    sku: 54,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'PERSIANA',
    catalogo: 'Coleccion Primavera',
    nombre: 'Persiana de Aluminio 50mm',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_80b70bc3098b4380852c11946607d774~mv2.jpg/v1/fill/w_696,h_407,al_c,lg_1,q_80,enc_auto/12b4f4_80b70bc3098b4380852c11946607d774~mv2.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 39990,
    venta: 'mt2'
  },
  {
    sku: 55,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'PERSIANA',
    catalogo: 'Coleccion Primavera',
    nombre: 'Persiana de Madera 50mm',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_0586858ead2947109bdd8f14dba4a93c~mv2.jpg/v1/fill/w_720,h_484,al_c,lg_1,q_80,enc_auto/12b4f4_0586858ead2947109bdd8f14dba4a93c~mv2.jpg',
    'https://static.wixstatic.com/media/12b4f4_f6a54c0d79ea4a77ba9e849f9e610cdf~mv2.jpg/v1/fill/w_851,h_566,al_c,lg_1,q_85,enc_auto/12b4f4_f6a54c0d79ea4a77ba9e849f9e610cdf~mv2.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 39990,
    venta: 'mt2'
  },
  {
    sku: 56,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'CORTINA ROLLER DUO',
    catalogo: 'Coleccion Primavera',
    nombre: '15',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_8c3470f758da427bb2310ce52d1a2d44~mv2.jpg/v1/fill/w_1145,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_8c3470f758da427bb2310ce52d1a2d44~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_6168c460505d4d7fb995cb2a37a894a4~mv2.jpg/v1/fill/w_600,h_300,al_c,q_80,enc_auto/12b4f4_6168c460505d4d7fb995cb2a37a894a4~mv2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 59990,
    venta: 'mt2'
  },
  {
    sku: 57,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'TOLDO',
    catalogo: 'Coleccion Primavera',
    nombre: '16',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_a0d7f183866944a3aef96e15f1d62801~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,enc_auto/12b4f4_a0d7f183866944a3aef96e15f1d62801~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_20f2b56ce1ec4f5984b3dc5788824045~mv2.jpg/v1/fill/w_359,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_20f2b56ce1ec4f5984b3dc5788824045~mv2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 99990,
    venta: 'mt2'
  },
  {
    sku: 58,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'Concrete',
    nombre: 'Beige',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_73aaafc77a7d4a118c1a4dc3bf669e67~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_73aaafc77a7d4a118c1a4dc3bf669e67~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_c2d453c00ec547a1819817294ce9d6ca~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_c2d453c00ec547a1819817294ce9d6ca~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },
  {
    sku: 59,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'Altagama',
    nombre: 'Hojas',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_daf0619b43fe44fc97af4ca6938b484b~mv2.jpg/v1/fill/w_542,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_daf0619b43fe44fc97af4ca6938b484b~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_532ae408b2f841e994158aa1d6ed8ad5~mv2.jpg/v1/fill/w_542,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_532ae408b2f841e994158aa1d6ed8ad5~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_c9cafddf56bd4027bb12fcf915637bea~mv2.jpg/v1/fill/w_542,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_c9cafddf56bd4027bb12fcf915637bea~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_9845e9b852d24b3a80b789cc8621b6c8~mv2.jpg/v1/fill/w_542,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9845e9b852d24b3a80b789cc8621b6c8~mv2.jpg',
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },

  {
    sku: 60,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'Concreto',
    nombre: 'Concreto',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_fde58c10562340559f3bd07105c0b26e~mv2.jpg/v1/fill/w_654,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_fde58c10562340559f3bd07105c0b26e~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },

  {
    sku: 61,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'Concreto',
    nombre: 'Hojas sobre concreto',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_f91882e190dc472ead25c91441c9bd8e~mv2.jpg/v1/fill/w_542,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_f91882e190dc472ead25c91441c9bd8e~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },

  {
    sku: 62,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'New Image',
    nombre: 'Arboles',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_c37b27f8200e45b085563cb7e58fc41f~mv2.png/v1/fill/w_543,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_c37b27f8200e45b085563cb7e58fc41f~mv2.png'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },

  {
    sku: 63,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'METROPOLITAN STORIES',
    nombre: 'Hojas Grises',
    descripcion: 'Empastado',
    url: [
      'https://static.wixstatic.com/media/12b4f4_13eeacaaa089407984a6b58dbc8dc932~mv2.jpg/v1/fill/w_543,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_13eeacaaa089407984a6b58dbc8dc932~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },
  {
    sku: 64,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'RIVIERA MAISON',
    nombre: 'Familia',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_ec4bdd4670c0450cb9dd2df22a2b0fca~mv2.jpg/v1/fill/w_675,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_ec4bdd4670c0450cb9dd2df22a2b0fca~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },

  {
    sku: 65,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'METROPOLITAN STORIES',
    nombre: 'Cerezos',
    descripcion: 'Empastado',
    url: [
      'https://static.wixstatic.com/media/12b4f4_6d05af3a8b80420ea6ca4b3acbc1dac6~mv2.jpg/v1/fill/w_675,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_6d05af3a8b80420ea6ca4b3acbc1dac6~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 0,
  },

  {
    sku: 66,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: 'Factory IV',
    nombre: 'Ladrillos',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_276a3de8b5e74595b9b81e757227aad6~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_276a3de8b5e74595b9b81e757227aad6~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_77b450d626b24d61a6a1e7d23df38c60~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_77b450d626b24d61a6a1e7d23df38c60~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: 'rollo de 5mt2',
    calce: 64,
  },

  {
    sku: 67,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Pin point',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_91714ea6a7f341ef8b5d102f33aa4dd9.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_91714ea6a7f341ef8b5d102f33aa4dd9.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_91714ea6a7f341ef8b5d102f33aa4dd9.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_91714ea6a7f341ef8b5d102f33aa4dd9.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_fb689d5d87244421945a1e5092fe0792.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_fb689d5d87244421945a1e5092fe0792.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_f777a7982cf9460696e87e729d149886.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_f777a7982cf9460696e87e729d149886.jpg' },
    ],
    venta: 'mt2'
  },
  {
    sku: 68,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Rattan',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_93ac3d363996493bafac8b6030488ea5.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_93ac3d363996493bafac8b6030488ea5.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_93ac3d363996493bafac8b6030488ea5.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_93ac3d363996493bafac8b6030488ea5.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_c417630228914c16a7baa884ae4118be.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_c417630228914c16a7baa884ae4118be.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_90c3d991f3d04478a8a11905bd321f68.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_90c3d991f3d04478a8a11905bd321f68.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 69,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Ceylan',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_824d9428908f41c89f6629b8851b09fe.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_824d9428908f41c89f6629b8851b09fe.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_824d9428908f41c89f6629b8851b09fe.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_824d9428908f41c89f6629b8851b09fe.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_2d0eaaab6e284cf8a445d984aa9ec232.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_2d0eaaab6e284cf8a445d984aa9ec232.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_b0e4ba889b2a4f2790f41601a9b98c15.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_b0e4ba889b2a4f2790f41601a9b98c15.jpg' },
    ],
    venta: 'mt2'
  },
  {
    sku: 70,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Square',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_251d6ca87b134e0d92a13c286eaa26a4~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_251d6ca87b134e0d92a13c286eaa26a4~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_251d6ca87b134e0d92a13c286eaa26a4~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_251d6ca87b134e0d92a13c286eaa26a4~mv2.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_a972090d76904a5d92658e7ba993132a~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_a972090d76904a5d92658e7ba993132a~mv2.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_37225589aa604abbb3f1b52cccfd8e9f~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_37225589aa604abbb3f1b52cccfd8e9f~mv2.jpg' },
    ],
    venta: 'mt2'
  },
  {
    sku: 71,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Niza',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_a372897eeb684c74bc7551d99afb9370~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_a372897eeb684c74bc7551d99afb9370~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_a372897eeb684c74bc7551d99afb9370~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_a372897eeb684c74bc7551d99afb9370~mv2.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_41387e52aaad4511b39dbd18ed417e3c~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_41387e52aaad4511b39dbd18ed417e3c~mv2.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_3413da2dc48c40628e652acf5308bf8e~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_3413da2dc48c40628e652acf5308bf8e~mv2.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 72,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Junco',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_5df7ca17601f4e22b1db9135dcb23dff.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_5df7ca17601f4e22b1db9135dcb23dff.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_54e3c88c7e234b07a70fdb64bf316b20.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_54e3c88c7e234b07a70fdb64bf316b20.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_4d7b9cad271b4c88b96bea7e941b518a.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_4d7b9cad271b4c88b96bea7e941b518a.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_5df7ca17601f4e22b1db9135dcb23dff.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_5df7ca17601f4e22b1db9135dcb23dff.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 73,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Intimate',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_d81299c57d804f22937aaafdcf89810e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_d81299c57d804f22937aaafdcf89810e.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_d81299c57d804f22937aaafdcf89810e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_d81299c57d804f22937aaafdcf89810e.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_a91ee4ebdf14423ea1a676f57cdf88f1.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_a91ee4ebdf14423ea1a676f57cdf88f1.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_4c7e73ff0afd4fa58f90dcdd27c90bab.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_4c7e73ff0afd4fa58f90dcdd27c90bab.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 74,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Elite',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_ff698f88b25345a4b8a5def923f5431c.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_ff698f88b25345a4b8a5def923f5431c.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_ff698f88b25345a4b8a5def923f5431c.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_ff698f88b25345a4b8a5def923f5431c.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_23f547fc51f4403093aae856e22028d1.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_23f547fc51f4403093aae856e22028d1.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_eafc06a3204e481abf0aa9cf6a411bd6.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_eafc06a3204e481abf0aa9cf6a411bd6.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 75,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Petate',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_833aeb12630a4dfbb80dd30dc5dd7208.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_833aeb12630a4dfbb80dd30dc5dd7208.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_833aeb12630a4dfbb80dd30dc5dd7208.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_833aeb12630a4dfbb80dd30dc5dd7208.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_d2cb918b877443cb9b07811fa538c867.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_d2cb918b877443cb9b07811fa538c867.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_37f12b92a9964aeea3453a8e9c53e095.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_37f12b92a9964aeea3453a8e9c53e095.jpg' },
      { codigo: 4, url: 'https://static.wixstatic.com/media/12b4f4_17056b4f62824b9caf40547de6105b2b.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_17056b4f62824b9caf40547de6105b2b.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 76,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Cañamo',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_e26a124c49b74f1bb760827a3b59c94d.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_e26a124c49b74f1bb760827a3b59c94d.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_e26a124c49b74f1bb760827a3b59c94d.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_e26a124c49b74f1bb760827a3b59c94d.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_ed2ef73c8a6c45f69d12a9fa5be7b9d5.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_ed2ef73c8a6c45f69d12a9fa5be7b9d5.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_2e35eda386de40049a1d7463b3e09c00.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_2e35eda386de40049a1d7463b3e09c00.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 77,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Bermatex',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_42207c76b8c74696862389d607453413.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_42207c76b8c74696862389d607453413.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_8c08187ae9734b6c846d89b4dd1a60df.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_8c08187ae9734b6c846d89b4dd1a60df.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_21226a4a627b4961bcf4d54a4ceadb0e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_21226a4a627b4961bcf4d54a4ceadb0e.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_42207c76b8c74696862389d607453413.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_42207c76b8c74696862389d607453413.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 78,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Oxford',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg'],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_036b0e58cfac438eb3140b605111dbd9.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_036b0e58cfac438eb3140b605111dbd9.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_77607dd9d4c643f9874a22f4deec7d74.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_77607dd9d4c643f9874a22f4deec7d74.jpg' },
      { codigo: 4, url: 'https://static.wixstatic.com/media/12b4f4_1e722b8c510b406fa3485d30feb53930.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1e722b8c510b406fa3485d30feb53930.jpg' },
      { codigo: 5, url: 'https://static.wixstatic.com/media/12b4f4_1e6f0388b01145f1b2d91d1b51327353.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1e6f0388b01145f1b2d91d1b51327353.jpg' },
      { codigo: 6, url: 'https://static.wixstatic.com/media/12b4f4_0a7ac89e73fb4a418f3500957614aac6.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_0a7ac89e73fb4a418f3500957614aac6.jpg' },
      { codigo: 7, url: 'https://static.wixstatic.com/media/12b4f4_23c234868434416b8b0e1b5c7e7a92c1.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_23c234868434416b8b0e1b5c7e7a92c1.jpg' },
      { codigo: 8, url: 'https://static.wixstatic.com/media/12b4f4_8b4d9ec5bead4ec889d4d1604cb70f3d.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_8b4d9ec5bead4ec889d4d1604cb70f3d.jpg' },
      { codigo: 9, url: 'https://static.wixstatic.com/media/12b4f4_b2c961b7fcdd4109b9454102c4d7b2bf.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_b2c961b7fcdd4109b9454102c4d7b2bf.jpg' },
      { codigo: 10, url: 'https://static.wixstatic.com/media/12b4f4_a6c38a01fc3d4050ac5b15df8689d379.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_a6c38a01fc3d4050ac5b15df8689d379.jpg' },
      { codigo: 11, url: 'https://static.wixstatic.com/media/12b4f4_281d1fc3e7564346ba725a32d28c42d7.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_281d1fc3e7564346ba725a32d28c42d7.jpg' },
    ],
    venta: 'mt2'
  },
  {
    sku: 79,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Venesia',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_bf3b368a3e444a4d86950250d885662c~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_bf3b368a3e444a4d86950250d885662c~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_09f8ca7ee22f452f9e7d2ecf78f45373.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_09f8ca7ee22f452f9e7d2ecf78f45373.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_5f54e0f2f3184e83b4ed81fefe96804b.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_5f54e0f2f3184e83b4ed81fefe96804b.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_5ac3ba65921c4a438b507831ddc31e93.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_5ac3ba65921c4a438b507831ddc31e93.jpg' },
      { codigo: 4, url: 'https://static.wixstatic.com/media/12b4f4_16aa5959662f4e219fc204f1e3f31394.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_16aa5959662f4e219fc204f1e3f31394.jpg' },
    ], venta: 'mt2'
  },
  {
    sku: 80,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Grass Cloth',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_03c71ad40cfe4cc3b7926242221608f7~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_03c71ad40cfe4cc3b7926242221608f7~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_9417379c6d6048e6a911ef12c5a4e86a~mv2.jpg/v1/fillw_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9417379c6d6048e6a911ef12c5a4e86a~mv2.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_5546ee84c40146f691b025f22d3d7f29~mv2.jpg/v1/fillw_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_5546ee84c40146f691b025f22d3d7f29~mv2.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 81,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Tacami',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_d489895608414167a12defc391146bc0~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_d489895608414167a12defc391146bc0~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_55e3b5afd4d143cebb56afb5ec0a10bf~mv2.jpg/v1/fillw_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_55e3b5afd4d143cebb56afb5ec0a10bf~mv2.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_11b0c27462d74458b898a2fa7af7be27~mv2.jpg/v1/fillw_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_11b0c27462d74458b898a2fa7af7be27~mv2.jpg' },],
    venta: 'mt2'
  },
  {
    sku: 82,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Raffia',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_68eacb1947ce45c0869b093174b4ff82~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_68eacb1947ce45c0869b093174b4ff82~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_68eacb1947ce45c0869b093174b4ff82~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_68eacb1947ce45c0869b093174b4ff82~mv2.jpg' },
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_8d86a4ee251c4572a1e08b089ec69233~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_8d86a4ee251c4572a1e08b089ec69233~mv2.jpg' },
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_31cf7677b3d24bde86b4841dd174c953~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_31cf7677b3d24bde86b4841dd174c953~mv2.jpg' },
    ],
    venta: 'mt2'
  },


  {
    sku: 83,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Tosco',
    descripcion: 'Tosco',
    url: [
      'https://static.wixstatic.com/media/12b4f4_9283a24e6abf4aef9f399932772e9e7f~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_9283a24e6abf4aef9f399932772e9e7f~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_8c62fec3c72c4398afea30d9d427eb84~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_8c62fec3c72c4398afea30d9d427eb84~mv2.jpg' },
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_49ac0aac8247460e8343ca62d401778c~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_49ac0aac8247460e8343ca62d401778c~mv2.jpg' },
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_391f54c192d24110a4d0e4c3bc017aee~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_391f54c192d24110a4d0e4c3bc017aee~mv2.jpg' },
    ],
    venta: 'mt2'
  },
  {
    sku: 84,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Bamboo',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_b6bb5e6c40cc40b5a41177f2a3992fd0~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_b6bb5e6c40cc40b5a41177f2a3992fd0~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 220,
    pesos: [
      { peso: 260, precio: 6990 },
      { peso: 280, precio: 7990 },
      { peso: 380, precio: 8990 },
      { peso: 500, precio: 9990 }],
    precio: 4990,
    colores: [
      { codigo: 1, url: 'https://static.wixstatic.com/media/12b4f4_eb3d68fd95a7461c887f3e3c5aa0eff2~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_eb3d68fd95a7461c887f3e3c5aa0eff2~mv2.jpg' },
      { codigo: 2, url: 'https://static.wixstatic.com/media/12b4f4_7d55c6b8b17e4d8c85df94f5d31fa32e~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_7d55c6b8b17e4d8c85df94f5d31fa32e~mv2.jpg' },
      { codigo: 3, url: 'https://static.wixstatic.com/media/12b4f4_8db4f7b6561e4a0bbde5fe1c334fea90~mv2.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_8db4f7b6561e4a0bbde5fe1c334fea90~mv2.jpg' },
    ],
    venta: 'mt2'
  },
  {
    sku: 85,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB0115',
    nombre: 'BAB0115',
    descripcion: 'Fondo marino con plantas naranjo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_I015.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_M015.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 86,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB01',
    nombre: 'BAB0126',
    descripcion: 'Fondo marino con plantas naranjo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_I026.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_M026.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 87,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB05',
    nombre: 'BAB0506',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BAB05_I_I06-3-300x184.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BAB05_I_M06-3.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 88,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB05',
    nombre: 'BAB0507',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BAB05_I_I07-3.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BAB05_I_M07-3.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 89,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB05',
    nombre: 'BAB0510',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BAB05_I_I10-3.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BAB05_I_M10-3.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 90,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB06',
    nombre: 'BAB0609',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/BAB06_I_I09.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/BAB06_I_M09.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 91,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB04',
    nombre: 'BAB0401',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/08/BAB04_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/08/BAB04_W_M01.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 92,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'NEW BAB04',
    nombre: 'BAB0402',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/08/BAB04_W_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/08/BAB04_W_M02.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 93,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica VII',
    nombre: 'BOT0701',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/12/BOT07_I_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/12/BOT07_I_M01.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 94,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica VIII',
    nombre: 'BOT0801',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_I01_1-1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 95,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica VIII',
    nombre: 'BOT0809',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_I09_1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_M09_1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_M09-1_1.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 96,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica VIII',
    nombre: 'BOT0818',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_I18_1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/BOT08_I_M18.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 97,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica III',
    nombre: 'BOT0301',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/BOT03_W_I04.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/BOT03_W_M04.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 98,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica Wild',
    nombre: 'BOW0105',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/BOW01_W_I5.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/BOW01_W_M5.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 99,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Botánica Wild',
    nombre: 'BOW0130',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/BOW01_W_I30.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/BOW01_W_M30.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 100,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Junglas IV',
    nombre: 'JUN0401',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M01-1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M01-2.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },

  {
    sku: 101,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Junglas IV',
    nombre: 'JUN0402',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M02-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M02.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 102,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Junglas IV',
    nombre: 'JUN0410',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_I10.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M10-1.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_10-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_10-3.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_10-4.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 103,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Junglas IV',
    nombre: 'JUN0411',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_I11.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M11-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/10/JUN04_I_M11.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 104,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Concreto I',
    nombre: 'CON0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/10/CON01_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/10/CON01_W_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },

  {
    sku: 105,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Concreto I',
    nombre: 'CON0105',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/10/CON01_W_I05.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/10/CON01_W_M05.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 106,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Concreto I',
    nombre: 'CON0113',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/10/CON01_W_I13.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/10/CON01_W_M13.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },


  {
    sku: 107,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Mármol',
    nombre: 'MAR0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/mar101.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2020/12/Mar01_I_M01.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 108,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Mármol',
    nombre: 'MAR0117',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/mar117.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2020/12/Mar01_I_M17.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 109,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Mármol',
    nombre: 'MAR0108',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/mar108.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2020/12/MAR01_I_M08.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 110,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Ladrillos I',
    nombre: 'BRI0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/LAD01_0_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BRI01_I_M01-.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/LAD101-.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 111,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Ladrillos I',
    nombre: 'BRI0102',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/LAD01_0_I02-ok.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BRI01_I_M02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BRI01_I_I02.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 112,

    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Ladrillos I',
    nombre: 'BRI0110',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/LAD01_0_I10.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BRI01_I_M010.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/BRI01_I_I010.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 113,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Stones I',
    nombre: 'STN0101',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/03/STN01_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/03/STN01_W_M01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/STN0101.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 114,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Stones I',
    nombre: 'STN0102',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/03/STN01_W_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/03/STN01_W_M02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/STN0102.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 115,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Stones I',
    nombre: 'STN0107',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/03/STN01_W_I07.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/03/STN01_W_M07.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/03/STN0107-1.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 116,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Wood IV',
    nombre: 'WOO0416',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/07/WOO04_I_I016.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/07/WOO04_I_M016.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 117,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Wood IV',
    nombre: 'WOO0417',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/07/WOO04_I_I017.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/07/WOO04_I_M017.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 118,
    familia: 'MURALES A MEDIDA',
    categoria: 'REVESTIMIENTOS',
    catalogo: 'Wood IV',
    nombre: 'WOO0418',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/07/WOO04_I_I018.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/07/WOO04_I_M018.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 119,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori III',
    nombre: 'SHI0301',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SHI03_I_I01-300x213.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SHI03_I_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 120,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori III',
    nombre: 'SHI0312',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SHI03_I_I12-300x213.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SHI03_I_M012.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 121,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori III',
    nombre: 'SHI0323',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SHI03_I_I23-300x213.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SHI03_I_M023.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 122,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Africa II',
    nombre: 'AFR0201',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_M01.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 123,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Africa II',
    nombre: 'AFR0202',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_M02.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 124,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Africa II',
    nombre: 'AFR0204',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_I04.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_M04.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 125,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Africa II',
    nombre: 'AFR0210',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_I010.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFRI02_I_M10.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 126,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Africa II',
    nombre: 'AFR0211',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_I011.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/AFR02_I_M11.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },
  {
    sku: 127,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Damask I',
    nombre: 'DMK0102',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/01/DMK02-_I_102-300x183.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/01/M_DMK02.jpg',
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: 'mt2'
  },

]

export default tablaProductos