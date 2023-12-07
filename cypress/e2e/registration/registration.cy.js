import registrationPage from "../../fixtures/page_object/registration.page";
import { generateUserData } from "../../helpers/faker.data";
const registrationPageText = require("../../fixtures/test_data/registration.json");
const accountPageText = require("../../fixtures/test_data/account.json");

let userData = generateUserData();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("index.php?route=account/register");
  });

  it("Should register new user", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.privacyPolicyCheckBox.click();
    registrationPage.continueButton.click();
    cy.contains(accountPageText.accountCreated).should("be.visible");
  });

  it("Should register 50 users", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.privacyPolicyCheckBox.click();
    registrationPage.continueButton.click();
    cy.contains(accountPageText.accountCreated).should("be.visible");
  });

  it("Should not be able to register with an existing email address", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.existingEmail);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.privacyPolicyCheckBox.click();
    registrationPage.continueButton.click();
    cy.contains(registrationPageText.emailAlreadyRegistered).should(
      "be.visible"
    );
  });

  it("Should display an error message for invalid password length", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type("abc");
    registrationPage.passwordConfirmInput.type("abc");
    registrationPage.privacyPolicyCheckBox.click();
    registrationPage.continueButton.click();
    cy.contains(registrationPageText.invalidPasswordlength).should(
      "be.visible"
    );
  });

  it("Should not proceed without accepting the privacy policy", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.continueButton.click();
    cy.contains(registrationPageText.privacyPolicyError).should("be.visible");
  });
});
