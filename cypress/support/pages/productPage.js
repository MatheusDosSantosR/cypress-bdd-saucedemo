class ProductPage {
    getProductList() {
        return cy.get(".inventory_list");
    }

    getProductItems() {
        return cy.get('[data-test="inventory-item"]')
    }

    getProductNames() {
        return cy.get(".inventory_item_name").then(($names) =>
            Cypress._.map($names, "innerText")
        );
    }

    getProductPrices() {
        return cy.get(".inventory_item_price").then(($prices) =>
            Cypress._.map($prices, (price) => parseFloat(price.innerText.replace("$", "")))
        );
    }

    selectSortOption(option) {
        cy.get(".product_sort_container").select(option);
    }

    clickOnProduct(productName) {
        cy.get(".inventory_item_name").contains(productName).click();
    }

    getProductDetailName() {
        return cy.get(".inventory_details_name");
    }

    getProductDetailPrice() {
        return cy.get(".inventory_details_price");
    }

    clickProductButton(productName, buttonText) {
        cy.get('[data-test="inventory-item"]').contains(productName).parent().parent().contains(buttonText).click();
    }

    getCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]');
    }
}

export default new ProductPage();
