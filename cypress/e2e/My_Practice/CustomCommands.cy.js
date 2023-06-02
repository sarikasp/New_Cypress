/// <reference types="Cypress" />

describe('Custom Commands in Cypress', function () {

    it('Handling Links', function () {
        cy.visit('https://demo.nopcommerce.com/')

        // Direct - without using custom command
        // cy.get('.product-title > [href="/apple-macbook-pro-13-inch"]').click()

        // using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")

        cy.get('.product-name h1').should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it('overwriting existing commands', function () {
        cy.visit('https://demo.nopcommerce.com/')
        // using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get('.product-name h1').should('have.text', 'Apple MacBook Pro 13-inch')
    })


    it.skip('Login without custom commands', function () {
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
        cy.get('#Email').type('sarika.minskole@gmail.com')
        cy.get('#Password').type('nopCommerce')
        cy.get('.login-button').click()
        cy.get('.ico-account').should('have.text', 'My account')
    })

    it.only('Login custom commands', function () {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in');
        cy.login('sarika.minskole@gmail.com', 'nopCommerce')
        cy.get('.ico-account').should('have.text', 'My account')
    })

})