const prueba = () => {
    if (true) {
      return console.log('Hola Mundo 1');   
    }
}

const prueba2 = () => {
    if (true) {
      return console.log('Hola Mundo 2');   
    }
}


const calcualdora = (num, limit) => {
    //var limit = 10;
    var resultado = '';
    console.log(`tabla del ${num} = `);
    for (let index = 1; index <= limit; index++) {
      resultado += `${num} x ${index} = ${num * index }\n`;
    }
    return resultado;
}

module.exports = {prueba , prueba2, calcualdora};