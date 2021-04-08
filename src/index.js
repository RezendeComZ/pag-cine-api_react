const express = require('express');
const app = express();
const cors = require('cors')


app.listen(3333, () => {
  console.log('server rodando na porta 3333')
})

app.use(cors())
app.use(express.json()) // Content-type