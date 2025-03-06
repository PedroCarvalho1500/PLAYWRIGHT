console.log("Hello World");

//these are comments
/*
Comments on more than one line ...
... as you can see.
*/
let num = 5.56789;
let n = num.toFixed(2);
console.log(n)

let logico = false;
const number_of_items = logico == true ? 100 : 0;
console.log(number_of_items);
    
console.log(Math.round(200.543545).toFixed(2));
let a=4.54687678;
console.log(a);
console.log(typeof(a));
//var (let,const) ES6 var
let b = 234.786487;
console.log(Math.round(a+b).toFixed(2))

console.log(typeof(b));

let c = "Peter";
console.log(typeof(c));

let required = true;
console.log(typeof(required));

let sum = a+b
console.log(sum)

c = a - b
console.log(c)
//we cannot redeclare variable with let keyword but it's possible with var

console.log(!required)

//null and undefined

let f1 = "TEXTO";

function imprime(){
    console.log(f1);
}

imprime();
console.log(f1)