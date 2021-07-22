const express = require('express')
// const dotenv = require('dotenv').config();
const cors = require('cors')

const { dbConection } = require('./databases/config')

//  process.env.PORT  === dotenv.parsed.PORT

//crea el servidor 
const app = express();

//base de datos
dbConection()

// cors 
app.use( cors() )

// directorio publico
app.use( express.static( 'public' ) )

//lectura de body
app.use( express.json() )

// Rutas
app.use( '/api/auth', require('./routes/auth') );
app.use( '/api/event', require('./routes/events') );


// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log( "servidor corriendo!!!" )
} )