// For In - Feito para Objetos e Arrays

    const pessoa = {
        nome: "Felipe",
        sobrenome: "Cesar",
        idade: 17
    }
    // Chave e valor
    for(let chave in pessoa){
        console.log(chave)
    }

    const cores = ["Azul", "Branco", "Verde", "Cinza", "Preto"]
    for(let indice in cores){
        console.log(indice, cores[indice])
    }
