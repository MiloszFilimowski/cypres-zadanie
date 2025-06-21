import { selectors } from "../support/selectors/selectors";

describe("Test Case 8: Verify All Products and product detail page", () => {
  it("should verify all products and product detail page", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.productsLink).click();
    cy.url().should("include", "/products");
    cy.contains("All Products").should("be.visible");
    cy.get(selectors.productsList).should("be.visible");
    cy.get(selectors.productItem).should("have.length.at.least", 1);
    cy.get(selectors.productItem)
      .first()
      .find('a[href*="/product_details/"]')
      .click();
    cy.url().should("include", "/product_details/");
    cy.get(".product-information").should("be.visible");
    cy.get(".product-information h2").should("be.visible");
    cy.get(".product-information p").should("contain", "Category:");
    cy.get(".product-information span span").should("be.visible");
    cy.get(".product-information p").should("contain", "Availability:");
    cy.get(".product-information p").should("contain", "Condition:");
    cy.get(".product-information p").should("contain", "Brand:");
  });
});
