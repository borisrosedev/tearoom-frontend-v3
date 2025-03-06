/**
 * @jest-environment jsdom
 */

import formComponent from "./form.component";
import { screen } from "@testing-library/dom";

let root;
describe("Form Integration Test Suite", function () {
  beforeAll(() => {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
    root.innerHTML += formComponent({
      id: "login-form",
      fields: [
        {
          id: "email",
          type: "email",
          placeholder: "Entrer votre email",
        },
        {
          id: "password",
          type: "password",
          placeholder: "Entrer votre mot de passe",
        },
      ],
      btns: [
        {
          id: "submit-button",
          type: "submit",
          placeholder: "Valider",
          classNames: "is-primary",
        },
        {
          id: "reset-button",
          type: "reset",
          placeholder: "Réinitialiser",
          classNames: "is-danger",
        },
      ],
    });
  });

  test("should have a placeholder: Entrer votre email", () => {
    expect(screen.getByPlaceholderText("Entrer votre email")).toBeTruthy();
  });

  test("should have a placeholder: Entrer votre mot de passe", () => {
    expect(
      screen.getByPlaceholderText("Entrer votre mot de passe"),
    ).toBeTruthy();
  });
});
