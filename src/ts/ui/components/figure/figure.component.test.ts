/**
 * @jest-environment jsdom
 */

import { getByAltText, getByText } from "@testing-library/dom";
import figureComponent from "./figure.component";

describe("Button Component Test Suite", () => {
  test("should have a 'Image de test' text content", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    root.innerHTML += figureComponent({
      id: "message-test",
      alt: "Image de test",
      src: "",
    });

    expect(getByAltText(root, "Image de test")).toBeTruthy();
  });
});
