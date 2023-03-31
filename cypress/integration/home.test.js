describe('Home Page', () => {
    it('should display a list of courses', () => {
        // expect(true).to.equal(true);
        // expect(true).to.equal(false);

        cy.visit('/');
        cy.contains("All Courses");
    });
});


// npm install cypress --dev
// run only frontend - currently
// set baseUrl