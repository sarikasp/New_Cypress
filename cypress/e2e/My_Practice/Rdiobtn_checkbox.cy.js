/// <reference types="Cypress" />

describe('Radio buttns & check boxses in cypress', () => {

    it('Checking Radio buttons', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#female').should('be.visible')
        cy.get('#female').should('exist')

        cy.get('#male').should('be.visible')
        cy.get('#other').should('be.visible')

        // Selecting the radio button
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
        cy.get('#other').should('not.be.checked')


        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
        cy.get('#other').should('not.be.checked')
    })

    it('Checking Check Boxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#tuesday').should('be.visible')
        cy.get('#monday').should('exist')
        cy.get('#wednesday').should('be.visible')
        cy.get('#thursday').should('be.visible')
        cy.get('#friday').should('be.visible')
        cy.get('#saturday').should('be.visible')
        cy.get('#sunday').should('be.visible')


        // Selecting the signle checkbox
        cy.get('#monday').check().should('be.checked')

        // unselecting checkbox
        cy.get('#monday').uncheck().should('not.be.checked')

        // Selecting all check boxes
        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
       
        cy.get('#monday').should('be.checked')
        cy.get('#tuesday').should('be.checked')
        cy.get('#wednesday').should('be.checked')
        cy.get('#thursday').should('be.checked')
        cy.get('#friday').should('be.checked')
        cy.get('#saturday').should('be.checked')
        cy.get('#sunday').should('be.checked')


         // Unselecting all check boxes
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
        cy.get('#monday').should('not.be.checked')
        cy.get('#tuesday').should('not.be.checked')
        cy.get('#wednesday').should('not.be.checked')
        cy.get('#thursday').should('not.be.checked')
        cy.get('#friday').should('not.be.checked')
        cy.get('#saturday').should('not.be.checked')
        cy.get('#sunday').should('not.be.checked')

    })


    it.only('Checking selective Check Boxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    
        // Selecting the first checkbox
        // cy.get('#monday').check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')

        // Selecting the last checkbox
        // cy.get('#sunday').check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

    })

})