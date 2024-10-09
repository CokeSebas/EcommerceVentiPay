const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productos');

router.get('/', (req, res) => {
  res.json(productsController.getProducts());
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Detalles del producto ${productId}` });
});

module.exports = router;
