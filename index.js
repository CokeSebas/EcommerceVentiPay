require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const checkoutRouter = require('./routes/checkout');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 5000;

// Middleware 
app.use(cors({
  origin: 'http://localhost:3000' // Permitir solicitudes desde el frontend
}));

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'build')));

app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.use('/api/products', productsRouter);
app.use('/api/checkout', checkoutRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
