const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 1080
const limit= 5
let offset = 0;
//var detalhe = pokeApi.getPokemons(offset,1).then((pokemons)=>pokemons.map(pokeApi.getPokemonDetail)).then(convertPokeApiDetailToPokemon(pokemon.number))

debugger

function loadPokemonItems(offset,limit){
    //requisicao http.
    pokeApi.getPokemons(offset,limit).then((pokemons=[])=>{  
        
    //transformou em lista html
    // const newHtml = pokemons.map(convertPokemonToLi).join('')
    // pokemonList.innerHTML = newHtml
        const newHtml =pokemons.map((pokemon)=>`
            <a id="detailPoke" href="details.html" onclick="storePokemonId(${pokemon.number})">
                <li class="pokemon  ${pokemon.type}">
                    <span id="numberPoke" class="number">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            
                        </ol>
    
                        <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                    </div>
                </li>
            </a>
          
            `
            ).join('')
        debugger
            pokemonList.innerHTML += newHtml;
    })
}


function storePokemonId(pokemonId) {
    localStorage.setItem('selectedPokemonId',pokemonId);
}


loadPokemonItems(offset,limit)



loadMoreButton.addEventListener('click',()=>{
    offset += limit
    const qtdrecordsNextPage = offset + limit

    if(qtdrecordsNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        
        loadPokemonItems(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else 

        loadPokemonItems(offset,limit)
})

    .catch((error) => console.error(error))


    
    
/*manipular o sucesso
    .then(function(response){
        console.json(response)
    })
    .then((jsonBody)=>{
        debugger
        console.log(jsonBody)
    })
    //manipular o fracasso
    .catch(function(error){
        console.error(error)
    })
    //manipular após requisicao
    .finally(function(){
        console.log('Requisição concluida!')
    })

    //sintaxe de function quando não vamos invocalas em outros lugares do codigo.
    //quando existe apenas uma limha de codigo dentro da function ele pode ser reduzida

    .then((response) => response.json())
.catch(error)=> console.error(error))*/