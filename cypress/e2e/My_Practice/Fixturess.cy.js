/// <reference types="Cypress" />

describe('Fixtures Test Data', function () {


    // Direct access
    it('verify functionality for external test data', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangehrm').then((data) => {
            cy.log(data)
            cy.get('[name="username"]').type(data.username)
            cy.get('[name="password"]').type(data.password)
            cy.get('[type="submit"]').click()
            cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', data.expected)
        })
    })

    // Access through hooks - for multiple it blocks
    let userData
    beforeEach(() => {
        cy.fixture('orangehrm').then((data) => {
            userData = data
        })
    })

    it('verify functionality for external test data', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(userData.username)
        cy.get('[name="password"]').type(userData.password)
        cy.get('[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', userData.expected)
    })

})