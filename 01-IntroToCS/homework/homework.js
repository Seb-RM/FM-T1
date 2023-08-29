'use strict';

function BinarioADecimal(num) {

   let numBinario = num.toString().split("").reverse();
   let numDecimal = 0;

   for(let indice =0; indice<numBinario.length;indice++){
      if(numBinario[indice])  {
            numDecimal+= (Math.pow(2,indice)*numBinario[indice]);
      }
   }

   return numDecimal;
}

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

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
