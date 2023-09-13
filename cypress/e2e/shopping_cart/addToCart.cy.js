import commonLocators from "../../fixtures/page_object/common.locators";
import mainMenu from "../../fixtures/page_object/main.menu";
import header from "../../fixtures/page_object/header";
import shoppingCartPage from "../../fixtures/page_object/shopping.cart.page";

let productTitle;

describe("Shopping Cart", () => {
  beforeEach(() => {
    cy.userLogin();
    cy.visit("index.php?route=account/account");
  });
  it("Should add/remove product from the cart", () => {
    mainMenu.tabletsButton.click();
    commonLocators.productListing.should("have.length", 1);
    commonLocators.addToCartButton.click();
    commonLocators.productListing
      .find("h4")
      .invoke("text")
      .then((text) => {
        productTitle = text;
        commonLocators.dynamicSuccessMessage.should(
          "have.text",
          ` Success: You have added ${productTitle} to your shopping cart! ×`
        );
      });
    header.shoppingCartButton.click();
    commonLocators.totalCartItemsButton.should("include.text", "1 item(s)");
    shoppingCartPage.removeItem.click();
    commonLocators.totalCartItemsButton.should("include.text", "0 item(s)");
  });
});