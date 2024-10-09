const express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/checkout');


router.post('/', async (req, res) => {  
  return res.status(201).json(await checkoutController.procederPago(req.body) );
});

router.post('/payment-success', async (req, res) => {
  await checkoutController.pagoExitoso(res, req.query);
  res.redirect('http://localhost:3000/pago-exitoso/' + req.query.amount + '/' + req.query.currency);
});

router.post('/payment-failed', async (req, res) => {
  await checkoutController.pagoRechazado(req.body);
  res.redirect('http://localhost:3000/pago-rechazado');
});

module.exports = router;
