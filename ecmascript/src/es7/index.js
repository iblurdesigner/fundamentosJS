let numbers = [1,5,6,2,7,9]

// anteriormente se utilizaba indexOf, ahora se utiliza includes

numbers.includes(6) ? console.log('si esta incluido') : console.log('no esta')
numbers.includes(3) ? console.log('si esta incluido') : console.log('no esta')

// <<<<EXPONENTES se utiliza ** >>

let base = 2
let exp = 3

let result = base ** exp

console.log(result)