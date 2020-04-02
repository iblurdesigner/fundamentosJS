//MEMOIZACION
function factorial(n) {

    if(!this.cache) {
        this.cache = {}
    }

    if(this.cache[n]) {
        return this.cache[n]
    }

    if(n === 1) {
        return 1
    }

    this.cache[n] = n * factorial(n -1)

    return this.cache[n]
}

// CLOSURES

function saludo(finalDeFrase) {
    return function(nombre){
        console.log(`Hola ${nombre} como estas ${finalDeFrase}`)
    }
}

const saludoArgentino = saludo('che!')
const saludoMexicano = saludo('wey!')
const saludoColombiano = saludo('parce!')

saludoArgentino('Sacha')
saludoMexicano('Adal')
saludoColombiano('Freddy')




// INMUTABILIDAD

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

const cumpleInmutable = persona => ({
    ...persona,
    edad: persona.edad +1
}) 


// THIS

const persona = {
    nombre: 'Sacha',
    edad: 28
}

function saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`)
}