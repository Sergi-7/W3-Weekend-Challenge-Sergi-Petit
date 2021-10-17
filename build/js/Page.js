import Component from "./Component.js";
import Card from "./Card.js";
import PokemonService from "./PokemonService.js";

class Page extends Component {
  parentElement;

  constructor(parentElement, className, htmlTag) {
    super(parentElement, className, htmlTag);
    this.htmlTag = htmlTag;
    parentElement.appendChild(this.element);
  }
}

export default Page;
