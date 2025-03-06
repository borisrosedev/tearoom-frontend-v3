/**
 * @jest-environment jsdom
 */

import { getByText } from "@testing-library/dom";
import anchorComponent from "./anchor.component";

let root;
describe("Button Component Test Suite", function () {
  beforeAll(() => {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  });

  test("should have a 'Se connecter' text content", () => {
    root.innerHTML += anchorComponent({
      href: "#login",
      content: "Se connecter",
    });

    expect(getByText(root, "Se connecter")).toBeTruthy();
  });
});
