const express = require('express'); //requiero el paquete express

//genero una aplicacion express 
const app = express()
//endpoint
app.get('/', (req, res) => {
    res.send("HOLA MUNDO, con express")
})

app.get("/saludo", (req, res) => {
    //a las query acedemos con req.query
    //console.log(req.query);
   const { 
        query : { nombre, apellido },
     } = req; 
 /* const nombre = req.query.nombre
 const apellido = req.query.apellido */

    res.json({
        saludo: `Hola soy ${nombre} ${apellido}`,
    });
});

app.get('/saludo/:nombre',(req,res)=>{
    const {params}=req; 

    //const nombre =req.params.nombre
    res.json({
        nombre: params.nombre,
    });
});

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})





