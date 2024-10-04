// app.js
const express = require('express');
const app = express();
const port = 3000; // Puedes elegir cualquier puerto

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
