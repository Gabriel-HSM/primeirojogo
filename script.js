let escolha
let c = 0
//let see = document.getElementById('pesca') teste


function escolhi(){
    escolha = Math.floor(Math.random() * 100) //math.random sozinho traz um número aleatório entre 0 e 1. Multiplica por 100 e vira um número aleatório tipo string. O math.floor sempre arredonda para baixo
}

function aoclicar(){
    let chute = document.getElementById('txtn')
    let chuten = Number(chute.value)
    let resultado = document.getElementById('res')
    


    //see.innerHTML =  escolha teste
    
    if (chuten == 0){
        resultado.innerHTML = 'Adicione um número'
        c++ //c + ele mesmo + 1
    
    } else if (chuten > escolha){
        resultado.innerHTML = 'Adicione um número menor'
        c++
        
    } else if (chuten < escolha){
        resultado.innerHTML = 'Adicione um número maior'
        c++

    } else {
        c++
        resultado.innerText = `Você acertou!!! com ${c} tentativas `
        resultado.style.textAlign = 'center'

        let params = {
            particleCount: 500, // Quantidade de confetes
            spread: 90, // O quanto eles se espalham
            startVelocity: 70, // Velocidade inicial
            origin: { x: 0, y: 0.5 }, // Posição inicial na tela
            angle: 45 // Ângulo em que os confetes serão lançados
        }
        // Joga confetes da esquerda pra direita
	    confetti(params)
        // Joga confetes da direita para a esquerda
	    params.origin.x = 1;
	    params.angle = 135;
	    confetti(params)
        
        var btn = document.createElement("input")
        btn.type = "button"
        btn.value = "Jogar de novo"
        btn.style.display = 'flex'
        btn.style.margin = '15px auto'
        resultado.appendChild(btn)
        btn.onclick = function jogarDeNovo(){
            location.reload()
        }
    }
}


        







