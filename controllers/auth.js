const { responce } = require('express')


const crearUsuario = ( req, res = responce ) => {
    
    return res.json( {
        ok: true,
        msg: "nuevo usuario"
    } );
} 


const renovarToken = ( req, res = responce ) => {

    return res.json( {
        ok:true,
        msg: "renew token"
    } );

} 

const LoginUsuario = ( req, res = responce ) => {
    
    return res.json( {
        ok: true,
        msg: "login"
    } );
} 


module.exports = {
    crearUsuario,
    renovarToken,
    LoginUsuario
}