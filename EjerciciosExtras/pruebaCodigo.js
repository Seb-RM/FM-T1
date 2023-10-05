var countArray = function(array) {
    // Tu código aca:
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
    
    return suma;
    
}

console.log(countArray([1,1,1,1,1,1,1,1,1,1]));

console.log(countArray([1, [2, [3,4]], [5,6], 7]));

console.log(countArray([1, [2, [3,[4,4,4]]], [5,6], 7]));