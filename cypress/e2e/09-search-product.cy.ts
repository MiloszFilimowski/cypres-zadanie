import { selectors } from "../support/selectors/selectors";

describe("Test Case 9: Search Product", () => {
  it("should search product successfully", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.productsLink).click();
    cy.url().should("include", "/products");
    cy.contains("All Products").should("be.visible");
    const searchTerm = "Dress";
    cy.get(selectors.searchProductInput).type(searchTerm);
    cy.get(selectors.searchButton).click();
    cy.contains("Searched Products").should("be.visible");
    cy.get(selectors.productItem).should("have.length.at.least", 1);
    cy.get(selectors.productItem).each(($product) => {
      cy.wrap($product).should("contain.text", searchTerm);
    });
  });
});
