/*- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?
*/

let nome = prompt("Qual o seu nome?");
let idade = parseInt(prompt("Quantos anos você tem?"));
let linguagem = prompt("Qual linguagem de programação você está estudando?");
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let gostaEstudar = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));
if (gostaEstudar == 1) {
  alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
} else {    
  alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
};