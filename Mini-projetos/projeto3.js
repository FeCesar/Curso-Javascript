// FizzBuzz
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 5 e 3 => FizzBuzz
// Não Divisivel por 5 nem por 3 => retorna Numero
// Se não for um número => Não é um número

function fizzBuzz(valor){
    
    if(typeof valor !== 'number'){
        return console.log("Não é um número!")
    }

    if(valor % 3 !== 0 && valor % 5 !== 0){
        return console.log(valor)
    }

    if(valor % 3 === 0 && valor % 5 === 0){
        return console.log("FizzBuzz")
    }

    if(valor % 3 === 0){
        return console.log("Fizz")
    }

    if(valor % 5 === 0){
        return console.log("Buzz")
    }

}

fizzBuzz(15)