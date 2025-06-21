import { elementLocators } from "../support/selectors/selectors";

describe("Scenario 10: Newsletter Subscription Validation", () => {
  it("should validate newsletter subscription on homepage", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");
    cy.get(elementLocators.pageFooter).scrollIntoView();
    cy.contains("Subscription").should("be.visible");

    const subscriptionEmail = `newsletter${Date.now()}@testdomain.com`;
    cy.get(elementLocators.newsletterInput).type(subscriptionEmail);
    cy.get(elementLocators.newsletterSubmit).click();
    cy.contains("You have been successfully subscribed!").should("be.visible");
  });
});
