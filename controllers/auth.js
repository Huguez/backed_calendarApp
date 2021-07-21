const { responce } = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = ( req, res = responce ) => {
    
    return res.status( 201 ).json( {
        ok: true,
        user: req.body
    } );
} 


const renovarToken = ( req, res = responce ) => {

    return res.json( {
        ok:true,
        msg: "renew token"
    } );

} 

const LoginUsuario = ( req, res = responce ) => {

    return res.status( 202 ).json( {
        ok: true,
        user: req.body
    } );

} 


module.exports = {
    crearUsuario,
    renovarToken,
    LoginUsuario
}