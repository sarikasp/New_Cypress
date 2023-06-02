/// <reference types="Cypress" />

describe('Capture Screenshots and Video in Cypress', function () {

    it('Capturing Screenshots', function () {
        cy.visit('https://demo.opencart.com/')
        cy.screenshot("homepage")
        cy.wait(5000)
        cy.get('img[title="Your Store"]').screenshot('logo')

        // Automatically capture Screenshots & Videos on Failure - only when execute through CLI

    })


    it.only('Capturing Screenshots', function () {
        cy.visit('https://demo.opencart.com/')

        // Automatically capture Screenshots & Videos on Failure - only when execute through CLI
        cy.get('#narbar-menu > ul > li:nth-child(7) > a').click()
        cy.get('#content > h2').should('have.text', 'Tablets')
    })
})