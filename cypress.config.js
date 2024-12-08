const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const bundler = createEsbuildPlugin(config);
      addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", bundler);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
