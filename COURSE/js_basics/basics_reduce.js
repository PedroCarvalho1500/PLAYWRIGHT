//const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
//var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
//b.reduce((acumulador, elemento) => acumulador += elemento, 0))
//console.log(ab);

// var numeros = [0, 1, 2, 3, 4, 5, 6];
// var total = numeros.reduce((acumulador, numero, indice, original) => {
// console.info(`${acumulador} total até o momento`);
// console.log(`${numero} valor atual`);
// console.log(`${indice} indice atual`);
// console.log(`${original} array original\n\n`);
// return acumulador += numero;
// }, 0)
// console.warn('acaboooou');
// console.log(total)


// EXAMPLE 1:
console.log("***** EXAMPLE 1 *****");
const dolars = [2,5,8,10];
const soma = dolars.reduce((total,current_number) => total+=current_number);
console.log(soma);
console.log("\n");

//EXAMPLE 2:
console.log("***** EXAMPLE 2 *****");
const dolars2 = [2,5,11];
const soma2 = dolars2.reduce((total,current_number) => {
    console.log("CURRENT NUMBER: "+current_number);
    return total+=current_number;
});
console.log(soma2);
console.log("\n\n\n");

//EXAMPLE 3
console.log("***** EXAMPLE 3 *****");
const euros = [32, 41, 15];

const media = euros.reduce((total, valor, indice, array) => {
  //console.log("CURRENT INDEX: "+indice);
  console.log("CURRENT TOTAL: "+total);
  total += valor;
  if( indice === array.length-1) { 
    return total/array.length;
  } else { 
    return total;
  }
});

console.log(media);
console.log("\n\n\n");

//EXAMPLE 4
console.log("***** EXAMPLE 4 *****");
const euros2 = [1, 3, 5];
const media2 = euros2.reduce((total, valor, indice, array) => {
    console.log("CURRENT INDEX: "+indice);
    console.log("CURRENT TOTAL: "+total);
    
    if(indice == array.length-1){
        total += valor
        return total/array.length;
    }
    // else{
    //     return total+=valor;
    // }
    return total += valor
    //return total;
    //return total/array.length
  }, 9);

console.log(media2);
console.log("\n\n\n");


//EXAMPLE 5
console.log("***** EXAMPLE 5 *****");
const reais = [2,4,6];
const duplicated = reais.reduce((total,value) => {
    total.push(value*2);
    return total;
},[])

console.log(duplicated);
console.log("\n\n\n");

//EXAMPLE 6
console.log("***** EXAMPLE 6 *****");
const cestoDeFrutas = ['banana', 'cereja', 'laranja', 'maçã', 'cereja', 'laranja', 'maçã', 'banana', 'cereja', 'laranja', 'figo' ];

const contagem = cestoDeFrutas.reduce( (contador, fruta) => {
  //console.log(contador);
  //console.log("FRUIT: "+fruta);
  //console.log("FRUIT: "+fruta);
  //console.log("CONTATDOR[FRUIT]: "+contador[fruta]);
  contador[fruta] = (contador[fruta] || 0) + 1 ;
  return contador;
} , {});

console.log(contagem); // { banana: 2, cereja: 3, laranja: 3, maçã: 2, figo: 1 }
console.log("\n\n\n");



//EXAMPLE 7
console.log("***** EXAMPLE 7 *****");
const dados = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const achatar = dados.reduce((total, valor) => {
    //console.log("CURRENT VALOR: "+valor);
  return total.concat(valor);
}, []);

console.log(achatar) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log("\n\n\n");

//EXAMPLE 8
console.log("***** EXAMPLE 8 *****");
const dados2 = [
    {a: 'feliz', b: 'pardal', c: ['azul','verde']}, 
    {a: 'cansado', b: 'leão', c: ['verde','preto','laranja','azul']}, 
    {a: 'triste', b: 'peixe dourado', c: ['verde','vermelho']}
  ];

const cores = dados2.reduce((total, valor) => {
    console.log("VALUE");
    console.log(valor);
    valor.c.forEach( cor => {
        total.push(cor);
    })
    return total;
  }, [])

console.log(cores);
console.log("\n\n\n");

