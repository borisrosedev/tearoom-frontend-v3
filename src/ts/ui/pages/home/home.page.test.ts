/**
 * @jest-environment jsdom
 */

import homePage from "../home/home.page"
import { screen } from "@testing-library/dom"

let root;
describe('Home Page Integration Test Suite', () => {
    beforeAll(() => {
        root = document.createElement('root')
        root.id = "root"
        root.innerHTML += homePage()
        document.body.appendChild(root)
  
    })


    test('should have the Logo Figure in', function() {
        expect(screen.getByAltText("Image de l'intérieur du salon de thé de TeaRoom")).toBeTruthy()
    })
})