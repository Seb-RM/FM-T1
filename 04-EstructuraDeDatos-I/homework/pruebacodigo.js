function nFibonacci(n) {
    if(n<2) return 1;
    
    return nFibonacci(n-1)+nFibonacci(n-2)
    

}

const fib1 = nFibonacci(0);
console.log(fib1);
const fib2 = nFibonacci(6);
console.log(fib2);

console.log(nFibonacci(2));
console.log(nFibonacci(7));


