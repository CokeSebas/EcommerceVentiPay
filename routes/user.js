const express = require('express');
const router = express.Router();

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json({ message: 'Lista de usuarios' });
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Detalles del usuario ${userId}` });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const newUser = req.body; // Asegúrate de parsear el cuerpo en JSON
  res.status(201).json({ message: 'Usuario creado', user: newUser });
});

module.exports = router;
