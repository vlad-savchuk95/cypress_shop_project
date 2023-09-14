import loginPage from "../../fixtures/page_object/login.page";
import header from "../../fixtures/page_object/header";
const logoutPageText = require("../../fixtures/test_data/logout.json");
const loginPageText = require("../../fixtures/test_data/login.json");

const userEmail = Cypress.env("userEmail");
const userPassword = Cypress.env("userPassword");

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/index.php?route=account/login");  
  });

  it("Should login/logout with existing account", () => {
    loginPage.login(userEmail, userPassword);
    cy.url().should('include', 'index.php?route=account/account');
    header.myAccountButton.click();
    header.logoutButton.click();
    cy.contains(logoutPageText.logoutMessage).should("be.visible");
  });

  it("Should not log in without '@' sign in the email", () => {
    loginPage.login("someEmail.com", "12345678");
    cy.contains(new RegExp(`(${loginPageText.errorMessage1}|${loginPageText.errorMessage2})`))
      .should("be.visible");
  });
});
