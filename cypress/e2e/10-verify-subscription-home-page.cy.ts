import { selectors } from "../support/selectors/selectors";

describe("Test Case 10: Verify Subscription in home page", () => {
  it("should verify subscription in home page", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.footer).scrollIntoView();
    cy.contains("Subscription").should("be.visible");
    const email = `subscribe${Date.now()}@test.com`;
    cy.get(selectors.subscriptionInput).type(email);
    cy.get(selectors.subscriptionButton).click();
    cy.contains("You have been successfully subscribed!").should("be.visible");
  });
});
