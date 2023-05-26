/// <reference types="Cypress" />

describe('Handle Drop-Downs in cypress', () => {

    it('Drop-down with select- Static Dropdown', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        // cy.get('#zcf_address_country').select('India').should('have.value', 'India')
        cy.get('.globalcountrycode').select('India').should('have.value', 'India')
    })

    it('Drop-down without select- Static Dropdown', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        // cy.get('#zcf_address_country').select('India').should('have.value', 'India')
        // cy.get('.globalcountrycode').select('India').should('have.value', 'India')

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')

        // cy.get('#select2-billing_country-container').click()
        // cy.get('.select2-search__field').type('India')
        // cy.get('[role="option"]').last().click()
        // cy.get('#select2-billing_country-container').should('have.text', 'India')

        // cy.get('#select2-billing_country-container').click()
        // cy.get('.select2-search__field').type('India')
        // cy.get('[role="option"]').contains('India').click()
    })

    it('Auto Suggested Dropdown', () => {
        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
        cy.get('.mw-page-title-main').should('have.text', 'Delhi University')
    })


    it.only('Dynamic Dropdown', () => {
        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type('Cypress Automation')

        cy.get('.wM6W7d>span').should('have.length', 12)
        cy.get('.wM6W7d>span').each((el, i, arr) => {
            cy.log(el.text())
            if (el.text() === 'cypress automation tutorial') {
                cy.wrap(el).click()
            }
        })
        cy.get('[title="Search"]').should('have.value', 'cypress automation tutorial')

    })

})

