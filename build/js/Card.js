import Component from "./Component.js";
import PokemonService from "./PokemonService.js";

class Card extends Component {
  pokemon;

  constructor(parentElement, className, htmlTag = "li", pokemon) {
    super(parentElement, className, htmlTag);
    this.pokemon = pokemon;
    this.generateHtml();
  }

  generateHtml() {
    const html = `
      <a href="./pokemon-details.html">
      <h2>${this.pokemon.id}</h2>
      <p>${this.pokemon.name}</p>
      <img src="${this.pokemon.sprites.other.dream_world.front_default}" alt="">
    </a>`;
    this.element.innerHTML = html;
  }
}

export default Card;
