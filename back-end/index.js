const express = require('express')
const app = express()
const connection = require('./db/connection')
const routes = require('./routes/')
const cors = require("cors");

app.use(cors())
app.use('/api', routes)

app.listen(8080, () => { 
  connection
  console.log('Aplicação executando na porta 8080!'); 
}); 