const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt');


function exibirConteudo(caminho){
     return new Promise((resolve,reject) => {
        let content = fs.readFileSync(caminho).toString();
        resolve(content)
    })
}

function lerArquivo(caminho){
    return new Promise((resolve,reject) => {
        fs.readFile(caminho, function(err,content){
            resolve(content.toString())
        });
        console.log('After reading file.')
    })
}




console.log("Início...")
exibirConteudo(caminho)
.then((content) => console.log(content))
console.log('Fim...');

lerArquivo(caminho)
.then((content) => console.log(content))


