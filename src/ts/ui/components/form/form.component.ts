import fieldComponent from "../field/field.component";
import FieldInterface from "../../../interfaces/Field.interface";
import ButtonInterface from "../../../interfaces/Button.interface";
import buttonComponent from "../button/button.component";

function formComponent({ id, fields, btns }) {
  return `
            <form id="${id}" class="form-component">
                <section class="form-component__fields">
                    ${fields.map((el: FieldInterface) => fieldComponent(el)).join("")}
                </section>
                <section class="form-component__buttons">
                    ${btns.map((el: ButtonInterface) => buttonComponent(el)).join("")}
                </section>
            </form>
        `;
}

export default formComponent;
