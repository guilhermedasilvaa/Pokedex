const pokemonDetails = document.getElementById('pokemonDetails')

const limit = 1
let offset = 4


function detailsPokemonsItems(offset,limit){
     //requisicao http.
     pokeApi.getPokemons(offset,limit).then((pokemons=[])=>{
        const newHtml =pokemons.map((pokemon)=>`
            <li >
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    ${pokemon.abilitys.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo3d}"
                alt="${pokemon.name}">
            </div>
        </li>

        `).join('')  
      
        
        pokemonDetails.innerHTML += newHtml;



    })
}
detailsPokemonsItems(offset,limit)
