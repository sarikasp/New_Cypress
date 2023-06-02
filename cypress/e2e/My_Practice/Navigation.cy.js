/// <reference types="Cypress" />

describe('Navigation in Cypress', function () {

    it('Navigation Test', function () {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')  // Home Page
        cy.get('#narbar-menu > ul > li:nth-child(7) > a').click()
        cy.get('#content > h2').should('have.text', 'Cameras')

        cy.go('back')
        cy.title().should('eq', 'Your Store')  // Home Page

        cy.go('forward')
        cy.get('#content > h2').should('have.text', 'Cameras') // Camera Page

        cy.go(-1)
        cy.title().should('eq', 'Your Store')  // Home Page

        cy.go(1)
        cy.get('#content > h2').should('have.text', 'Cameras') // Camera Page

        cy.reload() // reload the page
    })
})