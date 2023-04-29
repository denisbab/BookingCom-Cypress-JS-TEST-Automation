import StartPage from '../pages/StartPage';
import SearchResultsPage from '../pages/SearchResultsPage';

const startPage = new StartPage();
const searchResultsPage = new SearchResultsPage();

describe('Stays Search flow', () => {
  let credentials;
  let testData;
  beforeEach('Go to the main page', () => {
    // Load credentials
    cy.clearCookies(); // Clear cookies for the currrent domain
    cy.fixture('credentials.json').then((cred) => {
      credentials = cred;
    });
    // Load test data
    cy.fixture('testData.json').then((testD) => {
      testData = testD;
    });

    // Access the site
    cy.visit('/');
  });

  it('US-001: Should display the error message "Please enter a destination to start searching." while seaerch with no destination', () => {
    startPage.clickSearchButton();
    startPage.notificationErrorMessageContainsText(
      'Please enter a destination to start searching.'
    );
  });
  it.only('US-002: Success search scenario', () => {
    startPage.typeDestination(testData.destination);
    startPage.openDatePicker();
    startPage.selectDatePickerDay(testData.startDate);
    startPage.selectDatePickerDay(testData.endDate);
    startPage.clickSearchButton();
    cy.url().should('include', `ss=${testData.destination}`);
    searchResultsPage.destinationSearchField(testData.destination);
    searchResultsPage.pageHeaderContains(testData.destination);
  });
});
