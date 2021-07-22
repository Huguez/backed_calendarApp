const { responce } = require('express')
const { isValid } = require('mongoose').Types.ObjectId;

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
            ok: false,
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
            ok: false,
            msg: "Error en el servidor"
        } );
    }
}

const updateEvent = async ( req, res = response ) => {

    try{
        const _id = req.params.id
        
        if( !isValid( _id ) ) {
            return res.status( 404 ).json( {
                ok: false,
                msg: "El ID es invalido"
            } );
        }

        const { title, notes, start, end } = req.body;

        const evento = await Evento.findById( { _id } ) // await Evento.findById( _id )

        if( !evento ){
            return res.status( 404 ).json( {
                ok: false,
                msg: "El evento no existe"
            } );
        }

        if( evento.user != req.uid ){
            return res.status( 403 ).json( {
                ok: false,
                msg: "No se puede eliminar eventos de otro usuario",
                user: evento.user,
                uid: req.uid
            } );    
        }

        const eventoAux = {
            ...req.body,
            user: req.uid
        }

        const eventoUpdate = await Evento.findByIdAndUpdate( _id, eventoAux, { new: true } )

        return res.status( 202 ).json( {
            ok: true,
            event: eventoUpdate
        } );
    }catch( error ){
        console.log( error )
        return res.status( 500 ).json( {
            ok: false,
            msg: "Error del servidor"
        } );
    }
}

const deleteEvent = async ( req, res = response ) => {
    try{

        const _id = req.params.id
        
        if ( !isValid( _id ) ) {
            return res.status( 404 ).json( {
                ok: false,
                msg: "El ID es invalido"
            } );
        }

        const evento = await Evento.findById(  _id ) // await Evento.findById( _id )
       
        if( !evento ){
            return res.status( 404 ).json( {
                ok: false,
                msg: "El evento no existe"
            } );
        }
        
        if( evento.user != req.uid ){
            return res.status( 403 ).json( {
                ok: false,
                msg: "No se puede eliminar eventos de otro usuario",
                user: evento.user._id,
                uid: req.uid
        
            } );    
        }
        const eventDel = await Evento.findOneAndDelete( { _id } )

        return res.status( 202 ).json( {
            ok: true,
            msg: "evento Borrado",
            event: eventDel
        } );

    }catch( error ){
        console.log( error )
        res.status( 500 ).json( {
            ok: true,
            msg: "Error en el servidor"
        } );
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}