function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve,reject) => {
        try
        {
            con.log('tmp')
            if(Math.random() < chanceErro){
                reject("ERROR OCCURRED!!!")
            }
            else
            {
                resolve(valor)
            }
        }
        catch(e)
        {
            //console.log("ENTERED")
            reject(e)
        }
            
        
    })
}

funcionarOuNao("Testing...",0.8)
.then((value) => {
    console.log(value)
    //console.log(err)
})
.catch((e) => console.log("GENERAL ERROR..."+e))
.then(() => console.log("END!"))

