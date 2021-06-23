
// Funciones declarativas
//Con t¿retorno de valores
// function saludar(){
//     return "Hola soy Jordan Cajamarca";
// }
// var resultado = saludar()
// console.log(resultado);
// console.log(saludar());

//funciones void o vacias
// function saludar2(){
//     console.log("Hola soy Stalin");
// }
// saludar2()

//funciones con parametros
// function saludarConParametros(nombre, apellido){
// return `Hola me presento soy ${nombre} ${apellido}`
// }
// console.log(saludarConParametros("Jordan", "Cajamarca"));

// funciones con parametros por defecto
// function saludoConProfesion(nombre2="Persona", profesion="Diseñador"){
// return `Hola ${nombre2} mi profesion es ${profesion}`
// }
// console.log(saludoConProfesion("Juan", "Desarrollador de software"));




// Funciones expresivas - Funciones anonimas
//las funciones expresivas son almacenadas en variables y no nesecitan del parametro dunction
// var saludoConEdad = function(nombre3, edad){
//     return `Hola soy ${nombre3} y tengo ${edad} años`
// }
// console.log(saludoConEdad("Jordan", 22));

// Arrow functions - Funciones flecha
// var saludoConApellido = (nombre, apellido) => {
//     return `Hola me llamo ${nombre} ${apellido}`
// }
// console.log(saludoConApellido("Stalin", "Cajamarca"));

// var saludoConApellido = (nombre, apellido) => `Hola me llamo ${nombre} ${apellido}`
// console.log(saludoConApellido("Stalin", "Cajamarca"));

// var suma = (num1, num2) => num1 + num2
// console.log(suma(2,4));

// Funciones como parametros de otras funciones
/* function saludoConFunciones(nombre, cb){
    return cb(nombre)
}
var misaludo = saludoConFunciones("Stalin", function(nombre) {
    return `Hola soy ${nombre}`
})
console.log(misaludo);

var misaludo2 = saludoConFunciones("Stalin",(nombre) => `Hola soy ${nombre}`)
console.log(misaludo2);
 */

/* setTimeout(() => {
    console.log("Hola mundo");
}, 3000); */

/* setInterval(() => {
    console.log("Hola mundo");
}, 2000);
 */




