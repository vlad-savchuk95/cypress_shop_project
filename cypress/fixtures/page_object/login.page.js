class loginPage {
    get emailInput() { return cy.get('#input-email') };    
    get passwordInput() { return cy.get('#input-password') };    
    get loginButton() { return cy.get('[value="Login"]') }; 



    login(email,password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    login50(user) {
        this.emailInput.type(user.email);
        this.passwordInput.type(user.password);
        this.loginButton.click();
    }
}

export default new loginPage;