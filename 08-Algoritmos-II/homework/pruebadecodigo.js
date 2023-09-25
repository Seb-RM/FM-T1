//Se recibe un array de tamaño indefinido.
//Determinar que elemento sera el pivote, en este caso dividiendo el arreglo original por la mitad
//Separamos el array en dos, acomodando los elementos deacuerdo a si sus valores son mayores o menores al pivote


function quickSort(array) {

    if(array.length<=1) return array;
    let arrayDer=[];
    let arrayIzq=[];
    let arrayIgu=[]
    let arrayOrdenado=[]
    let index= array[Math.floor(Math.random() * array.length)];

    let pivote= array[index];

    for(let i=0;i<array.length;i++){
        if(array[i]<pivote) arrayIzq.push(array[i]);
        else if (array[i]>pivote) arrayDer.push(array[i]);
        else  arrayIgu.push(array[i]);
    }

    if(arrayDer.length>1) quickSort(arrayDer);

    if(arrayIzq.length>1) quickSort(arrayIzq);

    arrayOrdenado = [...quickSort(arrayIzq), ...arrayIgu, ...quickSort(arrayDer)]
    return arrayOrdenado;
};


console.log(quickSort([5, 1, 4, 2, 3]));
console.log(quickSort([10, 10, 16, 12]));
console.log(quickSort([10, -2, -7, 4]));

