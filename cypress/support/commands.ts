/// <reference types="cypress" />

import "./dataTypes";
import { elementLocators } from "./selectors/selectors";
import { CustomerProfile, LoginCredentials } from "./dataTypes";

Cypress.Commands.add("createNewCustomer", (profile: CustomerProfile) => {
  cy.get(elementLocators.authenticationLink).click();
  cy.get(elementLocators.userNameInput).type(profile.fullName);
  cy.get(elementLocators.userEmailInput).type(profile.emailAddress);
  cy.get(elementLocators.createAccountBtn).click();
  cy.get(elementLocators.genderMale).check();
  cy.get(elementLocators.accountPassword).type(profile.accountPassword);
  cy.get(elementLocators.givenName).type(profile.givenName);
  cy.get(elementLocators.familyName).type(profile.familyName);
  cy.get(elementLocators.streetAddress).type(profile.streetAddress);
  cy.get(elementLocators.countrySelection).select(profile.countryName);
  cy.get(elementLocators.regionField).type(profile.regionName);
  cy.get(elementLocators.cityName).type(profile.cityName);
  cy.get(elementLocators.postalCode).type(profile.postalCode);
  cy.get(elementLocators.phoneNumber).type(profile.phoneNumber);
  cy.get(elementLocators.accountCreationBtn).click();
});

Cypress.Commands.add("loginCustomer", (credentials: LoginCredentials) => {
  cy.get(elementLocators.authenticationLink).click();
  cy.get(elementLocators.emailInput).type(credentials.emailAddress);
  cy.get(elementLocators.passwordInput).type(credentials.accountPassword);
  cy.get(elementLocators.submitButton).click();
});
