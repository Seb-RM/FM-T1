'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
    let factores = [1];
    let divisor = 2;

    while(num>1){
      if(num % divisor === 0){
        factores.push(divisor);
        num /=divisor;
      } else {
        divisor++;
      }
    }

    return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // let arrayOrdenado = array;

  //   for(let i=0; i < arrayOrdenado.length;i++){

  //       for(let j=0;j<arrayOrdenado.length-1-i;j++){

  //           if(arrayOrdenado[j]> arrayOrdenado[j+1]){
                
  //               [arrayOrdenado[j], arrayOrdenado[j+1]] = [arrayOrdenado[j+1], arrayOrdenado[j]];

  //           }

  //       };
  //   };

  //   return arrayOrdenado;
  for(let i = 0; i < array.length; i++){
    for( let j= i + 1 ; j < array.length ; j++){
      if(array[i]>array[j]){
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }

  // Opcion Dos 

  // let swap = true;

  // while(swap){
  //   swap = false;

  //   for(let i=0; i < array.length -1;i++){
  //     if(array[i] > array[i+1]){
  //       let aux = array[i];
  //       array[i]= array[i+1];
  //       array[i+1] = aux;
  //       swap = true;
  //     }
  //   }
  // }

  return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1 ; i< array.length ; i++){
    let puntero = array[i];

    let j = i-1;

    while( j >=0 &&  array[j]> puntero){

        array[j+1]= array[j];

        j= j-1;
    }

    array[j+1] = puntero;

}

return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i< array.length;i++){
    let puntero = i;

    for(let j=i+1;j< array.length;j++){
      if(array[j]< array[puntero]) puntero=j;
    };

    if(puntero!==i){// i != puntero; tambien se puede
        [array[i],array[puntero]]=[array[puntero],array[i]];
        // otra forma
        // let aux = array[i];
        // array[i] = array[puntero];
        // array[puntero] = aux;
    };
  };

  return array;  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
