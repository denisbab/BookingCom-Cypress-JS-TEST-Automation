export default class SignInPage {
  // Locators
  emailAdressLink = () => cy.get('#username');
  continueWithEmailButton = () => cy.get('[type="submit"]');
  pageDescriptionText = () => cy.get('.bui_font_display_one');
  passwordTextfield = () => cy.get('#password');
  createAccountButton = () => cy.get('[type="submit"]');
  userValidationNoteText = () => cy.get('#username-note');
  userEmailTextOnTitle = () => cy.get('strong');
  signInButton = () => cy.get('[type="submit"]');

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
  typePassword(text) {
    this.passwordTextfield().should('exist').type(text);
  }
  userValidationNoteText(text) {
    this.userValidationNoteText().should('have.text', text);
  }
  pageContainsUserEmailText(text) {
    this.userEmailTextOnTitle().should('have.text', text);
  }
  clickOnSignInButton() {
    this.signInButton().should('exist').click();
  }
}
