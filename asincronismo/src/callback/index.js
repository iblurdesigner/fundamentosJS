// esta es la funcion callback
const suma = (num1, num2) => num1 + num2

// esta es la funcion que va contiene el callback
const calcular = (num1, num2, callback) => callback(num1, num2)

// al final utilizamos la funcion y le pasamos el callback, en este caso es suma
console.log(calcular(5,4,suma))

// otra funcion asyncrona
const soyAsincrona = (miCallback) => {
    setTimeout( () => {
        console.log('estoy siendo asincrona')
        miCallback()
    }, 3000)
}

// aqui solo estoy ejecuntando un mensaje y ejecutando la funcion asincrona
console.log('Iniciando proceso...')
soyAsincrona( () => console.log('Terminando proceso...'))


// 2.- otra func mas compleja
const hola = (nombre, miCallback) => {
    setTimeout( () => {
        console.log(`Hola ${nombre}!`)
        miCallback()
    }, 3000)
}

// aqui solo estoy ejecuntando un mensaje y ejecutando la funcion asincrona
console.log('Iniciando proceso...')
hola('David', () => console.log('Terminando proceso...'))


// 3.- lo hacemos más complejo

const hola = (nombre, miCallback) => {
    setTimeout( () => {
        console.log(`Hola ${nombre}!`)
        miCallback()
    }, 3000)
}

const adios = (nombre, otroCallback) => {
    setTimeout( () => {
        console.log(`Adios ${nombre}`)
        otroCallback()
    }, 2000)
}

// aqui solo estoy ejecuntando un mensaje y ejecutando la funcion asincrona
console.log('Iniciando proceso...')
hola('David', () => {
    adios('David', () => console.log('Terminando proceso...'))
})
