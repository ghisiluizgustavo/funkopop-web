const express = require('express')
const app = express()
const connection = require('./db/connection')
const routes = require('./routes/index.js')
const cors = require("cors");

app.use(cors())
app.use('/api', routes)

app.listen(4000, () => { 
  connection
  console.log('Aplicação executando na porta 4000!'); 
}); 