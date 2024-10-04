const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productos');

// Obtener todos los usuarios
router.get('/', (req, res) => {
  //res.json({ message: 'Lista de productos' });
  console.log('(FX) (C) get');
  //productsController.getProducts();

  res.json(productsController.getProducts());
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Detalles del producto ${productId}` });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const newProduct = req.body; // Asegúrate de parsear el cuerpo en JSON
  res.status(201).json({ message: 'Producto creado', product: newProduct });
});

module.exports = router;
