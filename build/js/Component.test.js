import Component from "./Component.js";

describe("Given a Component class", () => {
  describe("when it receives a div container, a test class y a span tag", () => {
    test("Then it should render a span element with a test class inside the div container", () => {
      const container = document.createElement("div");
      const p = new Component(container, "text", "span");
      const span = document.querySelector(".text");
      expect(span).not.toBeNull();
    });
  });
});
