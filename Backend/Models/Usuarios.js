const {Schema, model} = require('mongoose');


const usuarioSchema = new Schema({

email:{
    type: String,
    required: [true, "El correo electronico es obligatorio"],
    unique: true
},

nombreApellido:{
    type: String,
    required: [true, "Ingrese Nombre y Apellido"]
},

cumpleaños:{
    type: String,
    required: [true, "Ingrese la Fecha de Cumpleaños"],
    
},

});

const Usuario = model('Usuario', usuarioSchema );

module.exports = Usuario; 