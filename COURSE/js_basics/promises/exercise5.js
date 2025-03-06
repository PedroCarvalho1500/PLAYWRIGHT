function gerarNumerosEntre(min,max, tempo){
    if (min > max){
        //Left side destrcuturing and Right side an Array.
        [max, min] = [min,max];
        const [x,y,z] = a;
    }
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio)
        },tempo)

    })
}

async function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,200),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500),
    ])

}

console.time('promise');
gerarVariosNumeros()
.then((numeros) => console.log(numeros))
.then(() => {
    console.timeEnd('promise');
})
