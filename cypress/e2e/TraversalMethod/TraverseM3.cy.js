describe('Travesal method', function () {

    //1. children()
    it('To get children of DOM elements, use the .children() command', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
        cy.get('.traversal-drinks-list').children().each(function (el) {
            cy.log(el.text())
        })
        cy.contains('Fruits').should('be.visible')
    })


    //2. next()
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').next().should('have.text', 'Apple')
        cy.get('#fruits').next().should('have.contain', 'Apple')
        cy.contains('Fruits').should('have.contain', 'Fru')
    })


    //3. prev()
    it('To get the previous sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
        cy.get('#veggie').prev().then(function (el) {
            expect(el.text()).to.equal('Figs')
        })
        cy.get('#veggie').prev().invoke('text').then((text) => {
            expect(text).to.eql('Figs')
        })
    })


    //4. nextAll()
    it('To get the previous sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)
        cy.get('#fruits').nextAll().each(function (el) {
            if (el.text() == 'Blackberries') {
                cy.wrap(el).should('be.visible')
                cy.wrap(el).should('be.exist')
            }
        })
    })


    //5. first()
    it.only('To get the previous sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.id', 'coffee')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list').children().first().should('have.attr', 'id', 'coffee')
    })


    //1. children()
    //2. next()
    //3. nextAll()
    //4. prev()
    //5. first()


    //6. last()
    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text', 'Lentils')
        cy.get('.traversal-food-list').children().last().should('have.contain', 'Len')
    })

    //7. eq()
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(0).should('have.text', 'Fruits')
        cy.get('.traversal-food-list').children().eq(3).should('have.text', 'Blackberries')
        cy.contains('Fru').should('be.visible')
    })

    //8. sibling()
    it('To get a DOM element at a specific index, use the .sibling() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //cy.get('button[class="btn btn-primary active"]').siblings().should('have.length',3)

        //problem 1
        cy.get('.disabled').siblings().eq(2).should('have.text', 'Alert')

        cy.get('.disabled').siblings().each((el, idx) => {
            if (idx == 2) {
                cy.log(el.text())
            }
        }).then(function (el) {
            expect(el.text()).to.contain('Alert')
        })
    })

    //9.prevAll()

    it.only('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('.disabled').prevAll().should('have.length', 1)
        // cy.get('.disabled').prevAll().should('have.class', 'btn-outline-danger')

        // cy.get('.disabled').prevAll()
        //     .should('have.length', 1)
        //     .and('have.class', 'btn-outline-danger')

        //Problem 1
        cy.get('#veggie').prevAll().should('have.length', 6)

        //find the text of element which having list-header
        cy.get('#veggie').prevAll().each(function (el) {
            if (el.hasClass('list-header')) {
                cy.log(el.text())
            }
        })

        //check whether Banana is present or not
        let eleFound = false//flag

        cy.get('#veggie').prevAll().each(function (el) {
            if (el.text() === 'Banana') {
                cy.wrap(el.text()).should('have.contain', 'Banana')
            }
        })
    })
})

