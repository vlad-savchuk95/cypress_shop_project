class header {
    get myAccountButton() { return cy.get('[title="My Account"]') };   
    get logoutButton() { return cy.contains("Logout") }; 
    get shoppingCartButton() { return cy.get('[title="Shopping Cart"]') };   
 
    logout() {
        this.myAccountButton.click();
        this.logoutButton.click();
  }
 }
 
 export default new header