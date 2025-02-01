const estudante = require('./estudante.json');


const stringEstudante = JSON.stringify(estudante);

// console.log(stringEstudante);
// console.log(typeof stringEstudante);


console.log(stringEstudante.nome); // vai dar undefinide, pois trata-se agora de uma string e não um objeto

const objEstudante = JSON.parse(stringEstudante); // convertendo a string em obj

console.log(objEstudante.nome);




