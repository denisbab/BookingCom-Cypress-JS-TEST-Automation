# Booking.com Cypress-JS-TEST-Automation

## A Cypress test automation project for booking.com

Requirements:
* Node version v16 or above
* MacOS: brew install node
* Ubuntu: sudo apt install nodejs
* Chrome version 111 or above

### Built With

* Cypress.io
* JavaScript

## Getting Started

By following these steps, you should be able to set up and run the project on your local machine successfully.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

### Installation

1. Clone the project to your machine
2. Clone the repo
3. Install NPM packages
   ```sh
   npm install
   ```
4. You can have a look at the tests inside cypress/e2e/ folder


## Important note:
The Booking Captcha is typically displayed during the final step of the SignIn/SignUp flows. To facilitate automation testing, it is advisable to disable Captcha/MFA authentication in testing environments, as per best practices.

## Reports

As a reporter tool used cypress-mochawesome-reporter. It's already installed in a project. After earch "npx cypress run" command an updated report will be created in a folder cypress/reports/html

The latest report you can find [here](https://dbabadzhanov.github.io/report-page/)
