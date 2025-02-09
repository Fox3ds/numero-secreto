

let listaSorteio = [];
let maxNum = 10;
let numeroSecreto = Aleatorio();
let tentativas = 1;




function exibeTexto(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.4});
}

function inicio(){
    exibeTexto('h1', 'jogo do numero Çekreto');
    exibeTexto('p', 'Eskolia um numero entre 1 e 10');
}

inicio();



function verificarChute(){

    let chute = document.querySelector('input').value;
    alert(numeroSecreto);
    

    if(chute==numeroSecreto){

        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativa = `voce descobriu o numero çekreto com ${tentativas} ${palavraTentativa}`;
        

        exibeTexto('h1','ACERTOU');
        exibeTexto('p',mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(chute<numeroSecreto){
            exibeTexto('p','o numero çekreto é maior');
            
        }else{
            exibeTexto('p','o numero çekreto é menor');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){

    numeroSecreto=Aleatorio();
    limparCampo();
    tentativas=1;
    inicio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


function Aleatorio(){
    
    let numEscolido = parseInt(Math.random()*maxNum+1);
    let quantidadeElementoLista = listaSorteio.length;

    if(quantidadeElementoLista == maxNum){
        listaSorteio=[];
    }

    if(listaSorteio.includes(numEscolido)){//Include verifica se tem o elemento dentro do array
        return Aleatorio();
    }else{
        listaSorteio.push(numEscolido);//Push, coloca o elemento no final da lista (array) / Pop, remove o ultimo elemento
        return numEscolido;
    }
}


function limparCampo(){

    chute=document.querySelector('input');
    chute.value='';
}



