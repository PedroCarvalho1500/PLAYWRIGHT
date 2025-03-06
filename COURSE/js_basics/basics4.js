//block of code
function add(a,b){
    return a+b;
}

console.log(add(2,3));

let sumOfIntegers = function(c,d){
    return c+d;
}


let sumOfNumbers = (c,d) => c+d;
console.log(sumOfIntegers(4,8));
console.log(sumOfNumbers(7,2));

const func = function(x=5,y=6) {
    console.log("FUNCTION CONST");
    return x+y;
}

console.log(func(7,7));

const anonimo = () => {
    console.log("ANO")

}

anonimo()