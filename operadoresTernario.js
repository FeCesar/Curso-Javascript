// Cliente +100pontos = premium
// Cliente -100pontos = normal

let pontos = 100
let tipoCliente = pontos >= 100 ? 'premium' : 'normal'
console.log(tipoCliente)

// Cliente pagou conta = Normalizado
// Cliente não pagou conta = Devendo

let pagouConta = true
let situacao = pagouConta === true ? 'Normalizado' : 'Devendo'
console.log(situacao)
