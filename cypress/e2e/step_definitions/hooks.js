import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/loginPage";

// Executa o login apenas para cenários com a tag @requires-login
Before({ tags: "@requires-login" }, () => {

    //Utilização do cy.session para não autenticar a todo teste.
    //Por algum motivo depois que autentica e utiliza cy.visit retorna 404.
    //Por enquanto realizar autenticão a cada cenario de teste.

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
    LoginPage.visit();
    //Adicionar no cypress.env.json os dados de autenticação
    LoginPage.enterUsername("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.clickLoginButton();

    // Valida que o usuário está na página de produtos
    cy.url().should("include", "/inventory.html");
    // cy.session("standard_user", () => {

    //     LoginPage.visit();
    //     //Adicionar no cypress.env.json os dados de autenticação
    //     LoginPage.enterUsername("standard_user");
    //     LoginPage.enterPassword("secret_sauce");
    //     LoginPage.clickLoginButton();

    //     // Valida que o usuário está na página de produtos
    //     cy.url().should("include", "/inventory.html");
    // })
});

After(() => {
    // Limpa cookies e localStorage após cada cenário
    cy.clearCookies();
    cy.clearLocalStorage();
});