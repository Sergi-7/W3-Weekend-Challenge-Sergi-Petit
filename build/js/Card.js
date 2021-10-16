import Component from "./Component.js";
import PokemonService from "./PokemonService.js";

class Card extends Component {
  pokemon = {};
  name;
  image;
  number;

  constructor(parentElement, className, htmlTag = "ul") {
    super(parentElement, className, htmlTag);
    this.generateHtml();
  }

  async getPokemonData() {
    const pokemonList = new PokemonService();
    const getPokemonList = await pokemonList.getPokemonData();
    this.pokemon = getPokemonList;
    this.name = getPokemonList.name;
    this.number = getPokemonList.order;
    this.image = getPokemonList.sprites.other.dream_world.front_default;
    this.generateHtml();
  }

  generateHtml() {
    const html = `
      <li>
      <h2>${this.number}</h2>
      <p>${this.name}</p>
      <img src="${this.image}" alt="">
    </li>`;
    this.element.innerHTML = html;
  }
}

export default Card;
