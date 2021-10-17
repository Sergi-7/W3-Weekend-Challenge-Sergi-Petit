import Component from "./js/Component.js";
import Card from "./js/Card.js";
import Page from "./js/Page.js";
import Header from "./js/Header-nav.js";

const createMainDiv = new Component(document.body, "main-div", "div");
const mainDiv = document.querySelector(".main-div");

const createHeader = new Header(
  mainDiv,
  "main-header",
  "nav",
  "Pokemon Details",
  "Back to Pokemons"
);

const anchorHref = document.querySelector("a").href;
console.log(anchorHref);
