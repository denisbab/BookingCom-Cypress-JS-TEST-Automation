export default class SearchResultsPage {
  // Locators
  destinationSearchField = () => cy.get('[data-destination]');
  pageHeaderTitleText = () => cy.get('.e1f827110f');

  // Actions and Asserts

  destinationSearchFilterContains(text) {
    this.destinationSearchField().should('have.text', text);
  }
  pageHeaderContains(text) {
    this.pageHeaderTitleText().should('contain.text', text);
  }
}
