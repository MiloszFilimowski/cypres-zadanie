import { elementLocators } from "../support/selectors/selectors";

describe("Scenario 8: Catalog and Item Details Verification", () => {
  it("should verify catalog page and individual item details", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");
    cy.get(elementLocators.catalogLink).click();
    cy.url().should("include", "/products");
    cy.contains("All Products").should("be.visible");

    cy.get(elementLocators.itemCatalog).should("be.visible");
    cy.get(elementLocators.catalogItem).should("have.length.at.least", 1);

    // Click on first product to view details
    cy.get(elementLocators.catalogItem)
      .first()
      .find('a[href*="/product_details/"]')
      .first()
      .click();
    cy.url().should("include", "/product_details/");

    // Verify product details page elements
    cy.get(".product-information").should("be.visible");
    cy.get(".product-information h2").should("be.visible");
    cy.get(".product-information p").should("contain", "Category:");
    cy.get(".product-information span span").should("be.visible"); // Price
    cy.get(".product-information p").should("contain", "Availability:");
    cy.get(".product-information p").should("contain", "Condition:");
    cy.get(".product-information p").should("contain", "Brand:");
  });
});
