const animais = require('./animais.json');

const stringAnimais = JSON.stringify(animais);

let objAnimais = JSON.parse(stringAnimais);
console.log(objAnimais);


objAnimais.animais.pop();
objAnimais.animais.pop();
objAnimais.animais.pop();

console.log(objAnimais);
