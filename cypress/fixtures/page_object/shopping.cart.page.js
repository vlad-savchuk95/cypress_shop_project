class shoppingCartPage {
    get removeItem() { return cy.get('[data-original-title="Remove"]') };
  }
  
  export default new shoppingCartPage();