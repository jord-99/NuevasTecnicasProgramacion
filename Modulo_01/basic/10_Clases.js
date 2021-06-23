
// Como se hacia antes
/* function Rectangulo(base, altura) {
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 2)

console.log(rectangulo.calcularArea());
console.log(rectangulo.base)

// Declaracion de clases

class Rectangulo2 {
    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }
    calcularArea() {
        return this.base * this.altura
    }
}

var rectangulo2 = new Rectangulo2(6, 8)
console.log(rectangulo2.calcularArea()) */

//clase persona
//implemetar getters, setter y realizar una implementacion
//implementar metodos estaticos - Clase Punto, Funcion distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona
/*
DEBER
*/
// CLASE PERSONA
class Persona {
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }
    static unirDatos (nom, gen){
        return `Mi nombre es ${nom} y soy ${gen}`;
    }

    get datosPersona(){
        return `Yo me llamo ${this.nombre} y de genero ${this.genero}`;
    } 
    
    set informacionPersona(datosPersona){
        const arreglo = this.datosPersona.split( ' ');
        this.nombre = arreglo[0];
        this.genero = arreglo[1];
    }

    getPersona(){
        return `Soy ${this.nombre} y de sexo ${this.genero}`;
    }
}

// GETTERS Y SETTERS
var informacion = new Persona('Jordan', 'Masculino')
console.log(informacion.datosPersona) //primer mensaje
informacion.informacionPersona = "Andrea","Femenina"
console.log(informacion.datosPersona) // segundo mensaje
console.log(Persona.unirDatos('Stalin', 'Masculino')); // tercer mensaje

// METODOS ESTATICOS
/* class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  var p1 = new Punto(5, 5);
  var p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2));  */

  // Persona y Estudiante
  class Estudiante extends Persona{
      getPersona(){
          console.log(this.nombre + ' Estudiante perteneciente al ITQ ');
      }
  }

  var institucion = new Estudiante('Jordan Stalin Cajamarca: ');
  institucion.getPersona();



  
