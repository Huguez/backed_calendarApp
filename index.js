const express = require('express')
const dotenv = require('dotenv').config();

//  process.env.PORT  === dotenv.parsed.PORT

//crea el servidor 
const app = express();

// directorio publico
app.use( express.static( 'public' ) )


// app.get('/', ( req, res ) => {
//     res.json( {
//         ok:true
//     } )
// })

// escuchar peticiones
app.listen( dotenv.parsed.PORT, () => {
    console.log( "servidor corriendo!!!" )
} )