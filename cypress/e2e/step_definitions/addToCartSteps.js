import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../support/pages/productPage";
import CartPage from "../../support/pages/cartPage";

// Navegação para a página de produtos
Given("está na página de produtos", () => {
    cy.url().should("include", "/inventory.html");
});

// Adicionar produtos ao carrinho
When("o usuário clica no botão {string} do produto {string}", (buttonText, productName) => {
    ProductPage.clickProductButton(productName, buttonText);
});

// Verificar o ícone do carrinho
Then("o ícone do carrinho deve mostrar {string}", (itemCount) => {
    ProductPage.getCartBadge().should("contain.text", itemCount);
});

// Validar que produtos estão no carrinho
Then("o produto {string} deve estar no carrinho", (productName) => {
    CartPage.visit();
    CartPage.getCartItems().should("contain.text", productName);
});

Then("os produtos {string} e {string} devem estar no carrinho", (product1, product2) => {
    CartPage.visit();
    CartPage.getCartItems().should("contain.text", product1).and("contain.text", product2);
});

// Validar que um produto não está no carrinho
Then("o produto {string} não deve estar no carrinho", (productName) => {
    CartPage.visit();
    CartPage.getCartItems().should("not.exist");
});

// Validar que o carrinho está vazio
Then("o carrinho deve estar vazio", () => {
    CartPage.visit();
    CartPage.getCartItems().should("have.length", 0);
});

// Validar que o não existe o icone de valor no carrinho no DOM
Then("o ícone do carrinho deve não deve mostrar valor", () => {
    ProductPage.getCartBadge().should("not.exist");
});

// Acessa pagina do carrainho
Then("o usuário acessa a página do carrinho", () => {
    CartPage.visit();
});
