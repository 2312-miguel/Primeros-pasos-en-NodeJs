let objet = {
    firstName: 'Miguel',
    secontName: 'Simijaca',
    years: '21',
    funcion() {
        return `${this.firstName} ${this.secontName} ${this.years}`;
    }
}

let array = ['perro', 'mono', 'gato', 'tortuga'];

const arrayObjetos = [
    { document: 1111, id: 1, name: 'Andrea' },
    { document: 2222, id: 2, name: 'Maria' },
    { document: 3333, id: 3, name: 'Monica' },
    { document: 3333, id: 10, name: 'Monica' },
];

const arrayUsuarios = [
    { id: 1, clave: 123, name: 'Andrea' },
    { id: 2, clave: 456, name: 'Maria' },
    { id: 3, clave: 789, name: 'Monica' },
];

//---------------descructuracion -----------------------

/* let { firstName : nombre, secontName, years} = objet;

console.log(nombre, secontName, years); */

//-------------funciones flecha-------------

/* let saludar = () => 'Hola Mundo';

console.log(saludar()); */

// ----------CallBack---------


/* const findObject = objetos.filter(row =>{
    console.log(row, 'row');
    return row.id === 1 || row.id === 2
})  /// return array with matches

console.log(findObject)

const isIn = array.includes('gato'); // return boolean

console.log( isIn );

const isInindex = array.indexOf('gato'); // return number with first position

console.log(isInindex);

const find = array.find( row => {
    console.log(row, 'row');
    return row === 'gato'
} ) // return posicion encontrada

console.log(find); */

//---ejercicio callBack----

/* let getUsuario  = (id, callBack) => {
    let usuario = arrayObjetos.find( row => {
        return row.id == id;
    });
    if(usuario){
        callBack(usuario);
    }else{
        callBack( `No se encuentra usuario con id: ${id}`);
    }
}

getUsuario(3, usuario => console.log(usuario));
 */

 //------------Promesas--------------------

/*  let getCliente = id => {
     //recibe 2 callbacks, resolve = terminacion positiva, reject = error
     return new Promise((resolve, reject) =>{
            let cliente = arrayObjetos.find( row => row.id === id );
            if (!cliente) {
                reject(`id: ${id} no encontrado`);
            }else{
                resolve(cliente);
            }
     });
 }
// .then resibe los 2 callbacks que se le mandan a la promesa.
 getCliente(1).then( cliente =>  console.log(`Cliente en db: `,cliente)
 , err => console.log(err)); */

//----------Promesas en cadena-------------

/* let getCliente = id => {
    //recibe 2 callbacks, resolve = terminacion positiva, reject = error
    return new Promise((resolve, reject) => {
        let cliente = arrayObjetos.find(row => row.id === id);
        if (!cliente) {
            reject(`id: ${id} cliente no encontrado`);
        } else {
            resolve(cliente);
        }
    });
}

let getUsuario = (cliente) => {
    //recibe 2 callbacks, resolve = terminacion positiva, reject = error
    return new Promise((resolve, reject) => {
        let usuario = arrayUsuarios.find(row => row.id === cliente.id);
        if (!usuario) {
            reject(`id: ${cliente.id} usuario no encontrado`);
        } else {
            resolve({
                id: usuario.id,
                document: cliente.document,
                clave: usuario.clave,
                name: cliente.name
            });
        }
    });
}
// .then resibe los 2 callbacks que se le mandan a la promesa.
getCliente(10)
.then(cliente => getUsuario(cliente)
)
.then(usuario => console.log(usuario))
.catch(err => console.log(err)); */


// ----------Ejercicio -------

/* class OtroError extends Error {
    otro = null;
    constructor(string, otro) {
        super(string);
        this.otro = otro;
    }
}

flag = false;
objectTest = { a: 'a', b: 'b' }
varString = 'Test'

promiseFunction = () => {
    return new Promise((resolve, reject) => {
        (flag)
            ? setTimeout(() => resolve({ message: 'The flag is true' }), 2000)
            :reject(new OtroError(`The flag is false`, 'string'));
    });
}

promiseFunction()
    .then( data => 'otra cosa' )
    .then( data =>  console.log(data) )
    .then(data => {
        throw new OtroError('Malo', 'Este es otro parametro')
     })
    .then(data => console.log(data))
    .catch(e => console.log(e.message, e.otro));

async function runPromise() {

    try {
        console.log(new Date(), '1');

        //throw new Error('Aldo');

        const returnPromis = await promiseFunction()
            .then(data => console.log(new Date(), '2'))
        //.catch( e => true )

        console.log(returnPromis, 'returnPromis')

        console.log(new Date(), '3');
    } catch (e) {
        console.log(e.message)
    }

}

runPromise() */

///---------async y await------------

/* const funcion = async () => {
    if(false){
        return 'Pasa';
    }else{
        throw new Error( 'Hola Mundo');
    }
}

const prueba = () => console.log('undefined.nombre');


funcion().then( async res => {
    console.log(res);
    await prueba();
    console.log('hola')
}).catch( err => {
    return console.log(err);
});  */
