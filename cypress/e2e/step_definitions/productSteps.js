import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/loginPage";
import ProductPage from "../../support/pages/productPage";

// Login com sucesso
Given("que o usuário realizou login com sucesso", () => {
    LoginPage.visit();
    LoginPage.enterUsername("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.clickLoginButton();
});

// Validação da listagem de produtos
Then("a listagem de produtos deve estar visível", () => {
    ProductPage.getProductList().should("be.visible");
});

Then("que o usuário está na página de produtos", () => {
    // Cypress.on("uncaught:exception", (err, runnable) => {
    //     return false;
    // });
    // LoginPage.visit();
    // Verifica se o usuário foi redirecionado para a URL esperada
    cy.url().should("include", "/inventory.html");
});

Then("o usuário tenta acessar diretamente a página de produtos", () => {
    cy.url().should("include", "/inventory.html");
});

Then("cada produto deve exibir nome, preço e imagem", () => {
    ProductPage.getProductItems().each(($el) => {
        cy.wrap($el).find(".inventory_item_name").should("be.visible");
        cy.wrap($el).find(".inventory_item_price").should("be.visible");
        cy.wrap($el).find("img.inventory_item_img").should("be.visible");
    });
});

// Ordenação de produtos por nome
When("o usuário seleciona a opção {string} no filtro de ordenação", (option) => {
    ProductPage.selectSortOption(option);
});

Then("os produtos devem ser exibidos em ordem alfabética", () => {
    ProductPage.getProductNames().then((names) => {
        const sortedNames = [...names].sort();
        expect(names).to.deep.equal(sortedNames);
    });
});

// Ordenação de produtos por preço
Then("os produtos devem ser exibidos do preço mais baixo para o mais alto", () => {
    ProductPage.getProductPrices().then((prices) => {
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
    });
});

// Detalhes de um produto
When("o usuário clica no produto {string}", (productName) => {
    ProductPage.clickOnProduct(productName);
});

Then("a página de detalhes do produto deve ser exibida", () => {
    cy.url().should("include", "/inventory-item.html");
});

Then("o nome do produto deve ser {string}", (productName) => {
    ProductPage.getProductDetailName().should("contain.text", productName);
});

Then("o preço do produto deve ser {string}", (productPrice) => {
    ProductPage.getProductDetailPrice().should("contain.text", productPrice);
});
