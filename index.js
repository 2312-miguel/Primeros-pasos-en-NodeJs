console.clear();

const yargs = require('./config/yargs');
const bases = require('./basesJS/index');
const fs = require('fs');

console.log(yargs);
console.log(yargs.n);
const tabla = parseInt(yargs.n);
const limit = parseInt(yargs.h);
const result = bases.calcualdora(tabla, limit);
console.log(result);

const promesa = async (result, tabla) => {
    try{
        let resultado = fs.writeFileSync(`./tablasMulti/Tabla${tabla}.txt`, result);
        return `creado`;
    }catch(err){
        throw new Error('No creado');
    }
}

promesa(result, tabla).then(  positivo => {
     console.log(positivo);
}).catch(err => {
    console.log(err);
});










