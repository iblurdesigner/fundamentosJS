//<<< DESTRUCTURAR solo un elemento y a lo demas dejarlo en el objeto
const person = {
    'name': 'David',
    'age': '34',
    'country': 'EC',
    'city': 'Quito'
}

let {name, ...all} = person
console.log(name, all)

// si yo quiero excluir un dato
let {country, ...all} = person
console.log(all)

//<<<OPERADOR DE PROPAGACION>>>

let obj = {
    'name': 'David',
    'age': 34
}

let obj1 = {
    ...obj,
    'country': 'EC'
}

console.log(obj1)


// Promise con finally -  para saber cuando ya termino el proceso

const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Hello World'), 3000)
            : reject(new Error ('Test Error'))
        }
    )
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally( () => console.log('Finalizo'))


///<<<REGEX>>>

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)