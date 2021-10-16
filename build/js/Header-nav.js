import Component from "./Component.js";

class Header extends Component {
  parentElement;
  constructor(parentElement, className, htmlTag, title, link1) {
    super(parentElement, className, htmlTag);
    this.parentElement = parentElement;
    this.className = className;
    this.htmlTag = "nav";
    this.title = title;
    this.link1 = link1;
    this.generateHtml();
  }
  generateHtml() {
    const html = `<h1>${this.title}</h1>
                <a href="">${this.link1}</a>
                `;
    this.element.innerHTML = html;
  }
}

export default Header;
