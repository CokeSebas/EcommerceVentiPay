require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/user');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());


const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Usar el router de usuarios
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
