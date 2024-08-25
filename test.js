const express = require('express');
const app = express();
const port = 5004;

app.get('/receitas', (req, res) => {
  res.json([{ id: 1, nome: 'Receita Teste' }]);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
