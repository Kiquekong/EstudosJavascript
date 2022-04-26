function array1(){
    var nomes = ["Paulo","Helena", "Vanessa","Jurubiru"];
    for(var i = 0; i < nomes.length; i++) {
        console.log(nomes[i]);
    }
    nomes.push("Guilherme");
    console.log(nomes);
    nomes.pop();
    console.log(nomes);
    nomes.shift();
    console.log(nomes);
}
