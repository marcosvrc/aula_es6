function soma(a, b){

    a = (0 in arguments) ? a : 1;
    b = (1 in arguments) ? b : 1;

    return a + b;

}

console.log(soma());
console.log(soma(2,3));
console.log(soma(0));