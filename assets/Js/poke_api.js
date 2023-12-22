const pokeApi = {}

function convertPokeApiDetail(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.name=pokeDetail.name;
    pokemon.number=pokeDetail.id;
    const types=pokeDetail.types.map((typeSlot)=>typeSlot.type.name);
    const [type]=types;
    const abilitys=pokeDetail.abilities.map((abilitySlot)=>abilitySlot.ability.name);
    const [ability]=abilitys
    pokemon.abilitys=abilitys;
    pokemon.ability=ability;
    pokemon.types=types;
    pokemon.type=type;
    pokemon.photo=pokeDetail.sprites.other.dream_world.front_default;
    return pokemon 

}





pokeApi.getPokemonDetail=(pokemon)=>{
    
    return fetch(pokemon.url).
    then((response)=>response.json()).
    then(convertPokeApiDetail)}


pokeApi.getpokemons =(offset=0,limit=5) =>{
 const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
 return fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemon)=>pokemon.map(pokeApi.getPokemonDetail))
    .then((detailRequest)=>Promise.all(detailRequest))
    .then((pokemonDetail)=>pokemonDetail)

}


pokeApi.getpokemons1 =(id,limite=1) =>{
    const urls = `https://pokeapi.co/api/v2/pokemon?offset=${id}&limit=${limite}`
    return fetch(urls)
       .then((response)=> response.json())
       .then((jsonBody)=> jsonBody.results)
       .then((pokemon)=>pokemon.map(pokeApi.getPokemonDetail))
       //.then((pokemon1)=>pokemon.map(pokeApi.getD))
       .then((detailRequest)=>Promise.all(detailRequest))
       .then((pokemonDetail)=>pokemonDetail)
   
   }
  