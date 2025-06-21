import { elementLocators } from "../support/selectors/selectors";

describe("Scenario 3: Authentication Failure Handling", () => {
  it("should handle invalid authentication credentials appropriately", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");
    cy.get(elementLocators.authenticationLink).click();
    cy.get(elementLocators.emailInput).type("invalid@credentials.com");
    cy.get(elementLocators.passwordInput).type("InvalidPassword123");
    cy.get(elementLocators.submitButton).click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
});
