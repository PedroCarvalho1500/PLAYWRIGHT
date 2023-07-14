// setTimeout(function(){
//     console.log("Executing Promise...");
//     setTimeout(function(){
//         console.log("Executing inside callback");
//     },2000)
//     return new Promise((resolve,reject) => {

//     })
// }, 2000)


function waitForTime(tempo=2000){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('Executing Promise.')
            //resolve("RESOLVE EXECUTED...")
            resolve()
        },tempo)
    })
}


let p = waitForTime(3000)
//.then((texto) => texto)
//.then((texto_splited) => texto_splited.split("EXECUTED",2))
//.then((text_printed) => console.log(text_printed[0]))
.then(waitForTime)
.then(waitForTime)