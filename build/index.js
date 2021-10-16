import Component from "./js/Component.js";
import Page from "./js/Page.js";
import Card from "./js/Card.js";

const mainDiv = new Component(document.body, "main-div", "div");
const bigDiv = document.querySelector(".main-div");
const test = new Page(bigDiv, "header-nav", "nav");
const testElement = document.querySelector(".test");
const newCard = new Card(bigDiv, "pokemon-list");
