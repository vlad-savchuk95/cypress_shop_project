class mainMenu {
    get tabletsButton() { return  cy.get('[class="collapse navbar-collapse navbar-ex1-collapse"]').contains("Tablets") };   
  }
  
  export default new mainMenu();
  