class commonLocators {
    get productListing() { return cy.get('[class="product-thumb"]') } 
    get addToCartButton() { return cy.contains("Add to Cart") }
    get totalCartItemsButton() { return cy.get('[id="cart-total"]') }; 
    get dynamicSuccessMessage() { return cy.get('[class="alert alert-success alert-dismissible"]')}
 }
 
 export default new commonLocators();
 