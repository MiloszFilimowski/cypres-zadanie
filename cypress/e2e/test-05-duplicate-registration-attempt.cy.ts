import { elementLocators } from "../support/selectors/selectors";
import { CustomerProfile } from "../support/dataTypes";

describe("Scenario 5: Duplicate Registration Prevention", () => {
  const customerProfile: CustomerProfile = {
    fullName: "Duplicate Test User",
    emailAddress: `duplicateuser${Date.now()}@example.com`,
    accountPassword: "DuplicateTest789",
    givenName: "Duplicate",
    familyName: "Testuser",
    streetAddress: "987 Duplicate Drive",
    countryName: "United States",
    regionName: "California",
    cityName: "Los Angeles",
    postalCode: "90210",
    phoneNumber: "5551234567",
  };

  it("should prevent registration with existing email address", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");

    // Create initial account
    cy.createNewCustomer(customerProfile);
    cy.get(elementLocators.accountCreatedMsg).should("be.visible");
    cy.contains("Continue").click();
    cy.get(elementLocators.signOutLink).click();

    // Attempt to register with same email
    cy.get(elementLocators.authenticationLink).click();
    cy.get(elementLocators.userNameInput).type("Another User Name");
    cy.get(elementLocators.userEmailInput).type(customerProfile.emailAddress);
    cy.get(elementLocators.createAccountBtn).click();
    cy.contains("Email Address already exist!").should("be.visible");

    // Cleanup - login and delete account
    cy.get(elementLocators.emailInput).type(customerProfile.emailAddress);
    cy.get(elementLocators.passwordInput).type(customerProfile.accountPassword);
    cy.get(elementLocators.submitButton).click();
    cy.get(elementLocators.removeAccountLink).click();
    cy.get(elementLocators.accountRemovedMsg).should("be.visible");
  });
});
