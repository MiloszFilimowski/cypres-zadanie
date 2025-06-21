import { elementLocators } from "../support/selectors/selectors";

describe("Scenario 6: Customer Support Inquiry Form", () => {
  it("should successfully submit customer support inquiry", () => {
    cy.fixture("supportData").then((supportData) => {
      const inquiry = supportData.standardInquiry;

      cy.visit("/");
      cy.get(elementLocators.brandLogo).should("be.visible");
      cy.get(elementLocators.supportLink).click();
      cy.contains("Get In Touch").should("be.visible");
      cy.get(elementLocators.supportNameInput).type(inquiry.contactName);
      cy.get(elementLocators.supportEmailInput).type(inquiry.contactEmail);
      cy.get(elementLocators.supportTopicInput).type(inquiry.inquiryTopic);
      cy.get(elementLocators.supportMessageInput).type(inquiry.messageContent);

      cy.get('input[name="upload_file"]').selectFile({
        contents: Cypress.Buffer.from("Sample attachment content"),
        fileName: "inquiry.txt",
        mimeType: "text/plain",
      });

      cy.get(elementLocators.supportSendButton).click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Press OK to proceed!");
      });

      cy.contains(
        "Success! Your details have been submitted successfully."
      ).should("be.visible");

      cy.get(".btn.btn-success").contains("Home").click();
      cy.url().should("eq", Cypress.config().baseUrl);
      cy.get(elementLocators.brandLogo).should("be.visible");
    });
  });
});
