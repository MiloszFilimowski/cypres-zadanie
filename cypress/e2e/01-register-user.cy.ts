import { selectors } from "../support/selectors/selectors";
import { UserData } from "../support/interfaces";

describe("Test Case 1: Register User", () => {
  const userData: UserData = {
    name: "Test User",
    email: `testuser${Date.now()}@example.com`,
    password: "TestPassword123",
    firstName: "Test",
    lastName: "User",
    address: "123 Test Street",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90210",
    mobileNumber: "1234567890",
  };

  it("should register user successfully", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.loginLink).click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get(selectors.signupNameInput).type(userData.name);
    cy.get(selectors.signupEmailInput).type(userData.email);
    cy.get(selectors.signupButton).click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get(selectors.titleMr).check();
    cy.get(selectors.passwordField).type(userData.password);
    cy.get("#days").select("15");
    cy.get("#months").select("January");
    cy.get("#years").select("1990");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get(selectors.firstNameField).type(userData.firstName);
    cy.get(selectors.lastNameField).type(userData.lastName);
    cy.get("#company").type("Test Company");
    cy.get(selectors.addressField).type(userData.address);
    cy.get("#address2").type("Apt 2");
    cy.get(selectors.countryDropdown).select(userData.country);
    cy.get(selectors.stateField).type(userData.state);
    cy.get(selectors.cityField).type(userData.city);
    cy.get(selectors.zipcodeField).type(userData.zipcode);
    cy.get(selectors.mobileNumberField).type(userData.mobileNumber);
    cy.get(selectors.createAccountButton).click();
    cy.get(selectors.accountCreatedMessage)
      .should("be.visible")
      .and("contain", "Account Created!");
    cy.contains("Continue").click();
    cy.contains("Logged in as").should("be.visible");
    cy.contains(userData.name).should("be.visible");
    cy.get(selectors.deleteAccountLink).click();
    cy.get(selectors.accountDeletedMessage)
      .should("be.visible")
      .and("contain", "Account Deleted!");
    cy.contains("Continue").click();
  });
});
