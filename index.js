const express = require('express');
const {router: productosRouter} = require('./routes/productos.routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Productos');
});

