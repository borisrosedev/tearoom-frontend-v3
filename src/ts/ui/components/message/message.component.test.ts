/**
 * @jest-environment jsdom
 */


import { getByText } from "@testing-library/dom"
import messageComponent from "./message.component"

describe('Button Component Test Suite', () => {

    test('should have a \'Ceci est un test\' text content', () => {
        const root = document.createElement('div')
        root.id = "root"
        document.body.appendChild(root)

        root.innerHTML += messageComponent({
            id: "message-test",
            header: "Test",
            body: "Ceci est un test",
            classNames: "is-info"
        })

        expect(getByText(root, 'Ceci est un test')).toBeTruthy()

        

    })

})