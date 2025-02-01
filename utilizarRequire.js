const dados = require('./dados.json');
console.log(dados);
console.log(typeof dados);


const stringDados = JSON.stringify(dados);

console.log(stringDados);
console.log(typeof stringDados);

const objConvertDados = JSON.parse(stringDados);
console.log(objConvertDados);
console.log(typeof objConvertDados);



