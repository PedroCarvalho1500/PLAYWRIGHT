function gerarNumerosEntre(min,max){
    if (min > max){
        //Left side destrcuturing and Right side an Array.
        [max, min] = [min,max];
        const [x,y,z] = a;
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio)
    })
}



gerarNumerosEntre(1,60)
.then((numero) => {
    console.log(numero)
    return numero
})
.then((doubled_number) => {
    doubled_number*=2
    console.log(doubled_number)
    return doubled_number
})
.then((numX10) => {
    console.log(numX10*5)
})