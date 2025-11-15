const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>

          <div class="details">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="${pokemon.name}"
            />
          </div>
        </li>`
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json()) //para buscar promisse, caso der erro tentando o abaixo como nova tentativa para arrumar isso// função com setinha

    .then((jsonBody) => jsonBody.results)

    .then((pokemonList) => {
        
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemonToLi(pokemon));
        }

    })
    
    .catch((error) => console.log(error))// usado para quando der erro de promessa/promisse

    .finally(function () { // independente de dar certo ou errado avisa que terminou promisse

        console.log(`Terminou!`)

    })
