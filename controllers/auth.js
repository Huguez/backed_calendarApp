const { responce } = require('express')


const crearUsuario = ( req, res = responce ) => {
    const { name, email, password } = req.body
    
    if( name.length <= 3 ){
        return res.status( 400 ).json( {
            ok: false,
            msg: "El nombre debe de ser mayor a 5 caracteres validos",
        } );    
    }

    return res.status( 201 ).json( {
        ok: true,
        msg: "nuevo usuario",
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