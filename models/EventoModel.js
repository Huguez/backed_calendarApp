const { Schema, model } = require("mongoose");

const EventoSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    }, 
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, {
    timestamps: true
} );

EventoSchema.method( 'toJSON', function() {
    // const { _id:id, title, notes, start, end, user, createAt, updateAt } = this.toObject();
    const {  __v, _id, ...event } = this.toObject();
    // const aux = { ...event }
    event.id = _id
    return event
})


module.exports = model( 'Evento', EventoSchema );
