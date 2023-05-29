/// <reference types="Cypress" />

describe('verify the functionality of checkbox,radioButton,select Drop Down', function () {

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify functionality for radio button', function () {
        cy.get('#radio-buttons').children().filter('input')
            .should('have.length', 5).then((el) => {
                cy.wrap(el).check().should('be.checked')
            })
    })

    it('verify functionality for checkbox', function () {
        //checkbox-1 ---- tick  ----- click ()
        //checkbox-1 -----tick  ----- check()
        //checkbox-1 -----tick  ----- uncheck()

        // // with check and uncheck method
        // cy.get('[value="option-3"]').should('be.checked')
        // cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        // cy.get('[value="option-2"]').check().should('be.checked')
        // cy.get('[value="option-1"]').check().should('be.checked')
        // cy.get('[value="option-4"]').check().should('be.checked')


        // // with click method
        // cy.get('[value="option-3"]').should('be.checked')
        // cy.get('[value="option-3"]').click().should('not.be.checked')
        // cy.get('[value="option-3"]').click().should('be.checked')

        // // check multiple at a time
        // cy.get('[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')


        // cy.get('[type="checkbox"]').then((el) => {
        //     cy.wrap(el).check().should('be.checked')
        //     cy.wrap(el).uncheck().should('not.be.checked')
        // })

        // cy.get('[type="checkbox"]').then((el,i) => {
        //     if(i != 2)
        //     cy.wrap(el).check().should('be.checked')
        //     cy.wrap(el).uncheck().should('not.be.checked')
        // })

        // cy.get('input[type="checkbox"]').each((el, i) => {
        //     if(i != 2){
        //         cy.wrap(el).click().should('be.checked')
        //         cy.wrap(el).click().should('not.be.checked')
        //     }
        // })

    })


    // selected , enabled , disabled , visible , exist
    it('enabled disabled selected exist visible', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get("input[value='lettuce']").should('be.enabled')
        cy.get("input[value='pumpkin']").should('be.checked')
        cy.get('#fruit-selects').should('exist')
    })

    it.only('verify the select drop down in cypress', function () {
        // cy.get('#dropdowm-menu-1').select('python')
        // cy.get('#dropdowm-menu-1').select('java')

        let lng = ['python', 'testng', 'javascript']
        cy.get('.section-title').first().children().each((el, i) => {
                cy.wrap(el).select(lng[i]).should('have.value', lng[i])

        })
    })

    
    it.only('verify the select drop down in cypress', function () {
        cy.url().should('contain','Dropdown-Checkboxes-RadioButton')
      })



})
