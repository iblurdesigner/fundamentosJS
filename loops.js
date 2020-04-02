let nombres = ['Karime', 'Amira', 'Lily', 'Silvia'];

const saludar = (name) => {
    console.log(`Hola ${name}`)
}

// for(let i=0; i<nombres.length; i++){
//     saludar(nombres[i])
// }

for(let n of nombres) {saludar(n)}
