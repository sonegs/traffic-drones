describe('drone-list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/');
    });
    it('Check if the Localhost goes to pages/drone-list', () => {
        cy.url().should('include', '/pages/drone-list/drone-list.html');
        cy.url().should('eq', 'http://localhost:1234/pages/drone-list/drone-list.html');
    });
    it('Go to the Drone List URL if you try to go an another URI"', () => {
        cy.visit('http://localhost:1234/pages/drone-report/drone-report.html');
        cy.url().should('include', '/pages/drone-list/drone-list.html');
        cy.url().should('eq', 'http://localhost:1234/pages/drone-list/drone-list.html');
    });
    it('Check the target of the "See Report" buttons', () => {
        cy.get(':nth-child(1) > a > .btn').click();
        cy.url().should('include', '/pages/drone-report/drone-report.html?id=1');
        cy.url().should('eq', 'http://localhost:1234/pages/drone-report/drone-report.html?id=1');
    });
    it('Check the background color of the "See Report" buttons', () => {
        cy.get(':nth-child(1) > a > .btn').should('have.css', 'color', 'rgb(99, 8, 247)');
    });
});