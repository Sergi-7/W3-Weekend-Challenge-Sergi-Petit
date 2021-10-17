import Component from "./Component.js";

class PageNav extends Component {
  parentElement;
  constructor(parentElement, className, htmlTag, link1, link2) {
    super(parentElement, className, htmlTag);
    this.parentElement = parentElement;
    this.className = className;
    this.htmlTag = htmlTag;
    this.link1 = link1;
    this.link2 = link2;
    this.generateHtml();
  }
  generateHtml() {
    const html = `<a class="page-nav__back">${this.link1}</a>
                <a class="page-nav__next">${this.link2}</a>
                `;
    this.element.innerHTML = html;
  }
}

export default PageNav;
