const pokemonOL = document.getElementById('pokemonOL')
const moreButton = document.getElementById('loadmore')


const limit = 10;
let offset = 0;
const maxRecords = 151;


function loadPokeitens(offset, limit){
    pokeApi.getpokemons(offset, limit).then((pokemonList=[])=>{
        const newHtml=pokemonList.map(pokemon=>
            `
            <li class="pokemon ${pokemon.type}">
                <span class="numberPoke">#${pokemon.number}</span>
                <span class="namePoke">${pokemon.name}</span>
                    <div class="details">
                        <ol class="types">${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                           
                        </ol>
                                <img src="${pokemon.photo}" alt=${pokemon.name}>
                     </div>
                     <button class='detalhe'type=button><a href="./details.html">details</a></button> 
            </li>
    
        `).join('')
           pokemonOL.innerHTML += newHtml
       })
}
loadPokeitens(offset, limit)

moreButton.addEventListener('click', ()=>{
    offset +=limit
    const qtdRecords=offset + limit;
    if(qtdRecords>=maxRecords){
      const   newlimit = maxRecords-offset;
        loadPokeitens(offset, newlimit);
        moreButton.parentElement.removeChild(moreButton)

    }else{loadPokeitens(offset, limit)}
   
    
})




