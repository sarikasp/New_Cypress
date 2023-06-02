const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for html report
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true
      require('cypress-mochawesome-reporter/plugin')(on); // for html report
    },
  },
});
