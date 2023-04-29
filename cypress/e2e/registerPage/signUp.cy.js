import StartPage from '../pages/startPage';
import RegisterPage from '../pages/RegisterPage';

const registerPage = new RegisterPage();
const startPage = new StartPage();

describe('Sign Up', () => {
  let credentials;
  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Access the site
    cy.visit('/');
    startPage.closeWelcomeBanner();
    startPage.clickOnSignUpLink();
  });

  it('SU-001: Should display the text "Sign in or create an account" on the Register Page', () => {
    registerPage.pageDescriptionText('Sign in or create an account');
  });
  it('SU-002: Correct URL should be displayed on Register Page ', () => {
    cy.url().should('include', 'https://account.booking.com/sign-in');
  });
  it('SU-003: Should display the text "Create password" on the Password page', () => {
    registerPage.typeEmailAddress(credentials.newUserEmail);
    registerPage.clickOnContinueWithEmailButton();
    registerPage.pageDescriptionText('Enter your password');
  });

  it('SU-004: Correct URL should be displayed on Password Page', () => {
    registerPage.typeEmailAddress(credentials.newUserEmail);
    registerPage.clickOnContinueWithEmailButton();
    cy.url().should('include', 'account.booking.com/register/password');
  });

  it('SU-005: Create new user scenario', () => {
    registerPage.typeEmailAddress(credentials.newUserEmail);
    registerPage.clickOnContinueWithEmailButton();
    registerPage.typeNewPassword(credentials.newUserPassword);
    registerPage.typeConfirmedPassword(credentials.newUserPassword);
    registerPage.clickOnCreateAccountButton();
  });
  it('SU-006: Should display validation message if new password is short', () => {
    registerPage.typeEmailAddress(credentials.newUserEmail);
    registerPage.clickOnContinueWithEmailButton();
    registerPage.typeNewPassword('1');
    registerPage.clickOnCreateAccountButton();
    registerPage.newPasswordNoteText(
      'Your password must be at least 10 characters'
    );
    registerPage.confirmedPasswordNoteText('Please confirm your password');
  });
});
