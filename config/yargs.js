const yargs = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        description: 'Tabla multiplicar'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: false,
        description: 'Bandera'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: false,
        description: 'numero hasta donde sacea multiplicar'
    })
    .check((yargs, options) => {
        if (isNaN(yargs.n)) {
            throw 'Dato invalido';
        } else if (yargs.l == false) {
            return new Error('Validacion incorrecta');
        } else if (isNaN(yargs.h)) {
            throw 'Dato invalido';
        } else {
            return true;
        }
    })
    .argv;

module.exports = yargs ;