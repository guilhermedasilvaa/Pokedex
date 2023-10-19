const pokemonDetails = document.getElementById('pokemonDetails')
const selectedPokemonId = localStorage.getItem('selectedPokemonId');
const limit = 1
let offset = (parseInt(selectedPokemonId)-1);
debugger
function loadPokemonDetails(offset,limit) {
        // Recupere as informações detalhadas do Pokémon com o ID selecionado
    pokeApi.getPokemons(offset,limit).then((pokemons=[]) => {
        const newHtml = pokemons.map((pokemon)=> `
            <img src="${pokemon.photo}"
            alt="${pokemon.name}" class="imgDetails"/>
            <li class="pokemon  ${pokemon.type}">
                <span id="numberPoke" class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        ${pokemon.abilitys.map((ability) => `<li class="type abilities">${ability}</li>`).join('')}
                    </ol>
                    
                    <img src="${pokemon.photo3d}"alt="${pokemon.name}"/>

                        
                </div>
            </li>
            `).join('')

            // Exiba as informações detalhadas do Pokémon
            pokemonDetails.innerHTML = newHtml;
        
    })
}


loadPokemonDetails(offset,limit)
console.log(offset,limit)



