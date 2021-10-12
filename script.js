function calculo_IMC(){
    var nome, peso, altura, calc, tipo;
    nome = window.prompt("Digite seu nome");
    peso = window.prompt("Digite seu peso");
    peso = parseFloat(peso);
    altura = window.prompt("Digite sua altura (em centimetros)");
    altura = parseFloat(altura);
    calc = peso/(altura**2);
    document.write("Seu IMC é: ",calc);
    if (calc <16,9) {
        tipo="muito abaixo do peso";
    } 

    if(calc <=18,4){
        tipo="abaixo do peso"
    }

    if(calc <=24,9){
        tipo="peso ideal"
    }

    if(calc <=29,9){
        tipo="acima do peso"
    }
    if(calc <=34,9){
        tipo="obesidade grau I"
    } 

    if(calc <=40){
        tipo="obesidade grau II"
    }

    if(calc >40){
        tipo="obesidade grau III- mórbida"
    }



    document.write(" ",nome," seu IMC é ", calc, " e você está ", tipo);


}