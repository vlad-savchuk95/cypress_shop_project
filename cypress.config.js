const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '5pqn6n',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    viewportWidth: 1200,
    viewportHeight: 800,
    baseUrl: "https://naveenautomationlabs.com/opencart/",
    env: {
      userEmail : "traverse8@gmail.com", 
      userPassword: "password123",
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});