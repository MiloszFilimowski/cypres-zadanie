import { selectors } from "../support/selectors/selectors";

// Test Case 3: Login User with incorrect email and password
describe("Test Case 3: Login User with incorrect email and password", () => {
  it("should display error for incorrect email and password", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.loginLink).click();
    cy.contains("Login to your account").should("be.visible");
    cy.get(selectors.loginEmailInput).type("incorrect@email.com");
    cy.get(selectors.loginPasswordInput).type("wrongpassword");
    cy.get(selectors.loginButton).click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
});
