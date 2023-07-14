//WE USE PROMISE WHEN WE ARE EXPECTING A RETURN. FOR INSTANCE, IF WE ARE EXPECTING A FILE ACCESS. WE PASS A SUCCESS CALLBACK AND A FAILED CALLBACK AND START WAITING FOR THE RESPONSE.

//Following Function receives two parameters and returns a Promise.
function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject) => {
        //console.log(frase);
        setTimeout(() => {
            //reject(frase)
            //resolve(frase, 'abc');
            resolve(frase);
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que legal!')
//console.log(falarDepoisDe(3, 'Que legal!'));
.then(frase => frase.concat(' THEN1 '))
.then(outraFrase => console.log(outraFrase.concat('THEN2')))
.catch(e => console.log("PROMISE ERROR..."+e))