/// <reference types="Cypress" />

describe('traversal method in cypress', () => {

    it('To get children of DOM elements, use the .children() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
        cy.get('.traversal-food-list').children().first().should('have.class', 'list-header')
        cy.get('.traversal-food-list').children().last().should('have.text', 'Lentils')
    })


    it('To get the next sibling DOM element within elements, use the .next() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
        cy.get('#coffee').next().should('have.text', 'Tea')

        cy.get('#coffee').next().then((el) => {
            expect(el.text()).to.eq('Tea')
        })

        cy.get('#veggie').next().invoke('text').then((txt) => {
            expect(txt).to.eq('Asparagus')
        })

    })

    it('To get the previous sibling DOM element within elements, use the .prev() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
        cy.get('#tea').prev().should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list').prev().should('have.text', 'Lists')
    })

    it('To get the first DOM element within elements, use the .first() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.class', 'list-header')
        cy.get('.traversal-food-list').children().first().should('have.text', 'Fruits')
            .and('have.attr', 'id', 'fruits').and('have.id', 'fruits').and('have.class', 'list-header')
    })

    it('To get the last DOM element within elements, use the .last() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text', 'Lentils')
    })

    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(1).should('have.text', 'Apple')
        cy.get('.traversal-food-list').children().eq(2).should('have.text', 'Banana')
        cy.get('.traversal-food-list').children().eq(5).should('have.text', 'Figs')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.disabled').siblings().should('have.length', 3)
        cy.get('.disabled').siblings().each(function (el) {
            cy.log(el.text())
        })
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().as('aboveElement')
        cy.get('@aboveElement').should('have.length', 6)

        cy.get('#sugar').prevAll().as('fst')
        cy.get('@fst').should('have.length', 4)


        let eleFound = false
        cy.get('@aboveElement').each((el) => {
            if (el.text() === 'Banana') {
                eleFound = true
            }
        }).then(function () {
            expect(eleFound).to.eq(true)
        })

        let eleFound2 = false
        cy.get('@fst').each((el) => {
            cy.log(el.text())
            if (el.text() === 'Tea') {
                eleFound2 = true
            }
        }).then(function () {
            expect(eleFound2).to.eq(true)
        })

        let fruits = []
        cy.get('@aboveElement').each((el) => {
            fruits.push(el.text())          
        }).then(function () {
            expect(fruits.includes('Banana')).to.eq(true)
        })

        cy.get('@aboveElement').contains('Banana').should('exist')

    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextUntil('#veggie').should('have.length',4)
        
        cy.get('#veggie').nextUntil().as('belowElement')
        let veggie = []
        cy.get('@belowElement').each((el) => {
            veggie.push(el.text())   
            cy.log(el.text())       
        }).then(function () {
            expect(veggie.includes('Broccoli')).to.eq(true)
        })
    })


    it('To get all of the previous sibling DOM elements within elements until another element, use the .prevUntil() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').prevUntil('.traversal-drinks-list').should('have.length',1)
        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
    })

})