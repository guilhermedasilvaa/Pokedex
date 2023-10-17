const pokemonDetails = document.getElementById('pokemonDetails')

const limit = 1
let offset = 0


function detailsPokemonsItems(offset,limit){
     //requisicao http.
     pokeApi.getPokemons(offset,limit).then((pokemons=[])=>{
        
        const newHtml =pokemons.map((pokemon)=>`

        <h1>${pokemon.name}</h1>`)
       
        
        pokemonDetails.innerHTML += newHtml;



    })
}
detailsPokemonsItems(offset,limit)
