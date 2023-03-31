describe('Home Page', () => {
    it('should display a list of courses', () => {
        // expect(true).to.equal(true);
        cy.fixture('courses.json').as("CoursesJSON");

        cy.server();
        cy.route('/api/courses','@CoursesJSON').as("courses");

        cy.visit('/');
        cy.contains("All Courses");

        cy.wait("@courses");
        cy.get("mat-card").should("have.length", 9);

    });
});

// e2e so real http request
// Here, we are mocking http response of those request

// response in fixture