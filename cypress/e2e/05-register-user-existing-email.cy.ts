import { selectors } from "../support/selectors/selectors";
import { UserData } from "../support/interfaces";

describe("Test Case 5: Register User with existing email", () => {
  const userData: UserData = {
    name: "Existing Email User",
    email: `existinguser${Date.now()}@example.com`,
    password: "TestPassword123",
    firstName: "Existing",
    lastName: "User",
    address: "123 Existing Street",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90210",
    mobileNumber: "1234567890",
  };

  before(() => {
    cy.visit("/");
    cy.registerUser(userData);
    cy.contains("Continue").click();
    cy.get(selectors.logoutLink).click();
  });

  it("should show error when registering with existing email", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.loginLink).click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get(selectors.signupNameInput).type("Another User");
    cy.get(selectors.signupEmailInput).type(userData.email);
    cy.get(selectors.signupButton).click();
    cy.contains("Email Address already exist!").should("be.visible");
  });
});
