const fs = require('fs');
const path = require('path');

const apiKey = 'key_test_UTEXEZD9rOCa7y1W5ryIk5jJSDzSqIOhMznHSV9LqWwJ6m0HTf9T9j1RG8HQLUxS';
const ventipay = require('@ventipay/ventipay')(apiKey);

const procederPago = async (body) => {
  const amount = body.item.price;
  const currency = 'clp';
  const success_url= 'http://localhost:5000/api/checkout/payment-success?amount='+amount+'&currency='+currency;
  const cancel_url= 'http://localhost:5000/api/checkout/payment-failed';


  const payment = await ventipay.payments.create({
    amount: amount,
    currency: currency,
    success_url: success_url,
    cancel_url: cancel_url,
  });
  
  return payment.id;
};
exports.procederPago = procederPago;

const pagoExitoso = async (res, query) => {

  const nuevaOrden = query;
  const filePath = path.join(__dirname, '../json/ordenes.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo' });
    }

    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (parseErr) {
    }

    if (!Array.isArray(jsonData.ordenes)) {
      jsonData.ordenes = [];
    }
    jsonData.ordenes.push(nuevaOrden);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
    });
  });
  return query;  
};
exports.pagoExitoso = pagoExitoso;

const pagoRechazado = async (body) => {
  return true;  
};
exports.pagoRechazado = pagoRechazado;