const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();


const generaraJWT = ( uid, name ) => {
    return new Promise( ( resolve, reject ) => {

        const payload = { uid, name };

        jwt.sign( payload, dotenv.parsed.SECRET_JWT_SEED, { 
            expiresIn: '6h', 
        }, (err, token )=>{ 
            if( err ){
                console.log(err)
                reject( "No se pudo generar el token" )
            }
            resolve( token );
        } );

    } );
}

module.exports = {
    generaraJWT
}