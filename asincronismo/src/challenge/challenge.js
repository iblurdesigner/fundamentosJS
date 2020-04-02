fetch('https://rickandmortyapi.com/api/character/')
.then( response => response.json() )
.then( mono => {
    console.log(mono.info.count)
    console.log(mono.results[0].name)
})
.then( mono => {
    const url = mono.results[0].location.url
    console.log(url)
})