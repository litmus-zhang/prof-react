describe('Homepage', () =>
{
    it("Test : h1", () =>
    { 
        cy.visit('http://localhost:3000/');
        cy.get('h1').should('contain', 'Welcome to Next.js Prolog!');
    });
})