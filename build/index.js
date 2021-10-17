import Component from "./js/Component.js";
import Page from "./js/Page.js";
import Card from "./js/Card.js";
import PokemonService from "./js/PokemonService.js";
import Header from "./js/Header-nav.js";
import PageNav from "./js/page-nav.js";
import Pokedex from "./js/Pokedex.js";

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

const createNextPageNav = new PageNav(
  mainDiv,
  "page-nav",
  "nav",
  "<< back",
  "next >>"
);
const loadNextPage = document.querySelector(".page-nav__next");
const loadPreviousPage = document.querySelector(".page-nav__back");

const createPokemonList = new Component(mainDiv, "pokemon-list", "ul");
const pokemonList = document.querySelector(".pokemon-list");

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
  const clearData = mainDiv.querySelector(".pokemon-list");
  clearData.remove();
  const createNewPokemonList = new Component(mainDiv, "pokemon-list", "ul");
  const newPokemonList = document.querySelector(".pokemon-list");

  const pokemonArray = await pokemonApi.getPokemonData(10, offset + 10);
  const pokemonData = await pokemonArray.results;
  await Promise.all(
    pokemonData.map(async (pokemon) => {
      const pokemonUrl = pokemon.url;

      const newPokemon = await pokemonApi.getPokemonInfo(pokemonUrl);

      const newPokemonCard = new Card(
        newPokemonList,
        "pokemon",
        "li",
        newPokemon
      );
      return newPokemonCard;
    })
  );
  offset += 10;
});

loadPreviousPage.addEventListener("click", async () => {
  const clearData = mainDiv.querySelector(".pokemon-list");
  clearData.remove();
  const createNewPokemonList = new Component(mainDiv, "pokemon-list", "ul");
  const newPokemonList = document.querySelector(".pokemon-list");

  const pokemonArray = await pokemonApi.getPokemonData(10, offset - 10);
  const pokemonData = await pokemonArray.results;
  await Promise.all(
    pokemonData.map(async (pokemon) => {
      const pokemonUrl = pokemon.url;

      const newPokemon = await pokemonApi.getPokemonInfo(pokemonUrl);

      const newPokemonCard = new Card(
        newPokemonList,
        "pokemon",
        "li",
        newPokemon
      );
      return newPokemonCard;
    })
  );
  offset -= 10;
});

const pokedex = new Pokedex();
const testPokemon = {
  name: "santi",
  id: "figueras",
  skill: "marioneta",
};

pokedex.createPokemon(testPokemon);
pokedex.deletePokemon("figueras");
