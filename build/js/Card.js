import Component from "./Component.js";

class Card extends Component {
  constructor(parentElement, className, htmlTag = "ul") {
    super(parentElement, className, htmlTag);
    this.generateHtml();
  }

  generateHtml() {
    const newLi = this.element.createElement("li");
    newLi.innerHtml = `
      <h2></h2>
      <p></p>
      <img src="" alt="">`;
  }
}

export default Card;
