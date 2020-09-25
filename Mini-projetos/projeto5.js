// Valor par ou impar

function parOuImpar(numero){

    for(let i = 0; i <= numero; i++){
        if(i % 2 === 0){
            return console.log(i, "Par")
        } else{
            return console.log(i, "Ímpar")
        }
    }

}

parOuImpar(2)