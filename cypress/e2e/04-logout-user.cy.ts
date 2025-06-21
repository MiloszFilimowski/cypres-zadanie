import { selectors } from "../support/selectors/selectors";
import { UserData } from "../support/interfaces";

describe("Test Case 4: Logout User", () => {
  const userData: UserData = {
    name: "Logout Test User",
    email: `logouttest${Date.now()}@example.com`,
    password: "TestPassword123",
    firstName: "Logout",
    lastName: "Test",
    address: "123 Logout Street",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90210",
    mobileNumber: "1234567890",
  };

  it("should logout user successfully", () => {
    cy.visit("/");
    cy.registerUser(userData);
    cy.contains("Continue").click();
    cy.get(selectors.logoutLink).click();
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.loginLink).click();
    cy.contains("Login to your account").should("be.visible");
    cy.get(selectors.loginEmailInput).type(userData.email);
    cy.get(selectors.loginPasswordInput).type(userData.password);
    cy.get(selectors.loginButton).click();
    cy.contains("Logged in as").should("be.visible");
    cy.contains(userData.name).should("be.visible");
    cy.get(selectors.logoutLink).click();
    cy.url().should("include", "/login");
    cy.contains("Login to your account").should("be.visible");
  });
});
