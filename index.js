const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Minha Página HTML</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          background: white;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          text-align: center;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
      <script>
        function showUrl() {
          document.getElementById('client-url').innerText = window.location.href;
        }
        window.onload = showUrl;
      </script>
    </head>
    <body>
      <div class="container">
        <img src="/cato.png" alt="Minha Imagem">
        <h1>Bem-vindo à minha página!</h1>
        <p>Este é o retorno do meu server na URL: <strong id="client-url"></strong></p>
      </div>
    </body>
    </html>
  `);
  });

app.listen(port, () => {
    console.log(`Server na porta ${port}`);
});
