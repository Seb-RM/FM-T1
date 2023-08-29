function BinarioADecimal(num) {
    let numBinario = num.toString().split("").reverse();
    let numDecimal = 0;
    for(let indice =0; indice<numBinario.length;indice++){
        if(numBinario[indice])  {
            numDecimal+= (Math.pow(2,indice)*numBinario[indice]);
        }
    }
    return numDecimal;
};

console.log(BinarioADecimal(10000000));

function DecimalABinario(num) {
    let numDecimal = num;
    let numBinario = [];

    while (numDecimal > 0) {
        let resto = numDecimal % 2;
        numBinario.unshift(resto);
        numDecimal = Math.floor(numDecimal / 2);
    }

    return numBinario.join('');
}

console.log(DecimalABinario(0));

