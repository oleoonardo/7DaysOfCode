/*
Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, 
porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, 
o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
*/

function somar() {
    let [num1, num2] = pegarNumero();
    if(num1 !== null && num2 !== null){
        mostrarResultado(num1 + num2);
    }
}

function subtrair () {
    let [num1, num2] = pegarNumero();
    if(num1 !== null && num2 !== null){
        mostrarResultado(num1 - num2);
    }
}

function multiplicar () {
    let [num1, num2] = pegarNumero();
    if(num1 !== null && num2 !== null){
        mostrarResultado(num1 * num2);
    }
}

function dividir () {
    let [num1, num2 ]= pegarNumero();

    if(num1 !== null && num2 !== null){
        if(num2 === 0){
            mostrarResultado("Não é possível dividir por 0");
            return;
        }
        
        mostrarResultado(num1 / num2);
    }
}

function pegarNumero(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, digite um número válido");
        return [null, null];
    }

    return [num1, num2];
}

function mostrarResultado(resultado){
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}