class CheckoutPage {
    enterCustomerInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    clickContinueButton() {
        cy.get('[data-test="continue"]').click();
    }

    getOrderSummary() {
        return cy.get('[data-test="checkout-summary-container"]')
    }

    getFinishButton() {
        return cy.get('[data-test="finish"]');
    }

    getConfirmationMessage() {
        return cy.get('[data-test="complete-header"]')
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}

export default new CheckoutPage();
