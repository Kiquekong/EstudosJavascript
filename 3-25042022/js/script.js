function while1(){
    var i = 0;
    while(i < 10){
        console.log(`Contei ${i}`);
        i++;
    }
}

function while2(){
    var operacao = prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-Sair")
    while(operacao!="S"){
        var n1 = prompt("Digite um número");
        var n2 = prompt("Digite outro número");
        if(operacao == "1"){
            alert(parseInt(n1)+parseInt(n2));
        }
        else if(operacao == "2"){
            alert(parseInt(n1)-parseInt(n2));
        }
        else if(operacao == "3"){
            alert(parseInt(n1)*parseInt(n2));
        }
        else if(operacao == "4"){
            alert(parseInt(n1)/parseInt(n2));
        }
        else{
            alert("Valor inválido, favor escolher de acordo com a tabela");
        }

        operacao = prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-Sair")

    }
}

function paleta(){

   var tabela = "<table>";
   for (var linha = 1 ; linha <= 20 ; linha++){

    tabela += "<tr>";

    for (var coluna = 1 ; coluna <= 50; coluna++){
        var r = Math.round(Math.random()*254);
        var g = Math.round(Math.random()*254);
        var b = Math.round(Math.random()*254);

        tabela += `<td onmouseover=fundo(this.style.backgroundColor) style=background-color:rgb(${r},${g},${b})></td>`
        
    }

    tabela+="</tr>";
   }
   tabela+="</table>";
   document.getElementById("caixa").innerHTML = tabela;
}

function fundo(elemento){

    document.body.style.backgroundColor = elemento;

}