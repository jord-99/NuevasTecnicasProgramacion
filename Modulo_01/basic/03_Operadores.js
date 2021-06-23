//asignacion
// =

//comparacion
// ==
//completamente igual entre ellos
// ===

console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');

// diferente
// !=

console.log(2 != 3);

//comparadores mayor, menor, mayorigual, menorigual

// > 
// <
// >=
// <=

//operadores de asignacion compuestos
//incremento
// += / x = x + y
//-= / x = x- y
// *=
// /=
// %=
// **=

var numero = 3;
//numero += 2;
numero -= 2;
console.log(numero);

// operadores aritmeticos

// + - * / % **

// operadores para desestructurar objetos

var persona = {nombre: "JOrdan", apellido: "Cajamarca", edad: 22, 
viajes:{destino1:"peru", destino2: "mexico"}};

var { nombre:nombre2, apellido, viajes:{destino1} } = persona;

console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(destino1);



