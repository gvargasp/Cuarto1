const mongoose = require('mongoose')

const lectorSchema = mongoose.Schema({
  apellidos: String,
  ci: String,
  codigo: Number,
  direccion: String,
  fecha: String,
  nombre: String
})

const Lector = mongoose.model('lector', lectorSchema)

module.exports = Lector