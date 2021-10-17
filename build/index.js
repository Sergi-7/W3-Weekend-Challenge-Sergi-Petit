import Component from "./js/Component.js";
import Page from "./js/Page.js";
import Card from "./js/Card.js";
import PokemonService from "./js/PokemonService.js";
import Header from "./js/Header-nav.js";
import PageNav from "./js/page-nav.js";

const createMainDiv = new Component(document.body, "main-div", "div");
const mainDiv = document.querySelector(".main-div");

const createHeaderNav = new Header(
  mainDiv,
  "header-nav",
  "nav",
  "Pokemon",
  "My Pokemons"
);
const headerNav = document.querySelector(".header-nav");

const createPokemonList = new Component(mainDiv, "pokemon-list", "ul");
const pokemonList = document.querySelector(".pokemon-list");

const createNextPageNav = new PageNav(mainDiv, "page-nav", "nav", "<<", ">>");
const loadNextPage = document.querySelector(".page-nav__next");
const loadPreviousPage = document.querySelector("page-nav__back");

let offset = 0;

const pokemonApi = new PokemonService();

const getPokemonArray = (async () => {
  const pokemonArray = await pokemonApi.getPokemonData(10, 0);
  const pokemonData = await pokemonArray.results;

  await Promise.all(
    pokemonData.map(async (pokemon) => {
      const pokemonUrl = pokemon.url;

      const newPokemon = await pokemonApi.getPokemonInfo(pokemonUrl);

      const newPokemonCard = new Card(pokemonList, "pokemon", "li", newPokemon);
      return newPokemonCard;
    })
  );
})();

loadNextPage.addEventListener("click", async () => {
  const pokemonArray = await pokemonApi.getPokemonData(10, offset + 10);
  const pokemonData = await pokemonArray.results;
  await Promise.all(
    pokemonData.map(async (pokemon) => {
      const pokemonUrl = pokemon.url;

      const newPokemon = await pokemonApi.getPokemonInfo(pokemonUrl);

      const newPokemonCard = new Card(pokemonList, "pokemon", "li", newPokemon);
      return newPokemonCard;
    })
  );
  offset += 10;
});
