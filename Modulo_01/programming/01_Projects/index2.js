const { request } = require('express');
const express = require('express');

//se genera una aplicacion
const app = express();



const { RouterIndex } = require('./routes/index2');

app.use("/Deber_video", RouterIndex);

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});