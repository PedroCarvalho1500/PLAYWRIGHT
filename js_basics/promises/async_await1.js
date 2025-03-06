function waitForTime(tempo=2000){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('Executing Promise.')
            //resolve("RESOLVE EXECUTED...")
            resolve()
        },tempo)
    })
}


function retornarValor(){
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(10)
        },3000)
    }))
}


async function aguardarPromise()
{
    //waitForTime(2000)
    await waitForTime(3000)
    .then(() => console.log("FINISHED"))

    //console.log("DIDN'T WAIT");
    console.log("WAIT...")
}

// waitForTime(3000)
// .then(() => console.log("FINISHED"))

//aguardarPromise()

//retornarValor()
//.then((value) => console.log("VALOR: "+value))

//Await must be used under a function which returns a Promise
// Function Async returns a Promise
async function executar(){
    let valor = await retornarValor();
    //let valor = retornarValor();
    await waitForTime(1600)
    //await waitForTime(1600)
    console.log("Async/Await 1 "+valor)

    await waitForTime(1600)
    console.log("Async/Await 2 "+parseInt(valor+1))
    //console.log("Async/Await 2 "+(valor))

    await waitForTime(1600)
    console.log("Async/Await 3 "+parseInt(valor+2))

    return parseInt(valor + 3)
}

async function retornarValorFast(){
    return 20
}


executar()
.then(value => console.log(value))

retornarValorFast()
.then((value) => console.log(value))