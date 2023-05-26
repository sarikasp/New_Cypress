/// <reference types="Cypress" />

describe('Handle Hooks in cypress', () => {

    // execute only once
    // before, after

    // execute multiple times
    // afterEach, beforeEach


    before(()=>{
        cy.log(' ********** Launch Application **********')
    })

    after(()=>{
        cy.log(' ********** Close Application **********')
    })

    beforeEach(()=>{
        cy.log(' ********** Login Application **********')
    })

    afterEach(()=>{
        cy.log(' ********** Logout Application **********')
    })


    it('Search', () => {
        cy.log(' ********** Searching **********')
    })

    it.skip('Advanced Search', () => {
        cy.log(' ********** Advanced Searching **********')
    })


    it('Listing Products', () => {
        cy.log(' ********** Listing Products **********')
    })

    
})