// function bubbleSort(array) {
//     // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
//     // el array recibido como parámetro
//     // Devolver el array ordenado resultante
//     // Tu código:

//     let arrayOrdenado = array;

//     for(let i=0; i < arrayOrdenado.length;i++){

//         for(let j=0;j<arrayOrdenado.length-1-i;j++){

//             if(arrayOrdenado[j]> arrayOrdenado[j+1]){
                
//                 [arrayOrdenado[j], arrayOrdenado[j+1]] = [arrayOrdenado[j+1], arrayOrdenado[j]];

//             }

//         };
//     };

//     return arrayOrdenado;
// }


// console.log(bubbleSort([5, 1, 4, 2, 8]));

// console.log(bubbleSort([10, 10, 16, 12]));

// console.log(bubbleSort([10, -2, -7, 4]));

// function insertionSort(array) {
//     // Implementar el método conocido como insertionSort para ordenar de menor a mayor
//     // el array recibido como parámetro utilizando arreglos
//     // Devolver el array ordenado resultante
//     // Tu código:
//     for(let i=1 ; i< array.length ; i++){
//         let puntero = array[i];

//         let j = i-1;

//         while( j >=0 &&  array[j]> puntero){

//             array[j+1]= array[j];

//             j= j-1;
//         }

//         array[j+1] = puntero;

//     }

//     return array;
// }

// console.log(insertionSort([5, 1, 4, 2, 8]));

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
  
        if(puntero!==i){
            [array[i],array[puntero]]=[array[puntero],array[i]];
        };
      };
  
      return array;
  };

console.log(selectionSort([5, 1, 4, 2, 8]));

