const { responce } = require('express')
const { validationResult } = require('express-validator')


const validarCampos = ( req, res = responce, next ) => {

    const error  = validationResult( req )
    
    if( !error.isEmpty() ){   
        return res.status( 400 ).json( {
            ok: false, 
            errors: error.errors
        } )
    }
        
    next();
}

module.exports = {
    validarCampos
}