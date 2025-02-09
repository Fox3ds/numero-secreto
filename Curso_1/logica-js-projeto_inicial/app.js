
/*ATIVIDADE 1
alert('Boas vindas');
let nome = 'lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let = mensagemDeErro = 'erro, preenche tudo ai cuzaum';
alert(mensagemDeErro);
*/

/*ATIVIDADE 2
let dia = prompt('que dia é hoje??');//perguntando o dia
if(dia=='sabado'||dia=='domingo'){alert('bom finde')}else{alert('boa semana')}//respondendo
let num = prompt('diz um numero');//pergunta numero
if(num>=0){alert('é positivo');}else{alert('é negativo');}//responde
let pont=10;//pontuação
if(pont>100){alert('parabens, ganhou');}else{alert('ruim, tenta denovo');}//defini se ganhou ou perdeu
let saldo =1000;//saldo
alert(`seu saldo é de ${saldo}`)//mostrando saldo
nome = prompt('qual teu nome');//perguntando nome
alert('boas vindas '+nome)//boas vindas
*/

/*ATIVIDADE3
let num =1;
while(num<10){
    alert(num);
    num++;
}
while(num>=0){
    alert(num);
    num--;
}
num = prompt('me fala um numero');
while(num!=0){
    console.log(num);
    num--;
}
num = prompt('me fala um numero');
let zero = 0;
while(zero<=num){
    console.log(zero);
    zero++;
}
*/


/*ATIVIDADE 3
console.log('boas vindas');
let nome = prompt('qual teu nome');
console.log('ola '+nome);
alert('ola'+nome);
let linguagem = prompt('qual tua linguagem favorita');
console.log(linguagem);
let val1=1;
let val2=2;
let val3=val1+val2;
let val4=val1-val2;
console.log([`a soma de ${val1} e ${val2} = ${val3}`]);
console.log([`a diferença de ${val1} e ${val2} = ${val4}`]);
let idade = prompt('quanto anos em festa tu tem?');
if(idade > 18){console.log('voce é maior de idade')}else{console.log('voce é menor de idade')}
let num = prompt('fala um numero');
if(num>0){console.log('é positivo')}else if(num<0){console.log('é negativo')}else{console.log('é zero')};
let num2 = 1;
while(num2<=10){
    alert(num2);
    num2++;
}
let nota = 5;
if(num>=7){console.log('aprovado')}else{console.log('reprovado')};
let aleatas = parseInt(Math.random());
console.log(aleatas);
aleatas = parseInt(Math.random()*10);
console.log(aleatas);
aleatas = parseInt(Math.random()*100);
console.log(aleatas);
aleatas = parseInt(Math.random()*1000);
console.log(aleatas);
*/



let nome = prompt('qual teu nome');
let idade = prompt('quanto anos em festa tu tem?');
let tentativas = 1;

if(idade > 18){
    alert('pode dirigi');
}

let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random()*numeroMaximo);//parseInt pega os numeros antes do zero, simplifica a dizima periodica: Math.random pega um numero aleatório entre 0 e 1
let escolhido = prompt(`Escolha um numero de 1 a ${numeroMaximo}`);

while (escolhido!=numeroSecreto){

    

    if (escolhido == numeroSecreto){
        console.log(`voce acertou ${numeroSecreto}`);
        break;
    }else if(escolhido > numeroSecreto){
        escolhido = prompt('O numero secreto é menor amigo')
    }else{
        escolhido = prompt('O numero secreto é maior amigo')
    }
    tentativas++;
}

let palavarVezes = tentativas > 1 ? 'vezes':'vez'
alert(`voce demorou ${tentativas} ${palavarVezes} pra acertar`);

