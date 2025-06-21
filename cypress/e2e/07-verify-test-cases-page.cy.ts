import { selectors } from "../support/selectors/selectors";

describe("Test Case 7: Verify Test Cases Page", () => {
  it("should verify test cases page is accessible", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.testCasesLink).click();
    cy.url().should("include", "/test_cases");
    cy.contains("Test Cases").should("be.visible");
  });
});
