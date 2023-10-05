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

    console.log(left)
  
  
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


console.log(mergeSort([8,2,5,6,3,9,1,4,7]));