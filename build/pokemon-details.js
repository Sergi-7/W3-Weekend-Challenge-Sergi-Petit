import Component from "./js/Component.js";
import Card from "./js/Card.js";
import Page from "./js/Page.js";
import Header from "./js/Header-nav.js";
import PokemonService from "./js/PokemonService.js";

const createMainDiv = new Component(document.body, "main-div", "div");
const mainDiv = document.querySelector(".main-div");

const createHeader = new Header(
  mainDiv,
  "main-header",
  "nav",
  "Pokemon Details",
  "Back to Pokemons"
);

const anchorHref = document.querySelector("a");
anchorHref.href = "./index.html";

const pokemonApi = new PokemonService();

const pokemons = (async () => {
  const pokemonArray = await pokemonApi.getPokemonData(1000, 0);
  const pokemonData = await pokemonArray.results;
  console.log(pokemonData);
  return pokemonData;
})();

// const createCard = new Card(mainDiv, "pokemon", "li", pokemon);
