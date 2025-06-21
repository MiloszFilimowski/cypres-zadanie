import { selectors } from "../support/selectors/selectors";
import { UserData, LoginData } from "../support/interfaces";

describe("Test Case 2: Login User with correct email and password", () => {
  const userData: UserData = {
    name: "Login Test User",
    email: `logintest${Date.now()}@example.com`,
    password: "TestPassword123",
    firstName: "Login",
    lastName: "Test",
    address: "123 Login Street",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90210",
    mobileNumber: "1234567890",
  };

  const loginData: LoginData = {
    email: userData.email,
    password: userData.password,
  };

  before(() => {
    cy.visit("/");
    cy.registerUser(userData);
    cy.contains("Continue").click();
    cy.get(selectors.deleteAccountLink).click();
    cy.contains("Continue").click();
  });

  it("should login user with correct email and password", () => {
    cy.visit("/");
    cy.registerUser(userData);
    cy.contains("Continue").click();
    cy.get(selectors.logoutLink).click();
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.loginLink).click();
    cy.contains("Login to your account").should("be.visible");
    cy.get(selectors.loginEmailInput).type(loginData.email);
    cy.get(selectors.loginPasswordInput).type(loginData.password);
    cy.get(selectors.loginButton).click();
    cy.contains("Logged in as").should("be.visible");
    cy.contains(userData.name).should("be.visible");
    cy.get(selectors.deleteAccountLink).click();
    cy.get(selectors.accountDeletedMessage)
      .should("be.visible")
      .and("contain", "Account Deleted!");
  });
});
