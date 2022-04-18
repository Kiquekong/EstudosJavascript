// Janela de alerta criada em js
// alert("Olá. Seja Bem-vindo");
// Solicitar ao usuario que insira seu nome
// usar prompt associado a uma variável
// var nome = ""
// nome = prompt("Digite seu nome");
// alert(nome.toUpperCase());
// 4 operações aritméticas
var numero1 = prompt("Digite um numero");
var numero2 = prompt("Digite outro numero");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
    "Os resultador são: \n\n"+
    "Soma: " +soma+
    "\nsubtração: " +subtrair+
    "\nmultiplicação: " +multiplicar+
    "\ndivisão: " +dividir+
    "\nresto: " +resto
    );