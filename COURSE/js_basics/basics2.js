const flag = true;
const numero = 0;

console.log(flag);
console.log(!!numero);


//flag = false It can't be done because variable is a CONST.

var cont = 0;

// for (cont;cont<=10;cont+=2){
//     console.log(cont)
// }

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator)
  return accumulator + currentValue;
}, 0);

console.log(sum);  // Output: 15