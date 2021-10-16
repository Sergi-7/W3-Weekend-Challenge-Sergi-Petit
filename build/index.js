import Component from "./js/Component.js";
import Page from "./js/Page.js";
import Card from "./js/Card.js";
import PokemonService from "./PokemonService.js";

const mainDiv = new Component(document.body, "main-div", "div");
const bigDiv = document.querySelector(".main-div");

const test = new Page(bigDiv, "header-nav", "nav");
const newCard = new Card(bigDiv, "pokemon-list");

const testElement = document.querySelector(".test");

const pokemonApi = new PokemonService();

const getPokemonArray = (async () => {
  const pokemonArray = await pokemonApi.getPokemonData();
  const pokemonData = await pokemonArray.results;
  console.log(pokemonData);
  return pokemonData;
})();

console.log(getPokemonArray[0]);
