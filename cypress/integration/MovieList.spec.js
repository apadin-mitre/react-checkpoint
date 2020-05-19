/* MovieList*/
describe("Hit the URL", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("should have App url", () => {
       cy.get('div > nav > a.navbar-brand').contains("GMDB").should('be.visible') 
    })

    
})