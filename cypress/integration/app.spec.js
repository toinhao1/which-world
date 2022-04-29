describe('Navigation', () => {
	it('should navigate to the country-details page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[href*="Afghanistan"]').click();

		// The new url should include "/about"
		cy.url().should('include', '/country-details');

		// The new page should contain an h1 with "About page"
		cy.get('div').contains('Border Countries');
	});
});
