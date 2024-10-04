const fs = require('fs');
const path = require('path');

// Leer archivo JSON
const getProducts = () => {
  console.log('(fx) getProducts');
  const data = fs.readFileSync(path.join(__dirname, '../json/productos.json'), 'utf-8');

  return JSON.parse(data);
};

// Escribir archivo JSON (por ejemplo, para actualizar stock o añadir pedidos)
const updateProducts = (newData) => {
  fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(newData, null, 2));
};


exports.getProducts = getProducts;