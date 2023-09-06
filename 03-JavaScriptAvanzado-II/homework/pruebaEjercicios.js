function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind('','*','*');
let textoGuiones = crearCadena.bind('','-','-');
let textoUnderscore = crearCadena.bind('','_','_');

console.log(textoAsteriscos('hola'))
console.log(textoGuiones('hola'))
console.log(textoUnderscore('hola'))