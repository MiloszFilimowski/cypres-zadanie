import { selectors } from "../support/selectors/selectors";

describe("Test Case 6: Contact Us Form", () => {
  it("should submit contact us form successfully", () => {
    cy.visit("/");
    cy.get(selectors.logo).should("be.visible");
    cy.get(selectors.contactUsLink).click();
    cy.contains("Get In Touch").should("be.visible");
    cy.get(selectors.contactNameField).type("Test Contact");
    cy.get(selectors.contactEmailField).type("contact@test.com");
    cy.get(selectors.contactSubjectField).type("Test Subject");
    cy.get(selectors.contactMessageField).type(
      "This is a test message for the contact form functionality."
    );
    cy.get('input[name="upload_file"]').selectFile({
      contents: Cypress.Buffer.from("Test file content"),
      fileName: "test.txt",
      mimeType: "text/plain",
    });
    cy.get(selectors.contactSubmitButton).click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Press OK to proceed!");
    });
    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("be.visible");
    cy.get(".btn.btn-success").contains("Home").click();
    cy.url().should("eq", Cypress.config().baseUrl);
    cy.get(selectors.logo).should("be.visible");
  });
});
