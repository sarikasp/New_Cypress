/// <reference types="Cypress" />

describe('Handle Child tabs in cypress', () => {


    // Way-1
    it('Child tab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'new')
        cy.get('.example> h3').should('have.text', 'New Window')
        cy.url().should('include', 'new')

        cy.go('back') // back to parent tab
        // cy.wait(3000)
        // cy.go('forward')
        cy.get('.example> h3').should('have.text', 'Opening a new window')
    })

       // Way-2
       it.only('Child tab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((el) =>{
           let newUrl = el.prop('href') // prop return property of the element 
           // cy.log(newUrl)
           cy.visit(newUrl)

           cy.get('.example> h3').should('have.text', 'New Window')
           cy.url().should('include', 'new')
           cy.go('back') // back to parent tab
           cy.get('.example> h3').should('have.text', 'Opening a new window')
        })
    })
})