// import estudante from './estudante.json';   //forma mais moderna
const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);


