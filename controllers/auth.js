const { responce } = require('express')
const { genSaltSync, hashSync, compareSync } =  require('bcryptjs')

const Usuario = require('../models/UsuarioModel')
const { generaraJWT } = require('../helpers/jwt')

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

        const token = await generaraJWT( user._id, user.name )

        return res.status( 201 ).json( {
            ok: true,
            user, 
            token
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

const LoginUsuario = async ( req, res = responce ) => {

    try{
        const { email, password } = req.body
        
        const user = await Usuario.findOne( { email } )
        
        if( !user ){
            return res.status( 404 ).json( {
                ok: false,
                msg: "El usuario NO Existe"
            } );
        }

        const validPass = compareSync( password, user.password )
        
        if( !validPass ){
            return res.status( 400 ).json( {
                ok: false,
                msg: "password incorrecto"
            } );
        }

        const token = await generaraJWT( user._id, user.name )

        return res.status( 202 ).json( {
            ok: true,
            user,
            token
        } );

    }catch( error ){
        console.log( error )
        return res.status( 500 ).json( {
            ok: false,
            msg:"Error del servidor"
        } );      
    }
} 


module.exports = {
    crearUsuario,
    renovarToken,
    LoginUsuario
}