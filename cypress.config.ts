const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "webshop-qa",
  chromeWebSecurity: false,
  defaultCommandTimeout: 12000,
  env: {
    testUser: "alexsmith",
    userPassword: "SecurePass456!",
    testEmail: "alexsmith@qatest.org",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Node event handlers for test execution
    },
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}", // Test file patterns
    supportFile: "cypress/support/e2e.ts", // Support utilities
    viewportWidth: 1440, // Browser window width
    viewportHeight: 900, // Browser window height
  },
});
