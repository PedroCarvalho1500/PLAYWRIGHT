//Example without using promise
//CALLBACK is a function passed as an argument to another function. For instance function test_func(parameter_a, callback)
//test_func(2, callback_function())

const http = require('http');

const getTurma = (letra) => {
    const url = 'http://files.cod3r.com.br/curso-js/turma'+letra+'.json';
    return new Promise((resolve,reject) => {
        http.get(url, res => {
            let resultado = '';
    
            res.on('data', dados => {
                resultado += dados;
            })
    
            res.on('end', () => {
                try
                {
                    resolve(JSON.parse(resultado));
                    //resolve([4,9])
                }catch(e)
                {
                    reject(e);
                }
            })
        })
    })
}


var nomes = [];
// getTurma('A').then(alunos => {
//    nomes = nomes.concat(alunos.map(a => 'A:'+ a.nome));
//    getTurma('B').then(alunos => {
//     nomes = nomes.concat(alunos.map(b => 'B:'+ b.nome));
//     getTurma('C').then(alunos => {
//         nomes = nomes.concat(alunos.map(c => 'C:'+ c.nome));
//         console.log('THIRD:'+nomes)
//     });
//     });
// });


//Promise.all means that it'll wait for functions being executed and promise returning RESOLVE or REJECTED.
//First Then is Creating only array with all objects for the students. Second, it's executing map and getting only the name. 
//Finally, it's printing the getting only the names.
//IT WAITS FOR THE EXECUTION OF ALL PROMISES AND THEN START THE "THEN LOOP (THREE THEN ...) UNTIL REACH THE LAST ONE"
Promise.all([getTurma('A'),getTurma('B'),getTurma('C'),])
.then((alunos) => [].concat(...alunos))
.then((alunos) => alunos.map(aluno => aluno.nome))
.then((nomes) => console.log(nomes))
.catch((e) => console.log("ERROR: "+e.message))


// getTurma('A').then((array) => {
    
//     getTurma('B').then((array) => {
     
//      getTurma('C').then((array) => {
         
//          console.log("SUM:"+(array[0]+array[1]));
//      });
//      });
//  });






