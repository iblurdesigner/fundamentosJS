// primera promesa
const thingHappen = () => {
    return new Promise( (resolve, reject) => {
        true ? resolve('Hey!') : reject('Whoops!...')
    })
}

thingHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

// segunda promesa

const promise2 = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            setTimeout( () =>{
                resolve('Funciona la segunda promesa')
            } , 2000)   
        } else {
            const error = new Error('Fallo la segunda')
            reject(error)
        }
    } )
}

promise2()
    .then(response => console.log(response))
    .catch( err => console.error(err) )



/// Ejecutar varias promesas al mismo tiempo

Promise.all( [thingHappen(), promise2()] )
    .then( response => console.log('Array of results', response) )
    .catch( err => console.error(err))