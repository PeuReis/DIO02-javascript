const pokemonoL=document.getElementsByClassName("pokemonss")[0]
const proximoPoke=document.getElementById('prox1')







function pokeD(){
    pokeApi.getpokemons1().then((pokemonL=[]) => {
   let  dpoke = pokemonL.map(pokemon => `
         
        <span class="numberPoke">#${pokemon.number}</span>
        <span class="namePoke">${pokemon.name}</span>
        <div class='pokemon'><ol class="abilitys">${pokemon.abilitys.map((ability)=>
            `<li class="ability ${ability}${ability}">${ability}</li>`).join('')}
            </ol>
            </div>
        
        <img src="${pokemon.photo}" alt=${pokemon.name}>
        <div class='pokemon'>
        <button class='detalhe'  id='prox' type=button>Proximo Pokemon</button>
        
        
        </div>`
        
        ).join('')
       
        pokemonoL.innerHTML+=dpoke
            
    })
}







function prox1(id){

    pokeApi.getpokemons1(id).then((pokemonL=[]) => {
        let  dpoke = pokemonL.map(pokemon => `
              
             <span class="numberPoke">#${pokemon.number}</span>
             <span class="namePoke">${pokemon.name}</span>
             <div class='pokemon'><ol class="abilitys">${pokemon.abilitys.map((ability)=>
                 `<li class="ability ${ability}${ability}">${ability}</li>`).join('')}
                 </ol>
                 </div>

             <img src="${pokemon.photo}" alt=${pokemon.name}>
             `
             ).join('')
            
             
            
             pokemonoL.innerHTML+=dpoke
        
                 
         })

}
function clickar(){
    let id=0
    while (id<151) {
        id++
        
    }
}

let id =0
proximoPoke.addEventListener('click',()=>{
    id=+1

}


)

console.log(id)

prox1(proximoPoke)









