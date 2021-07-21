const { responce } = require('express')

const Evento = require('../models/EventoModel')

const getEvents = async ( req, res = responce ) => {

    try {
        const eventos = await Evento.find().populate( 'user', 'name email' );

        res.status( 200 ).json( {
            ok: true,
            eventos
        } );
    } catch( error ) {
        res.status( 500 ).json( {
            ok: true,
            msg: "Error en el servidor"
        } );
    }

    
}

const createEvent = async ( req, res = responce ) => {
    
    const { title, notes, start, end } = req.body;
    
    try {
        const evento  = new Evento( {title, notes, start, end, user: req.uid } )
        
        await evento.save()

        res.status( 201 ).json( {
            ok: true,
            evento,
        } );

    } catch( error ){
        console.log( error )
        res.status( 500 ).json( {
            ok: true,
            msg: "Error en el servidor"
        } );
    }
}

const updateEvent = ( req, res = response ) => {

    res.status( 200 ).json( {
        ok: true,
        msg: "update"
    } );
}

const deleteEvent = ( req, res = response ) => {
    res.status( 200 ).json( {
        ok: true,
        msg: "delete"
    } );
}



module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}