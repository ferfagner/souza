const express = require('express');
const cors = require('cors');

const app = express();

// Configuração do middleware CORS
app.use(cors({
  origin: 'https://souza-beige.vercel.app', // Substitua pelo seu domínio Vercel
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Resto da configuração do seu servidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
