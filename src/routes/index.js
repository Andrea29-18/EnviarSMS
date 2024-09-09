const express = require('express');
const {whatsapp} = require('./lib/whatsapp');
const app = express();

const puerto = 3003;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas
app.use('./api', require('./routes/links'));

whatsapp.initialize();

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});