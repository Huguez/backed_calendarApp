const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    }, password: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
});

// UsuarioSchema.method( 'toJson', function(){
    
// })


module.exports = model( 'Usuario', UsuarioSchema );