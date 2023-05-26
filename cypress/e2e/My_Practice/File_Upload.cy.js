/// <reference types="Cypress" />

describe('Handle File Upload in cypress', () => {

    let pic = 'wallpaper.jpg'
    let pic2 = 'Wallpaper2.jpg'
    // Way-1
    it('Single File Upload in Cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(pic)
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    // Way-2
    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: pic, filename: 'myfile.jpg' })
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    // Way-3
    it('Drag & Drop File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile(pic, { subjectType: "drag-n-drop" });
        cy.get('.dz-filename> span').should('have.text', 'wallpaper.jpg')
        cy.get('.dz-filename> span').contains('wallpaper.jpg')
    })


    // Way-4
    it('Upload Multiples File', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([pic, pic2]);
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
        cy.get('#fileList> li').first().should('have.text', 'wallpaper.jpg')
        cy.get('#fileList> li').last().should('have.text', 'Wallpaper2.jpg')
    })

    // Way-5
    it('File Upload - Shadow DOM', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom: true}).attachFile(pic);
        cy.get('.smart-item-name',{includeShadowDom: true}).should('have.text', 'wallpaper.jpg')
        cy.get('.smart-item-name',{includeShadowDom: true}).contains('wallpaper.jpg')
    })


})