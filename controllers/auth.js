const { responce } = require('express')
const { genSaltSync, hashSync } =  require('bcryptjs')

const Usuario = require('../models/UsuarioModel')


const crearUsuario = async ( req, res = responce ) => {
    try{
        const { name, email, password } = req.body
        
        let usuario = await Usuario.findOne( { email } )

        if( usuario ){
            return res.status( 400 ).json( {
                ok: false,
                msg: "El usuario ya existe"
            } );    
        }

        usuario = Usuario( { name, email, password } )

        const salt = genSaltSync()
        usuario.password = hashSync( password, salt )

        const user = await usuario.save();

        return res.status( 201 ).json( {
            ok: true,
            user
        } );

    }catch( error ){
        console.log( error )
        return res.status( 500 ).json( {
            ok: false,
            msg:"Error del servidor"
        } );
        
    }
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