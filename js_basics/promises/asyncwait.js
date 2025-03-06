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


//Feature of ES8
//The objective is to simplify use of Promises...

//It Will return an Async Function
let obterAlunos = async() => {
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');

    return [].concat(turmaA,turmaB,turmaC);
}

obterAlunos()
//.then((turmas) => console.log(alunos))
.then((turmas) => turmas.map((a) => a.nome))
.then((nomes) => console.log(nomes));