/// <reference types="Cypress" />

describe('hooks in cypress', function () {

    before(() => {
        cy.log('I will run first')
    })

    beforeEach(() => {
        cy.log('I will run before every test cases')
    })

    it('Testcase one', function () {
        cy.log('Testcase one')
    })
    it('Testcase two', function () {
        cy.log('Testcase two')
    })

    afterEach(() => {
        cy.log('I will run after every test cases')
    })

    after(() => {
        cy.log('I will run last')
    })


})