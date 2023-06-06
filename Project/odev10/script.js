const searchInput = document.getElementById("poke-input");
const searchBtn = document.getElementsByClassName("btn-search");
const pokeContainer = document.getElementsByClassName("container");

const pokeCount = 10;

const initPokemon = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createPokemonBox(data);
};

const createPokemonBox = (pokemon) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); //datadan gelen isimler küçük harfle başladığı için
  const id = pokemon.id.toString().padStart(3, "0"); //başına sıfır eklemek için
  const type = pokemon.types[0].type.name; //datadan gelen bilgide types ın altında typelar olduğu için önce types arrayine girip ordan typelara ulaşıyoruz

  const pokeCard = document.createElement("div");
  pokeCard.classList.add("box-container");

  pokeCard.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}" alt="${name} image">
        <h4 class="Poke-name">${name}</h4>
        <p class="poke-id">#${id}</p>
        <p class="poke-type">Type: ${type}</p>
    `;
    pokeContainer.appendChild(pokeCard)
};
initPokemon();
