const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost/Biblioteca')
  .then(() => console.log('conectado a BBDD'))

const Lector = require('./Models/Lector.model')

app.get('/api/lectors', (req, res) => 
  {
    Lector
      .find()
      .then(allLectors => res.json(allLectors))

})


app.get('/api/details/:lector_id', (req, res) => {

    const { lector_id } = req.params

    Lector
      .findById(lector_id)
      .then(lector => res.json(lector))

})

app.listen(5005, () => console.log('SERVER ARRIBA'))