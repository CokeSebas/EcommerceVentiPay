const fs = require('fs');
const path = require('path');
const getProducts = () => {
  const data = fs.readFileSync(path.join(__dirname, '../json/productos.json'), 'utf-8');
  return JSON.parse(data);
};

exports.getProducts = getProducts;