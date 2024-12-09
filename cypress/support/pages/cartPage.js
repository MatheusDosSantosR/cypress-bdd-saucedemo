class CartPage {
    visit() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    getCartItems() {
        return cy.get('[data-test="inventory-item"]');
    }

    clickCheckoutButton() {
        cy.get('[data-test="checkout"]').click();
    }
}

export default new CartPage();