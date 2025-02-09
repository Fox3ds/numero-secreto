

//ATIVIDADE 1;
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Ora do dezafiu';

function consolo(){
    console.log('o consolo foi clicado');
}
function alertado(){
    console.log('Eu mamo JS');
}
function aprontado(){
    let cidade = prompt('me diz uma cidade do brasil')
    alert(`fui para ${cidade} e lembrei de voce`);
}
function somado(){
    let n1 = parseInt(prompt('me fala um numero'));
    let n2 = parseInt(prompt('me fala oto'));
    let result = parseInt(n1+n2);
    alert(`${n1} + ${n2} = ${result}`);
}
*/

//ATIVIDADE 2
/*
function olaMund(){
    console.log('ola mundo')
}

let nome = 'pedro';
function olaNome(nome){
    console.log('ola '+nome);
}

let num1 = 4;
let num2 = 3;
let num3 = 2;
let num4 = 7;

function drobro(num){
    return num*2;
}

function media(nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3;
}

function maior(num1, num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

function potencia(num){
    return num*num;
}

olaMund();
olaNome(nome);
console.log(drobro(num1));
console.log(media(num1,num2,num3));
console.log(maior(num3,num4));
console.log(potencia(num1));
*/

//ATIVIDADE 3
/*
let peso=68;
let tamanho =1.80;
function calcIMC(peso,tamanho){
    let imc=peso/(tamanho^2);
    return imc;
}
let num=5;
function calcFac(num){
    let factor
    while(num!=0){
        factor*=num;
        num--;
    }
    return factor;
}
let dolar=25;
function fazueli(dolar){
    let real = dolar*4.80;
    return real;
}
let largura=4;
let altura=2.5;
function sala(largura,altura){
    let perimetro = 2*(largura+altura);
    let area = largura*altura;
    alert (perimetro);
    alert (area);
}
let raio=5;
let pi=3.14
function sala2(raio,pi){
    let perimetro = 2*pi*raio;
    let area = pi*raio^2;
    alert (perimetro);
    alert (area);
}
let num2=4;
function tabuada(num2){
    let result;
    let ref=0;
    while (ref<=10){
        result = ref*num2;
        alert(result);
        ref++;
    }
}

alert(calcIMC(peso,tamanho));
alert(calcFac(num));
alert(fazueli(dolar));
sala(largura,altura);
sala2(raio,pi);
tabuada(num2);
*/

//ATIVIDADE 4
/*
let listaGenerica =[];
let listaProgramazaum =['JavaScript','C','C++','Kotlin','Python'];
listaProgramazaum.push('Java','Ruby','GoLang');
let nomes = ['Pedro','Gustavo','Eduardo'];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
*/

