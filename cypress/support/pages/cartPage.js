class CartPage {
    visit() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    getCartItems() {
        return cy.get('[data-test="inventory-item"]');
    }
}

export default new CartPage();