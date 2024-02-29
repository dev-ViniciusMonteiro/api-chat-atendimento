const express = require("express");
const app = express();
const port = 3000;

//somente json
app.use(express.json());

// 4. Defina rotas para sua API
app.get("/", (req, res) => {
  res.send({ data: "Hello World" });
});

app.post("/mensagem/barbearia", (req, res) => {
  const { mensagem } = req.body;
  if (mensagem === "oi") {
    res.send({ data: "oi" });
  }
  res.send({ data: "mensagem não reconhecida" });
});

// 5. Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
