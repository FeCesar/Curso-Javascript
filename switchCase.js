let permissao //Comum - Gerente - Admin
permissao = 'nada'

    switch(permissao){
        case 'comum':
            console.log("User Comum!")
            break
        
        case 'gerente':
            console.log("User Gerente!")
            break

        case 'admin':
            console.log("User Admin")
            break
        
        default:
            console.log("Usuário Não Cadastrado!")
    }