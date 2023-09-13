class registrationPage {
    get firstNameInput() { return cy.get('#input-firstname') };    
    get lastNameInput() { return cy.get('#input-lastname') };    
    get emailInput() { return cy.get('#input-email') };    
    get telephoneInput() { return cy.get('#input-telephone') };    
    get passwordInput() { return cy.get('#input-password') };    
    get passwordConfirmInput() { return cy.get('[placeholder="Password Confirm"]') };    
    get privacyPolicyCheckBox() { return cy.get('[type="checkbox"]') };    
    get continueButton() { return cy.get('[value="Continue"]') };    
}

export default new registrationPage;