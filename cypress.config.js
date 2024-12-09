const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        // Alternatira para conseguir executar todos os testes em modo GUI que por algum motivo esta com bug no cy.visit
        // https://github.com/cypress-io/cypress/issues/27501
        watchForFileChanges: false,
        chromeWebSecurity: false,
        blockHosts: ["https://events.backtrace.io"],

        setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            addCucumberPreprocessorPlugin(on, config);
            return config;

        },
        specPattern: "cypress/e2e/features/*.feature",
    },
});