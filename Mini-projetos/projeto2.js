// Maior entre dois números

let num1 = 98;
let num2 = 4;

function maior(a, b){
    if(a > b){
        console.log("O valor " + a + " é maior que " + b)
    } else if(b > a){
        console.log("O valor " + b + " é maior que " + a)
    } else(
        console.log("Os valores são iguais!")
    )
}

maior(num2, num1)
