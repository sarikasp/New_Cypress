/// <reference types="Cypress" />

describe('Fixtures Test Data', function () {


    // let userData
    // beforeEach(() => {

    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //     cy.fixture('orangehrm2').then((data) => {
    //         data.forEach(userData => {
    //             cy.get('[name="username"]').type(userData.username)
    //             cy.get('[name="password"]').type(userData.password)
    //             cy.get('[type="submit"]').click()
    //         });
    //     })
    // })

    it('verify functionality for external test data', function () {


        cy.fixture('orangehrm2').then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(5000)
            data.forEach((userData) => {
                cy.get('[name="username"]').type(userData.username)
                cy.get('[name="password"]').type(userData.password)
                cy.get('[type="submit"]').click()

                if (userData.username == 'Admin' && userData.password == 'admin123') {
                    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', userData.expected) // validate Dashboard
                    cy.get('.oxd-userdropdown-tab').click() // click on profile icon
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click on logout button
                }
                else {
                    cy.get('.oxd-alert-content-text').should('have.text', userData.expected) // validate error msg
                }


            });
        })


    })

})