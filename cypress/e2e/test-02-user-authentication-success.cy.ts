import { elementLocators } from "../support/selectors/selectors";
import { CustomerProfile, LoginCredentials } from "../support/dataTypes";

describe("Scenario 2: Successful User Authentication", () => {
  const customerProfile: CustomerProfile = {
    fullName: "Verified Customer",
    emailAddress: `verifiedcustomer${Date.now()}@example.net`,
    accountPassword: "VerifiedPass123",
    givenName: "Verified",
    familyName: "Customer",
    streetAddress: "321 Verified Street",
    countryName: "Canada",
    regionName: "British Columbia",
    cityName: "Vancouver",
    postalCode: "V6B 1A1",
    phoneNumber: "6041234567",
  };

  const loginCredentials: LoginCredentials = {
    emailAddress: customerProfile.emailAddress,
    accountPassword: customerProfile.accountPassword,
  };

  it("should authenticate user with valid credentials", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");

    // First create the account
    cy.createNewCustomer(customerProfile);
    cy.get(elementLocators.accountCreatedMsg).should("be.visible");
    cy.contains("Continue").click();
    cy.contains("Logged in as").should("be.visible");

    // Logout
    cy.get(elementLocators.signOutLink).click();
    cy.get(elementLocators.authenticationLink).should("be.visible");

    // Test authentication
    cy.loginCustomer(loginCredentials);
    cy.contains("Logged in as").should("be.visible");
    cy.contains(customerProfile.fullName).should("be.visible");

    // Cleanup
    cy.get(elementLocators.removeAccountLink).click();
    cy.get(elementLocators.accountRemovedMsg).should("be.visible");
  });
});
