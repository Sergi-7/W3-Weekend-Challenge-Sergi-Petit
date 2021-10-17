import Header from "./Header-nav.js";

describe("Given a Header class", () => {
  describe("when it receives a div container, a test class y a span tag", () => {
    test("Then it should render a span element with a test class inside the div container", () => {
      const container = document.createElement("div");
      const className = "text";
      const tag = "span";

      const result = new Header(container, className, tag);
      const span = container.querySelector("span.text");
      expect(span).not.toBeNull();
    });
  });
});
