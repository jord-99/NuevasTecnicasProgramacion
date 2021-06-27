/* //traemos el paquete
const { Router } = require('express');
//const data = require('.../data.json')
//Inicalizamos router
const router = Router()

//creacion de los endpoint
router
  .get("/", (req, res) => {
    res.send("HOLA MUNDO, con express");
  })
  .get("/saludo", (req, res) => {
    const { query } = req;
    res.json({
      saludo: `Hola soy ${query.nombre} ${query.apellido}`,
    });
  })
  .get("/saludo/:nombre", (req, res) => {
    const { params } = req;
    res.json({
      nombre: params.nombre,
    });
  });




//Exportamos las rutas
module.exports.RouterIndex = router;

//module= {
    //exports: {
    //    RouterIndex:router
  //  }
//} */


