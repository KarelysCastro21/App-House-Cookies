const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  email: { type: String, required: true },
  asunto: { type: String, required: true },
  consulta: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

const Consulta = mongoose.model('Consulta', consultaSchema);

module.exports = Consulta;