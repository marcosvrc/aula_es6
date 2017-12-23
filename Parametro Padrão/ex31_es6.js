function defVal(){
    return 2;
}

function soma(a =defVal() + 1, b =  defVal() + 1){
    return a + b;
}

console.log(soma());
console.log(soma(2,3));
console.log(soma(0));
