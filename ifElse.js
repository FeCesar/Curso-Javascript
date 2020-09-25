// If... Else
// Se hora estiver entre 6hrs até 12hrs = Bom Dia
// Se hora estiver entre 12hrs até 18hrs = Boa Tarde
// Caso Contrário = Boa Noite

let horario = new Date().getHours()

    if(6 < horario && horario < 12){
        console.log("Bom dia!")
    }
    else if(12 <= horario && horario <= 18){
        console.log("Boa tarde!")
    } else{
        console.log("Boa Noite!")
    }