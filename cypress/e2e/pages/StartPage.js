export default class StartPage {
  // Locators
  signInLink = () => cy.get('[data-testid="header-small-sign-in-button"]');
  signUpLink = () => cy.get('[data-testid="header-small-sign-in-button"]');
  welcomeText = () => cy.get('[data-testid="herobanner-title1"]');
  destinationSearchField = () => cy.get('[data-destination]');
  datePickerField = () => cy.get('[data-testid="date-display-field-start"]');
  searchButton = () => cy.get(':nth-child(4) > .fc63351294 > .e57ffa4eb5');
  notificationErrorMessage = () => cy.get('.b661b52535');

  // Actions and Asserts
  clickOnSignInLink() {
    this.signInLink().should('exist').click();
  }
  clickOnSignUpLink() {
    this.signUpLink().should('exist').click();
  }
  closeWelcomeBanner() {
    this.welcomeText().should('exist').click({ force: true });
  }
  typeDestination(text) {
    this.destinationSearchField().should('exist').type(text);
  }
  clickSearchButton() {
    this.searchButton().should('exist').click({ force: true });
  }
  openDatePicker() {
    this.datePickerField().should('exist').click({ force: true });
  }
  selectDatePickerDay(text) {
    cy.get(`[data-date=${text}]`).should('exist').click({ force: true });
  }
  notificationErrorMessageContainsText(text) {
    this.notificationErrorMessage().should('have.text', text);
  }
}
