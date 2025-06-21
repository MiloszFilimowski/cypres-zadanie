import { elementLocators } from "../support/selectors/selectors";

describe("Scenario 7: Test Scenarios Page Verification", () => {
  it("should verify test scenarios page is accessible and contains content", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");
    cy.get(elementLocators.testScenariosLink).first().click();
    cy.url().should("include", "/test_cases");
    cy.contains("Test Cases").should("be.visible");
  });
});
