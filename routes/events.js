/*
    ruta: /api/event
*/ 
const { Router } = require('express')
const router = Router()

const { validarJWT } = require('../middlewares/validarJWT')
const { getEvents,
    createEvent,
    updateEvent,
    deleteEvent } = require('../controllers/events')

router.get( '/getEvents', [validarJWT], getEvents )

router.post( '/create', [validarJWT], createEvent )

router.put( '/update/:id', [validarJWT], updateEvent )

router.delete( '/delete/:id', [validarJWT], deleteEvent )



module.exports = router