const express = require('express');
const app = express();
const cors = require('cors')

app.listen(3000, () => {
  console.log('server rodando na porta 3000')
})

app.use(cors())