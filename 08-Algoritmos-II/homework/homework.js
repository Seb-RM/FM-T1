"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let arrayDer = [];
  let arrayIzq = [];
  let arrayIgu = [];
  let arrayOrdenado = [];
  let index = 0; // Math.floor(Math.random() * array.length)

  let pivote = array[index];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === pivote) arrayIgu.push(array[i]);
    if (array[i] > pivote) arrayDer.push(array[i]);
    else if (array[i] < pivote) arrayIzq.push(array[i]);
  }

  if (arrayDer.length > 1) arrayDer = quickSort(arrayDer);

  if (arrayIzq.length > 1) arrayIzq = quickSort(arrayIzq);

  arrayOrdenado = arrayIzq.concat(arrayIgu.concat(arrayDer)); // quicksort(left).concat(equals).concat(quicksort(right));
  return arrayOrdenado;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) return array;

  let mitad = Math.floor(array.length / 2); // puede ser const
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);

  array = []; // modifica directamente el array que se pasa como argumento

  left = mergeSort(left);
  right = mergeSort(right);


  while (left.length && right.length) {
    // tambien se puede escribir así
    if (left[0] < right[0]) {
      // left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift());
      array.push(left.shift());
    } else array.push(right.shift());
  }
  return array.concat(left, right);

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
