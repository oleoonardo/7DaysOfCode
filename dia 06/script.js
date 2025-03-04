/*
Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, 
e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, 
doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, 
da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca
O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
*/
let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
}

function adicionarItem(){
    let comida = document.getElementById('comida').value;
    let categoria = document.getElementById('categoria').value;
    if(!comida){
        alert('Digite o nome do item');
        return;
    }
    listaDeCompras[categoria].push(comida);
    
    document.getElementById('comida').value = '';
    document.getElementById('listaDeCompras').innerHTML = '';
    for (let categoria in listaDeCompras) {
        //console.log(`${categoria}: ${listaDeCompras[categoria].join(', ')}`);
        document.getElementById('listaDeCompras').innerHTML += `${categoria}: ${listaDeCompras[categoria].join(', ')}<br>`;
    }
}

// function removerItem(){
//     let comida = document.getElementById('comida').value;
//     let categoria = document.getElementById('categoria').value;
//     if(!comida){
//         alert('Digite o nome do item');
//         return;
//     }
//     let index = listaDeCompras[categoria].indexOf(comida);
//     if(index === -1){
//         alert('Não foi possível encontrar o item dentro da lista!');
//         return;
//     }
//     listaDeCompras[categoria].splice(index, 1);
//     document.getElementById('comida').value = '';
//     document.getElementById('listaDeCompras').innerHTML = '';
//     for (let categoria in listaDeCompras) {
//         //console.log(`${categoria}: ${listaDeCompras[categoria].join(', ')}`);
//         document.getElementById('listaDeCompras').innerHTML += `${categoria}: ${listaDeCompras[categoria].join(', ')}<br>`;
//     }
// }

function removerItem(){
    let comida = document.getElementById('comida').value;
    let categoria = document.getElementById('categoria').value;

    if(!comida){
        alert('Digite o nome do item');
        return;
    }

    let index = listaDeCompras[categoria].indexOf(comida);
    if(index === -1){
        alert('Não foi possível encontrar o item dentro da lista!');
        return;
    }
    
    listaDeCompras[categoria].splice(index, 1);
    document.getElementById('comida').value = '';
    document.getElementById('listaDeCompras').innerHTML = '';
    for(let comida in listaDeCompras){
        document.getElementById('listaDeCompras').innerHTML += `${comida}: ${listaDeCompras[comida].join(', ')}<br>`;
    }
}