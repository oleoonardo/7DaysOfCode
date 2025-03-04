/*
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. 
Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. 
Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, 
continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.


*/

let area = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End?");
let especializacao = "";
let tecnologia = "";
let tecnologias = [];
let full = false;


if (area.toLowerCase() == "front-end") {
    escolherFront();
}else if (area.toLowerCase() == "back-end") {
    escolherBack();
}else{
    alert("Opção inválida");
}


area = prompt("Você quer se especializar ou se tornar Fullstack?");
while (area.toLowerCase() == "fullstack" || area.toLowerCase() == "especializar") {
    if (area.toLowerCase() == "especializar") {
        escolherTecnologia();
    } else {
        alert("Você escolheu se tornar Fullstack");
    }
    if(full){
        area = prompt("Você quer se especializar?");
    }else{
        area = prompt("Você quer se especializar ou se tornar Fullstack?");
    }
}


function escolherFront() {
    especializacao = prompt("Você quer aprender React ou aprender Vue?");
    if (especializacao == "React") {
        especializacao = "React";
        if (tecnologias.includes(especializacao)) {
            alert("Você já escolheu essa tecnologia");
        } else {
            tecnologias.push(especializacao);
        }
    } else if (especializacao == "Vue") {
        especializacao = "Vue";
        if (tecnologias.includes(especializacao)) {
            alert("Você já escolheu essa tecnologia");
        } else {
            tecnologias.push(especializacao);
        }
    } else {
        alert("Opção inválida");
        escolherFront();
    }
}

function escolherBack() {
    especializacao = prompt("Você quer aprender C# ou aprender Java?");
    if (especializacao == "C#") {
        especializacao = "C#";
        if (tecnologias.includes(especializacao)) {
            alert("Você já escolheu essa tecnologia");
        } else {
            tecnologias.push(especializacao);
        }
    } else if (especializacao == "Java") {
        especializacao = "Java";
        if (tecnologias.includes(especializacao)) {
            alert("Você já escolheu essa tecnologia");
        } else {
            tecnologias.push(especializacao);
        }
    } else {
        alert("Opção inválida");
        escolherBack();
    }
}

function escolherTecnologia() {
    tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
    if (tecnologias.includes(tecnologia)) {
        alert("Você já escolheu essa tecnologia");
    } else {
        tecnologias.push(tecnologia);
    }
    let continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    while (continuar.toLowerCase() == "sim") {
        tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
        if (tecnologias.includes(tecnologia)) {
            alert("Você já escolheu essa tecnologia");
        } else {
            tecnologias.push(tecnologia);
        }
        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    }
    alert("Você escolheu as tecnologias: " + tecnologias);
}