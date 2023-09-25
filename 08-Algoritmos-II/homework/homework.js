'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1) return array;
    let arrayDer=[];
    let arrayIzq=[];
    let arrayIgu=[]
    let arrayOrdenado=[]
    let index=0;

    let pivote= array[index];

    for(let i=0;i<array.length;i++){
        if(array[i]===pivote) arrayIgu.push(array[i]);
        if(array[i]>pivote) arrayDer.push(array[i]);
        else if (array[i]<pivote)arrayIzq.push(array[i]);
    }

    if(arrayDer.length>1) quickSort(arrayDer);

    if(arrayIzq.length>1) quickSort(arrayIzq);

    arrayOrdenado = arrayIzq.concat(arrayIgu.concat(arrayDer));
    return arrayOrdenado;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
