const express = require('express');
const app = express();
const port = 3000;


const exemploController = require('./controllers/exemploController');


app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/exemplo', exemploController.exemplo);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
