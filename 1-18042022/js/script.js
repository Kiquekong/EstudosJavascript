// Janela de alerta criada em js
function bemvindo(){
    alert("Olá. Seja Bem-vindo");
}
// Solicitar ao usuario que insira seu nome
// usar prompt associado a uma variável
function nome(){
    var nome = ""
    nome = prompt("Digite seu nome");
    alert(nome.toUpperCase());
}

function operacoes(){
    // 4 operações aritméticas
var numero1 = prompt("Digite um numero");
var numero2 = prompt("Digite outro numero");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;


document.getElementsByTagName("div")(
    "Os resultados são: <br><br>"+
    "Soma: " +
    soma +
    "<br>subtração: " + 
    subtrair +
    "<br>multiplicação: " +
    multiplicar +
    "<br>divisão: " +
    dividir +
    "<br>resto: " +
    resto;
)
}

function operacoesComDiv(){
// 4 operações aritméticas
var numero1 = prompt("Digite um numero");
var numero2 = prompt("Digite outro numero");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

for(var i = 0; i <= 2 ; i++){

document.getElementsByTagName("div")[i].innerHTML =
    "Os resultados são: <br><br>"+
    "Soma: " +
    soma +
    "<br>subtração: " + 
    subtrair +
    "<br>multiplicação: " +
    multiplicar +
    "<br>divisão: " +
    dividir +
    "<br>resto: " +
    resto;
    document.getElementsByTagName("div")[i].style.padding="30px"
    document.getElementsByTagName("div")[i].style.backgroundColor =
    "rgb(" + (150 * i) +",200,100)";
}

}

function tamanhodiv(){
    document.getElementsByTagName(div)[0].style.width
}