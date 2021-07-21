const { Schema, model } = require("mongoose");

const EventoSchema = new Schema( {
    tilte: {
        type: String,
        require: true
    },
    notes: {
        type: String,
    }, 
    start: {
        type: Date,
        require: true,
    },
    end: {
        type: Date,
        require: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    }
}, {
    timestamps: true
} );


module.exports = model( 'Evento', EventoSchema );
