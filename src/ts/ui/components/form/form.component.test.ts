import fieldComponent from "../field/field.component"
import FieldInterface from "../../../interfaces/Field.interface"
import ButtonInterface from "../../../interfaces/Button.interface"

function formComponent ({ id, fields, btns }) {
    return(
        `
            <form id="${id}">
                <section class="form__fields">
                    ${fields.map((el:FieldInterface) => fieldComponent(el)).join("")}
                </section>
                <section class="form__buttons">
                    ${btns.map((el:ButtonInterface) => fieldComponent(el)).join("")}
                </section>
            </form>
        `
    )
}

export default formComponent