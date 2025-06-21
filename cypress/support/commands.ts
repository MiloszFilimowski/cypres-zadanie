/// <reference types="cypress" />

import "./interfaces";
import { selectors } from "./selectors/selectors";
import { UserData, LoginData } from "./interfaces";

Cypress.Commands.add("registerUser", (userData: UserData) => {
  cy.get(selectors.loginLink).click();
  cy.get(selectors.signupNameInput).type(userData.name);
  cy.get(selectors.signupEmailInput).type(userData.email);
  cy.get(selectors.signupButton).click();
  cy.get(selectors.titleMr).check();
  cy.get(selectors.passwordField).type(userData.password);
  cy.get(selectors.firstNameField).type(userData.firstName);
  cy.get(selectors.lastNameField).type(userData.lastName);
  cy.get(selectors.addressField).type(userData.address);
  cy.get(selectors.countryDropdown).select(userData.country);
  cy.get(selectors.stateField).type(userData.state);
  cy.get(selectors.cityField).type(userData.city);
  cy.get(selectors.zipcodeField).type(userData.zipcode);
  cy.get(selectors.mobileNumberField).type(userData.mobileNumber);
  cy.get(selectors.createAccountButton).click();
});

Cypress.Commands.add("loginUser", (loginData: LoginData) => {
  cy.get(selectors.loginLink).click();
  cy.get(selectors.loginEmailInput).type(loginData.email);
  cy.get(selectors.loginPasswordInput).type(loginData.password);
  cy.get(selectors.loginButton).click();
});
