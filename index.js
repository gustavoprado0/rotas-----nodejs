// Incluir as bibliotecas
// Gerencia as requisições, rotas URLs, entre outra funcionalidade

const express = require('express')
// Chamar a função express
const app = express();

// Criar a rota do tipo GET direcionando para a página inicial do site
app.get('/', function (req, res) {
    // Retornar a frase
    res.send('Página inicial do site');
  });


// Criar a rota do tipo GET direcionando para a página sobre empresa
app.get('/sobre-empresa', (req, res) => {
    // Retornar a frase
    res.send('Página sobre empresa do site');
  });
  

// Criar a rota do tipo GET direcionando para a página de contato
app.get('/Contato', (req, res) => {
    // Retornar a frase
    res.send('Página de contato');
  });


  // Iniciar o servidor na porta 8080
  app.listen(8080, () => {
      console.log("Servidor iniciado na porta 8080: http://localhost:8080")
  });