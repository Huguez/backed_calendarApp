const { response } = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

const validarJWT = ( req, res = response, next ) => {

    const token = req.header('x-token')

    if( !token ){
        return res.status( 401 ).json({
            ok: false,
            msg: "falta el token"
        })
    }
    
    try{
        
        const { uid, name } = jwt.verify( token, dotenv.parsed.SECRET_JWT_SEED )

        req.uid = uid;
        req.name = name;
        
        next()
    }catch( err ){
        console.log(err)
        return res.status( 500 ).json({
            ok: false,
            msg: "Token no valido"
        });
    }

}

module.exports = {
    validarJWT
}