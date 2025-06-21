const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "essa",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    username: "janek",
    password: "TajneHa$lo123",
    email: "janek@tester.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://automationteststore.com/',
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}", // Ścieżka do plików testowych
    supportFile: "cypress/support/e2e.ts", // Plik z funkcjami wspierającymi testy
    viewportWidth: 1280, // Szerokość okna przeglądarki
    viewportHeight: 720, // Wysokość okna przeglądarki
  },
});
