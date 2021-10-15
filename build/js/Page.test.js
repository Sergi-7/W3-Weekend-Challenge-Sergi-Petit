import Page from "./Page.js";

describe("Given a component class", () => {
  describe("When it receives a div container, a 'text' class and a 'span' tag", () => {
    test("Then it should render a span element with a 'text' class inside the div container", () => {
      // Arrange
      const container = document.createElement("div");
      const className = "text";
      const tag = "span";

      // Act
      const result = new Page(container, className, tag);
      const newSpan = container.querySelector("span.text");

      // Assert
      expect(newSpan).not.toBeNull();
    });
  });
});
