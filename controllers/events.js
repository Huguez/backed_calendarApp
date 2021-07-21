const { responce } = require('express')

const Evento = require('../models/EventoModel')

const getEvents = ( req, res = responce ) => {
    res.status( 200 ).json( {
        ok: true,
        msg: "getEventos"
    } );
}

const createEvent = async ( req, res = responce ) => {
    const { title, notes, start, end } = req.body
    console.log( title, notes, start, end )
    const evento  = Evento( { title, notes, start, end } )
    
    res.status( 200 ).json( {
        ok: true,
        msg: "create",
        evento
    } );
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