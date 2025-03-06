const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function lerArquivo(caminho){
    return new Promise((resolve,reject) => {
        fs.readFile(caminho, function(err,content){
            resolve(content.toString())
        });
        console.log('After reading file.')
    })
}


lerArquivo(caminho)
.then((content) => content.split('\n'))
.then((lines) => console.log(lines[1]))