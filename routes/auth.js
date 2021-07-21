/*
    ruta: /api/auth
*/ 


const { Router } = require('express')
const router = Router()
const { crearUsuario, renovarToken, LoginUsuario } = require('../controllers/auth')


router.get('/renew', renovarToken );

router.post('/', LoginUsuario );

router.post('/new', crearUsuario );


module.exports = router