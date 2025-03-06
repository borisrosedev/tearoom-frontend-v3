/**
 * @jest-environment jsdom
 */

import buttonComponent from "./button.component"
import { getByText } from "@testing-library/dom"

describe('Button Component Test Suite', () => {

    test('should have a \'Valider\' text content', () => {
        const root = document.createElement('div')
        root.id = "root"
        document.body.appendChild(root)

        root.innerHTML += buttonComponent({
            id: "landing-button",
            textContent: "Valider"
        })

        expect(getByText(root, 'Valider')).toBeTruthy()

        

    })

})