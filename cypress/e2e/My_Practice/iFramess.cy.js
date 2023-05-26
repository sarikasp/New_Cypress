/// <reference types="Cypress" />

describe('Handle iFrames in cypress', () => {


    // Way-1
    it('iFrame 1st example', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        let frame = cy.get('#mce_0_ifr').its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        cy.log(frame)
        frame.clear().type("Welcome - Sarika..!! {ctrl+a}")
        cy.get('[title="Bold"]').click()

    })


    
    // Way-2
    it('iFrame 2nd example', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        let frame = cy.getiFrame('#mce_0_ifr')
        frame.clear().type("Welcome - Sarika..!! {ctrl+a}")
        cy.get('[title="Bold"]').click()

    })


     // Way-3
     it('iFrame 3rd example with iframe plugins', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')   // load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome - Sarika..!! {ctrl+a}")
        cy.get('[title="Bold"]').click()

    })


})