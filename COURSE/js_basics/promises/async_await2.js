function gerarNumerosEntre(min,max, forbiddenNumbers){
    if (min > max){
        //Left side destrcuturing and Right side an Array.
        [max, min] = [min,max];
        //const [x,y,z] = a;
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min;
        if(forbiddenNumbers.includes(aleatorio)){
            reject('Duplicated Number')
        }else{
            resolve(aleatorio)
        }
        
    })
}

//The way of resolving a promise inside an async funtion is returning something. On the other hand, the way of Rejecting and handling the error, is throwing an exception.
async function generateMegaSena(qtdNumeros, tentativas=1){
    try
    {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1,60,numeros))
        }

        return numeros
    }
    catch(e)
    {
        if(tentativas > 10)
        {
            throw "IMPOSSIBLE TO EXECUTE THE PRIZE DRAW "+e
        }

        else
        {
            generateMegaSena(qtdNumeros, tentativas+1)
        }
    
    }
}


//gerarNumerosEntre(1,5,[1,2,4])
//.then((number) => console.log(number))
//.catch((err) => console.log(err))

generateMegaSena(6)
.then((values) => console.log(values))
.catch((err) => console.log(err))