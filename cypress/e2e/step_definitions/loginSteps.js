import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/loginPage";

Given("que o usuário está na página de login", () => {
    LoginPage.visit();
});

When("o usuário insere o nome {string} e a senha {string}", (username, password) => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
});

When("clica no botão de login", () => {
    LoginPage.clickLoginButton();
});

Then("o usuário deve ser redirecionado para a página de produtos", () => {
    LoginPage.getTitle().should("contain.text", "Products");
});

Then("uma mensagem de erro deve ser exibida", () => {
    LoginPage.getErrorMessage().should("be.visible");
});

Then("o título {string} deve estar visível", (title) => {
    LoginPage.getTitle().should("contain.text", title); // Valida o texto do título
});