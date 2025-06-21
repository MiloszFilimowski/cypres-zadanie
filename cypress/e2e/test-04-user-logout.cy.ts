import { elementLocators } from "../support/selectors/selectors";
import { CustomerProfile } from "../support/dataTypes";

describe("Scenario 4: User Logout Functionality", () => {
  const customerProfile: CustomerProfile = {
    fullName: "Logout Test User",
    emailAddress: `logoutuser${Date.now()}@testsite.org`,
    accountPassword: "LogoutTest456",
    givenName: "Logout",
    familyName: "Testuser",
    streetAddress: "654 Logout Lane",
    countryName: "Australia",
    regionName: "New South Wales",
    cityName: "Sydney",
    postalCode: "2000",
    phoneNumber: "0298765432",
  };

  it("should successfully log out authenticated user", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");

    // Create and login user
    cy.createNewCustomer(customerProfile);
    cy.get(elementLocators.accountCreatedMsg).should("be.visible");
    cy.contains("Continue").click();
    cy.contains("Logged in as").should("be.visible");

    // Test logout functionality
    cy.get(elementLocators.signOutLink).click();
    cy.get(elementLocators.authenticationLink).should("be.visible");
    cy.url().should("include", "/login");

    // Verify user can login again after logout
    cy.get(elementLocators.emailInput).type(customerProfile.emailAddress);
    cy.get(elementLocators.passwordInput).type(customerProfile.accountPassword);
    cy.get(elementLocators.submitButton).click();
    cy.contains("Logged in as").should("be.visible");

    // Cleanup
    cy.get(elementLocators.removeAccountLink).click();
    cy.get(elementLocators.accountRemovedMsg).should("be.visible");
  });
});
