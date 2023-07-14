//Example without using promise
//CALLBACK is a function passed as an argument to another function. For instance function test_func(parameter_a, callback)
//test_func(2, callback_function())

const http = require('http');

const getTurma = (letra, callback) => {
    const url = 'http://files.cod3r.com.br/curso-js/turma'+letra+'.json';
    http.get(url, res => {
        let resultado = '';

        res.on('data', dados => {
            resultado += dados;
        })

        res.on('end', () => {
            callback(JSON.parse(resultado));
            //callback('TEST CALLBACK FUNCTION');
            //callback(4,6)
        })
    })
}


var nomes = [];
getTurma('A', (alunos) => {
   nomes = nomes.concat(alunos.map(a => 'A:'+ a.nome));
   getTurma('B', (alunos) => {
    nomes = nomes.concat(alunos.map(b => 'B:'+ b.nome));
    getTurma('C', (alunos) => {
        nomes = nomes.concat(alunos.map(c => 'C:'+ c.nome));
        console.log('THIRD:'+nomes)
    });
    //console.log('SECOND:'+nomes)
    });
   //console.log('FIRST:'+nomes)
});






