const newfunction2 = (name='David', age='34', country='EC') => {
    console.log(name, age, country)
}

newfunction2()
newfunction2('Eden', '22', 'USA')



// <<< OBJETOS >>>
let person = {
    'name': 'David',
    'age': '34',
    'country': 'EC'
}

let {name, age, country} = person
console.log(name, age, country)

let name = 'Eden'
let age = '22'

obj2 = {name, age}
console.log(obj2)



// <<<< OPERADOR DE PROPAGACION >>>

let team1= ['Oscar', 'Julian', 'Ricardo']
let team2= ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)


// <<<< ARRAY DE OBJETOS >>>>   
const names = [
    {name: 'David', age: 34},
    {name: 'Eden', age: 22}
]

let listOfNames = names.map( item => console.log(item.name))


// <<<< Generadores >>>>
//funcion que retorna valores segun el algoritmo definido
function* helloWord() {
    if (true) {
      yield "hello, ";
    }
    if (true) {
      yield "world";
    }
  }
  
  //lo ejecutamos
  const generatorHello = helloWord();
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);





