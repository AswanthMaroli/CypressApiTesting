
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    browser:'chrome'
  },
});