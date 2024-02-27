const express = require('express');
const app = express();
const port = 3000;

//somente json
app.use(express.json());


// 4. Defina rotas para sua API
app.get('/', (req, res) => {
  res.send({data: 'Hello World'});
});


// 5. Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});