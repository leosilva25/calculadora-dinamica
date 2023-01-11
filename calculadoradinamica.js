//aplicação de calculadora dinâmica

//Queremos um número inicial
//Queremos um sinal (tipo de operação)
//Queremos um número final

var  numero1 = prompt('Informe o primeiro número');
var sinal = prompt('Informe o sinal da sua operação');

while(sinal != '-' && sinal !='+' && sinal !='/' && sinal !='*'){
    window.alert('Informe o sinal correto');

    sinal = prompt('Por favor informe um sinal válido');
}

var numero2 = prompt('Informe o segundo número');

var resultadoFinal = 0;

// funções para converter para número uma string
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if(sinal == '+'){
    resultadoFinal = numero1 + numero2;
} else if( sinal == '-'){
    resultadoFinal = numero1 - numero1;
} else if(sinal == '/') {
    resultadoFinal = numero1 / numero2;
} else if (sinal =='*'){
    resultadoFinal = numero1 * numero2;
}

window.alert('Oresultado é: ' + resultadoFinal);


