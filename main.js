
const fetchPokemon = () =>
{
    let inputPokemon = document.getElementById("inputPokemon").value;
    let imagenPokemon = document.getElementById("pokemon-sprite");
    let nombrePokemon = document.getElementById("pokemon-name");

    const url= 'https://pokeapi.co/api/v2/pokemon/'+inputPokemon;
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        
        let pokeImg = data.sprites.front_default;
        let pokeName=data.species.name;
        const pokeID=data.id;
        let tipos=data.types;
        console.log(tipos);
        tposPokemon = "";
        tipos.map(function(tipo) {
            tposPokemon+= String(' <div class="type '+tipo.type.name+'">'+tipo.type.name+'</div>');
        });
        const rusl2=
    fetch(url2).then((res) =>{
        return res.json();
    }).then((data)=>{
        
    });


        document.getElementById("type-box").innerHTML = tposPokemon;
        
        
        let tituloPokemon = pokeName + '<span class="name-no">no. '+pokeID+'</span>';
        imagenPokemon.src= pokeImg;
        nombrePokemon.innerHTML=tituloPokemon;
    })
}

const buscar = () =>{

}
