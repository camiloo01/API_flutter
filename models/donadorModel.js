const mongoose = require('mongoose');

const donadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  edad: {
    type: Number,
    required: true
  }
});

const Donador = mongoose.model('Donador', donadorSchema);

module.exports = Donador;
