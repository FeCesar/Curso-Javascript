// Medidor de Velocidade
// Vel.Max 70km => ok
// 5km a cima do limite =: +1ponto na carteira
// Math.Floor()
// Math.Trunc()
// pontos > 12 => carteira suspendida

function radar(velocidade){

    if(velocidade < 70){
        return console.log("Velocidade a baixo!")
    }

    if(velocidade >= 70 && velocidade < 75){
        return console.log("Ok!")
    }

    if(velocidade >= 75 ){
        
        velocidadeExcedida = velocidade - 70
        pontosRecorrentes = velocidadeExcedida / 5
        pontosCarteira = Math.trunc(pontosRecorrentes)

            if(pontosCarteira > 12){
                return console.log("Carteira Suspendida!")
            } else{
                return console.log(pontosCarteira)
            }

    }

}

radar(180)
