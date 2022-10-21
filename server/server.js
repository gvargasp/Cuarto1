const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost/Biblioteca')
  .then(() => console.log('conectado a BBDD'))

app.listen(5005, () => console.log('SERVER ARRIBA'))