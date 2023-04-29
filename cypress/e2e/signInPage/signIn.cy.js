import StartPage from '../pages/StartPage';
import SignInPage from '../pages/SignInPage';

const signInPage = new SignInPage();
const startPage = new StartPage();

describe('Sign In', () => {
  let credentials;
  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Access the site
    cy.visit('/');
    startPage.clickOnSignInLink();
  });

  it('SI-001: Should display the text "Sign in or create an account" on the Sign-In Page', () => {
    signInPage.pageDescriptionText('Sign in or create an account');
  });
  it('SI-002: Correct URL should be displayed on Sign-In Page ', () => {
    cy.url().should('include', 'https://account.booking.com/sign-in');
  });
  it('SI-003: Should display the text "Enter your password" on the Password page', () => {
    signInPage.typeEmailAddress(credentials.existedUserEmail);
    signInPage.clickOnContinueWithEmailButton();
    signInPage.pageDescriptionText('Enter your password');
  });

  it('SI-004: Correct URL should be displayed on Password Page', () => {
    signInPage.typeEmailAddress(credentials.existedUserEmail);
    signInPage.clickOnContinueWithEmailButton();
    cy.url().should('include', 'account.booking.com/sign-in/password');
  });

  it('SI-005: Correct Email Text should be displayed on Password Page', () => {
    signInPage.typeEmailAddress(credentials.existedUserEmail);
    signInPage.clickOnContinueWithEmailButton();
    signInPage.pageContainsUserEmailText(credentials.existedUserEmail);
  });

  it('SI-006: Login with existed user email', () => {
    signInPage.typeEmailAddress(credentials.existedUserEmail);
    signInPage.clickOnContinueWithEmailButton();
    signInPage.typePassword(credentials.existedUserPassword);
    signInPage.clickOnSignInButton();
  });
  it('SI-007: Login with incorrect email', () => {
    signInPage.typeEmailAddress(credentials.wrongEmailType);
    signInPage.clickOnContinueWithEmailButton();
    signInPage.userValidationNoteText(
      "Please check if the email address you've entered is correct."
    );
  });
});
