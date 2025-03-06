/**
 * @jest-environment jsdom
 */

import fieldComponent from "./field.component";
import { screen } from "@testing-library/dom";
let root;
describe("Field Test Suite", () => {
  beforeAll(() => {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
    root.innerHTML += fieldComponent({
      id: "email",
      type: "email",
      class: "is-primary",
      placeholder: "Entrer votre email",
    });
  });

  test("should have a placeholder: Entrer votre email", () => {
    expect(screen.getByPlaceholderText("Entrer votre email")).toBeTruthy();
  });
});
