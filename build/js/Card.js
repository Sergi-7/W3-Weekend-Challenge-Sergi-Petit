import Component from "./Component.js";

class Card extends Component {
  constructor(parentElement, className, htmlTag = "ul") {
    super(parentElement, className, htmlTag);
    this.generateHtml();
  }

  generateHtml() {
    const html = `
      <li>
      <h2></h2>
      <p></p>
      <img src="" alt="">
    </li>`;
    this.element.innerHTML = html;
  }
}

export default Card;
