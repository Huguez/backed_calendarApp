

const { response } = require('express')


const getEvents = ( req, res = response ) => {
    res.status( 200 ).json( {
        ok: true,
        msg: "getEventos"
    } );
}

const createEvent = ( req, res = response ) => {
    res.status( 200 ).json( {
        ok: true,
        msg: "create"
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