const express = require('express');
const cors = require('cors')

const routes = require('./routes/index')

const app = express();

app.listen(3030, () => {
  console.log('server rodando na porta 3030')
})

app.use(cors())
app.use(express.json()) // Content-type

app.use(routes)