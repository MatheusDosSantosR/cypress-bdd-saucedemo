import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../support/pages/productPage";
import CartPage from "../../support/pages/cartPage";
import CheckoutPage from "../../support/pages/checkoutPage";

// Adicionar um produto ao carrinho
Given("que o usuário adicionou o produto {string} ao carrinho", (productName) => {
    ProductPage.clickProductButton(productName, "Add to cart");
    ProductPage.getCartBadge().should("contain.text", "1");
});

// Adicionar múltiplos produtos ao carrinho
Given("que o usuário adicionou os produtos {string} e {string} ao carrinho", (product1, product2) => {
    ProductPage.clickProductButton(product1, "Add to cart");
    ProductPage.clickProductButton(product2, "Add to cart");
    ProductPage.getCartBadge().should("contain.text", "2");
});

// Navegar para o carrinho e iniciar o checkout
When("o usuário inicia o checkout", () => {
    CartPage.visit();
    CartPage.clickCheckoutButton();
});

// Inserir informações do cliente
When("insere as informações {string} {string} {string}", (firstName, lastName, postalCode) => {
    CheckoutPage.enterCustomerInformation(firstName, lastName, postalCode);
    CheckoutPage.clickContinueButton();
});

// Tentar continuar sem informações obrigatórias
When("não insere nenhuma informação de cliente", () => {
    CheckoutPage.clickContinueButton();
});

// Validar o resumo do pedido
Then("o resumo do pedido deve conter o produto {string}", (productName) => {
    CheckoutPage.getOrderSummary().should("contain.text", productName);
});

Then("o resumo do pedido deve conter os produtos {string} e {string}", (product1, product2) => {
    CheckoutPage.getOrderSummary().should("contain.text", product1).and("contain.text", product2);
});

// Validar que o botão "Finish" está disponível
Then("o botão {string} deve estar disponível", (buttonText) => {
    CheckoutPage.getFinishButton().should("contain.text", buttonText).and("be.enabled");
});

// Finalizar o pedido
When("o usuário clica no botão {string}", (buttonText) => {
    CheckoutPage.getFinishButton().click();
});

// Validar mensagem de finalização
Then("a mensagem {string} deve ser exibida", (message) => {
    CheckoutPage.getConfirmationMessage().should("contain.text", message);
});

// Validar mensagem de erro
Then("a mensagem de erro {string} deve ser exibida", (errorMessage) => {
    CheckoutPage.getErrorMessage().should("contain.text", errorMessage);
});
