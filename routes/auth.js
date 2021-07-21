/*
    ruta: /api/auth
*/ 
const { Router } = require('express')
const { check } = require( 'express-validator' )
const router = Router()
const { crearUsuario, renovarToken, LoginUsuario } = require('../controllers/auth')


router.get('/renew', renovarToken );

router.post('/', [
    check( 'email', 'El e-mail es obligatorio' ).not().isEmpty().isEmail(),
    check( 'password', 'El password es obligatorio' ).not().isEmpty(),
    check( 'password', 'El password debe ser mayor a 6 caracteres' ).isLength( { min: 6 } ),
], LoginUsuario );

router.post('/new',[ 
    check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'email', 'El e-mail es obligatorio' ).not().isEmpty().isEmail(),
    check( 'password', 'El password es obligatorio' ).not().isEmpty(),
    check( 'password', 'El password debe ser mayor a 6 caracteres' ).isLength( { min: 6 } ),
] , crearUsuario );


module.exports = router