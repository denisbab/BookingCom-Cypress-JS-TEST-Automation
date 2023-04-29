export default class RegisterPage {
  // Locators
  emailAdressLink = () => cy.get('#username');
  continueWithEmailButton = () => cy.get('[type="submit"]');
  pageDescriptionText = () => cy.get('.bui_font_display_one');
  newPasswordTextfield = () => cy.get('#new_password');
  confirmedPasswordTextfield = () => cy.get('#confirmed_password');
  createAccountButton = () => cy.get('[type="submit"]');
  newPasswordNoteText = () => cy.get('#new_password-note');
  createAccountButton = () => cy.get('[type="submit"]');
  confirmedPasswordNoteText = () => cy.get('#confirmed_password-note');

  // Actions and Asserts
  clickOnContinueWithEmailButton() {
    this.continueWithEmailButton().should('exist').click();
  }
  clickOnCreateAccountButton() {
    this.createAccountButton().should('exist').click();
  }
  pageContainsDescriptionText(text) {
    this.pageDescriptionText().should('have.text', text);
  }
  typeEmailAddress(text) {
    this.emailAdressLink().should('exist').type(text);
  }
  typeNewPassword(text) {
    this.newPasswordTextfield().should('exist').type(text);
  }
  typeConfirmedPassword(text) {
    this.confirmedPasswordTextfield().should('exist').type(text);
  }
  newPasswordNoteText(text) {
    this.newPasswordNoteText().should('have.text', text);
  }
  clickOnCreateAccountButton() {
    this.createAccountButton().click({ force: true });
  }
  confirmedPasswordNoteText(text) {
    this.confirmedPasswordNoteText().should('have.text', text);
  }
}
