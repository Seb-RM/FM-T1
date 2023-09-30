//Se recibe un array de tamaño indefinido.
//Determinar que elemento sera el pivote, en este caso dividiendo el arreglo original por la mitad
//Separamos el array en dos, acomodando los elementos deacuerdo a si sus valores son mayores o menores al pivote


// function quickSort(array) {

//     if(array.length<=1) return array;
//     let arrayDer=[];
//     let arrayIzq=[];
//     let arrayIgu=[]
//     let arrayOrdenado=[]
//     let index= array[Math.floor(Math.random() * array.length)];

//     let pivote= array[index];

//     for(let i=0;i<array.length;i++){
//         if(array[i]<pivote) arrayIzq.push(array[i]);
//         else if (array[i]>pivote) arrayDer.push(array[i]);
//         else  arrayIgu.push(array[i]);
//     }

//     if(arrayDer.length>1) quickSort(arrayDer);

//     if(arrayIzq.length>1) quickSort(arrayIzq);

//     arrayOrdenado = [...quickSort(arrayIzq), ...arrayIgu, ...quickSort(arrayDer)]
//     return arrayOrdenado;
// };


// console.log(quickSort([5, 1, 4, 2, 3]));
// console.log(quickSort([10, 10, 16, 12]));
// console.log(quickSort([10, -2, -7, 4]));

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if(array.length < 2) return array;

    let mitad = Math.floor(array.length / 2);
    let left = array.slice(0, mitad);
    let right = array.slice(mitad);

    array = [];

    left = mergeSort(left);
    right = mergeSort(right);
    
    while(left.length && right.length){
    if (left[0] < right[0]) {
        array.push(left.shift());
    } else array.push(right.shift());
    }
    return array.concat(left, right);

    //okey probemos ahora
}
console.log(mergeSort([5, 1, 4, 2, 3]));
console.log(mergeSort([10, 10, 16, 12]));
console.log(mergeSort([10, -2, -7, 4]));

