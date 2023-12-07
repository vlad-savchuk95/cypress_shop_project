const userData = require('../../fixtures/test_data/logins.json');
import loginPage from '../../fixtures/page_object/login.page';
const accountPageText = require("../../fixtures/test_data/account.json");

// Test to register all users
describe('Register Users', () => {
  userData.users.forEach((user, index) => {
  it(`Should register User ${index + 1}`, () => {
  cy.visit("index.php?route=account/login") 
  loginPage.login50(user)
  cy.contains('My Orders').should("be.visible");});
  });
});