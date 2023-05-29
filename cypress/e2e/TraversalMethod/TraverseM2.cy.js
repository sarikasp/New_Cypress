/// <reference types="Cypress" />

describe('traversal method in cypress', () => {

    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })

    
    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-outline-warning').parent().should('have.class','traversal-button-states')
    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length',2)
    })

    it.only('To get the closest ancestor DOM element, use the .closest() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').closest('div').should('have.class','thumbnail')
    })

    
})