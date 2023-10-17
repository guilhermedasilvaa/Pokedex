const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
        const pokemon = new Pokemon()
        pokemon.number = pokeDetail.id
        pokemon.name = pokeDetail.name

        const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
        const [type]=types

        pokemon.types = types
        pokemon.type = type

        const abilitys = pokeDetail.abilities.map((abilitySlot)=>abilitySlot.ability.name)
        const [ability] = abilitys

        pokemon.abilitys = abilitys
        pokemon.ability = ability
       
      

        

        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
        pokemon.photo3d = pokeDetail.sprites.other.home.front_default


        return pokemon
}

pokeApi.getPokemonDetail = (pokemon)=>{
        return fetch(pokemon.url)
                .then((response) => response.json())
                .then(convertPokeApiDetailToPokemon)
                
                
}
pokeApi.getPokemons = (offset, limit) => {
     const url = 'https://pokeapi.co/api/v2/pokemon/?offset='+offset+'&limit='+limit
     //requisicao da lista que pokemons, devolvendo um http response.
     return fetch(url)
        //converte http reponse em json
        .then((response) => response.json())
        //capta a lista de pokemons
        .then((jsonBody) => jsonBody.results)
        //busca mais detalhes 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        //lista de json detalhes
        .then((detailRequests) => Promise.all(detailRequests))
        //lista de detalhes certa
        .then((pokemonsDetails) =>pokemonsDetails)
       
}
//array de promisses
