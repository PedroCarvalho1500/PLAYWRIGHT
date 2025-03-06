//let a = 1;

//console.log(a);

let promessa = new Promise(function(cumprirPromessa,naoCumprirPromessa){
    //PROMISE MUST GENERATE JUST ONE VALUE. IT CAN BE A JSON, AN ARRAY, ETC, BUT NEVER TWO VALUES LIKE THIS (2,3)
    cumprirPromessa([33,34,35]);
    naoCumprirPromessa("ERRO AO EXECUTAR PROMISSE")
})

function getFirstElement(array){
    return array[0]
}

function firstLetter(string){
    return string[0]
}

//console.log(typeof(promessa));
//console.log(promessa);

// promessa.then((valores) => {
//     console.log(valores[0]);
//     console.log(valores[1]);
//     console.log(valores[2]);
// })

promessa
//.then(getFirstElement)
.then(firstLetter)
//.then((valores) => [].concat(valores))
//.then((doubled_values) => console.log(doubled_values))
//.then(function(doubled_values){console.log(doubled_values.map((valor) => valor*2))})
//.then(function(squared_values){console.log(squared_values)})
.catch((e) => console.log("ERROR: "+e.message))
