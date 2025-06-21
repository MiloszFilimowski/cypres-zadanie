import { elementLocators } from "../support/selectors/selectors";
import { CustomerProfile } from "../support/dataTypes";

describe("Scenario 1: User Account Creation", () => {
  const customerProfile: CustomerProfile = {
    fullName: "Test Customer",
    emailAddress: `testcustomer${Date.now()}@sample.com`,
    accountPassword: "MyTestPassword456",
    givenName: "Test",
    familyName: "Customer",
    streetAddress: "789 Sample Boulevard",
    countryName: "United States",
    regionName: "Florida",
    cityName: "Miami",
    postalCode: "33101",
    phoneNumber: "3051234567",
  };

  it("should successfully create a new user account", () => {
    cy.visit("/");
    cy.get(elementLocators.brandLogo).should("be.visible");
    cy.get(elementLocators.authenticationLink).click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get(elementLocators.userNameInput).type(customerProfile.fullName);
    cy.get(elementLocators.userEmailInput).type(customerProfile.emailAddress);
    cy.get(elementLocators.createAccountBtn).click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get(elementLocators.genderMale).check();
    cy.get(elementLocators.accountPassword).type(
      customerProfile.accountPassword
    );
    cy.get("#days").select("22");
    cy.get("#months").select("March");
    cy.get("#years").select("1985");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get(elementLocators.givenName).type(customerProfile.givenName);
    cy.get(elementLocators.familyName).type(customerProfile.familyName);
    cy.get("#company").type("Sample Industries");
    cy.get(elementLocators.streetAddress).type(customerProfile.streetAddress);
    cy.get("#address2").type("Suite 101");
    cy.get(elementLocators.countrySelection).select(
      customerProfile.countryName
    );
    cy.get(elementLocators.regionField).type(customerProfile.regionName);
    cy.get(elementLocators.cityName).type(customerProfile.cityName);
    cy.get(elementLocators.postalCode).type(customerProfile.postalCode);
    cy.get(elementLocators.phoneNumber).type(customerProfile.phoneNumber);
    cy.get(elementLocators.accountCreationBtn).click();
    cy.get(elementLocators.accountCreatedMsg)
      .should("be.visible")
      .and("contain", "Account Created!");
    cy.contains("Continue").click();
    cy.contains("Logged in as").should("be.visible");
    cy.contains(customerProfile.fullName).should("be.visible");
    cy.get(elementLocators.removeAccountLink).click();
    cy.get(elementLocators.accountRemovedMsg)
      .should("be.visible")
      .and("contain", "Account Deleted!");
    cy.contains("Continue").click();
  });
});
