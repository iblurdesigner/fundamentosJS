// FLAT
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))

// FLAT MAP
let array2 = [1,2,3,4,5]

console.log(array2.flatMap( value => [value, value*2]))

// eliminar espacios en un String
let saludo = '         hello world!'

console.log(saludo)
console.log(saludo.trimStart())

let saludo2= 'hello world!         '

console.log(saludo2)
console.log(saludo2.trimEnd())


///<<<PARAMETRO ERROR EN CATCH>>
// ya no es necesario mandarle como parametro el error

try{

} catch{
    error
}


///<<<CONVERTIR UN ARRAY A OBJETOS>>>>

let entradas = [ ["name", "David"], ["age", 34]]
console.log(Object.fromEntries(entradas))

//symbol

let mySymbol = 'Mi Simbolo'
let foo = Symbol(mySymbol)
console.log(foo.description)