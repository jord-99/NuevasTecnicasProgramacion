// PROMESAS

function promesa(bandera) {
    return new Promise((resolve, reject) => {
if (bandera) {
    setTimeout(() => {
        resolve("Peticion resuelta");
    }, 3000);
}else{
    setTimeout(() => {
        reject("La operacion fallo")
    }, 2000);  
}   
    })
} 

/* promesa(false)
    .then((resultado) => {
      console.log("Respuesta positiva",resultado);
    })
    .catch((error) => {
      console.log("Error", error);
    }) */

// promesa expresiva
var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000);
    }else{
        setTimeout(() => {
            reject("La operacion fallo")
        }, 2000);  
    }   
})

segundaPromesa(true)
    .then((respuesta) => {
     console.log(respuesta);
    })
    .catch((error) => {
     console.log(error);
    })
var listDePersonas;
promesa(true)//peticion decliente
    .then((respuesta)=>{ //respuesta de lista de clientes
     console.log(respuesta);
     return segundaPromesa(true) //compras del cliente
    })
    .then((respuesta)=>{ //respuesta de la segunda promesa
     console.log(respuesta);
    })
    .catch((error)=>{
     console.log(error);
    })






