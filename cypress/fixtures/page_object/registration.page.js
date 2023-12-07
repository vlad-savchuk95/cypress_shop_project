class registrationPage {
    get firstNameInput() { return cy.get('#input-firstname') };    
    get lastNameInput() { return cy.get('#input-lastname') };    
    get emailInput() { return cy.get('#input-email') };    
    get telephoneInput() { return cy.get('#input-telephone') };    
    get passwordInput() { return cy.get('#input-password') };    
    get passwordConfirmInput() { return cy.get('[placeholder="Password Confirm"]') };    
    get privacyPolicyCheckBox() { return cy.get('[type="checkbox"]') };    
    get continueButton() { return cy.get('[value="Continue"]') };    

    registerUser(user) {
        this.firstNameInput.type(user.firstName);
        this.lastNameInput.type(user.lastName);
        this.emailInput.type(user.email);
        this.telephoneInput.type(user.phoneNumber);
        this.passwordInput.type(user.password);
        this.passwordConfirmInput.type(user.password);
        this.privacyPolicyCheckBox.click();
        this.continueButton.click();
      }
}

export default new registrationPage;

// registrationPage.firstNameInput.type(userData.firstName);
// registrationPage.lastNameInput.type(userData.lastName);
// registrationPage.emailInput.type(userData.email);
// registrationPage.telephoneInput.type(userData.phoneNumber);
// registrationPage.passwordInput.type(userData.password);
// registrationPage.passwordConfirmInput.type(userData.password);
// registrationPage.privacyPolicyCheckBox.click();
// registrationPage.continueButton.click();
// cy.contains(accountPageText.accountCreated).should("be.visible");