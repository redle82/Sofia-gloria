
const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('📦 Novo pedido recebido do GloriaFood:');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send('Pedido recebido com sucesso!');
});

app.get('/', (req, res) => {
  res.send('🚀 Servidor Sofia Gloria está rodando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
