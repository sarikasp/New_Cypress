/// <reference types="Cypress" />

describe('Handle Alerts in cypress', () => {

    // 1. Javascript Alert: It will have some text & an 'OK' button

    it('Javascript Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })

        // cypress automatiocally closed alert window by using ok button-default      
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    // 2. Javascript Confirm Alert: It will have some text with an 'OK' & 'Cancel' buttons

    it('Javascript Confirm Alert - OK button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', (tt) => {
            expect(tt).to.contains('I am a JS Confirm')
        })

        // cypress automatiocally closed alert window by using ok button-default                                                                          
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })


    it('Javascript Confirm Alert - Cancel button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()

        // cypress closes alert window using cancel button
        cy.on('window:confirm', () => false)

        // cypress automatiocally closed alert window by using ok button-default                                                                          
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    // 3. Javascript Prompt Alert: It will have some text with text box for user input along with  'OK' button


    it('Javascript Prompt Alert - OK button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')


        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get('[onclick="jsPrompt()"]').click()

        // cypress automatiocally closed alert window by using ok button-default    
        cy.on('window:prompt', () => false)
        cy.get('#result').should('have.text', 'You entered: welcome')
    })


    it.only('Javascript Confirm Alert - Cancel button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsPrompt()"]').click()

        // cypress closes alert window using cancel button
        cy.on('window:prompt', () => false) 

        // cypress automatiocally closed alert window by using ok button-default                                                                          
        cy.get('#result').should('have.text', 'You entered: null')
    })



    // 4. Authenticated Alert


    // Way 1
    it('Authenticated Alert - OK button', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: { username: "admin", password: "admin" } })
        cy.get('.example> p').should('have.contain', 'Congratulations! You must have the proper credentials')
    })

    // Way 2
    it('Authenticated Alert - OK button', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('.example> p').should('have.contain', 'Congratulations! You must have the proper credentials')
    })

})