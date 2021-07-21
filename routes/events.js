/*
    ruta: /api/event
*/ 
const { Router } = require('express')
const router = Router()
const { check } = require( 'express-validator' )

const { getEvents,
    createEvent,
    updateEvent,
    deleteEvent } = require('../controllers/events')
const { validarJWT } = require('../middlewares/validarJWT')
const { validarCampos } = require('../middlewares/validarCampos')
const { isDate } = require('../helpers/isDate')

// asi todos los endpoint de aqui para abajo tienen que pasar por validarJWT
router.use( validarJWT ); // gracias stackoverflow <3

router.get( '/getEvents', getEvents )

router.post( '/create', [ 
    check( 'title', 'El titulo es obligatorio' ).not().isEmpty(),
    check( 'start', 'La fecha de inicio es obligatoria ' ).not().isEmpty().custom( isDate ),
    check( 'start', 'La fecha de inicio es obligatoria ' ).not().isEmpty().custom( isDate ),
    check( 'end', 'La fecha final es obligatoria ' ).not().isEmpty().custom( isDate ),
    validarCampos
], createEvent )

router.put( '/update/:id', [ 
    check( 'title', 'El titulo es obligatorio' ).not().isEmpty(),
    check( 'start', 'La fecha de inicio es obligatoria ' ).not().isEmpty(),
    check( 'end', 'La fecha final es obligatoria ' ).not().isEmpty(),
    validarCampos
], updateEvent )

router.delete( '/delete/:id', deleteEvent )



module.exports = router