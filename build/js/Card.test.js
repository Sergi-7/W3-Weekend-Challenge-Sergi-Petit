import Card from "./Component.js";

describe("Given a card class", () => {
  describe("When it receives a div container, a 'image' class and a 'img' tag", () => {
    test("Then it should render an img element with a 'image' class inside the div container", () => {
      // Arrange
      const container = document.createElement("div");
      const className = "image";
      const tag = "img";

      // Act
      const result = new Card(container, className, tag);
      const newImage = container.querySelector("img.image");

      // Assert
      expect(newImage).not.toBeNull();
    });
  });
});
