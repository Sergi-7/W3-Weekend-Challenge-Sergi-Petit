import Component from "./js/Component.js";
import Page from "./js/Page.js";

const mainDiv = new Component(document.body, "main-div", "div");
const bigDiv = document.querySelector(".main-div");
const test = new Page(bigDiv, "test", "span");
