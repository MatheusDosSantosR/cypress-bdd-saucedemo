class LoginPage {
    visit() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        cy.visit('/');
    }

    enterUsername(username) {
        cy.get('[data-test="username"]').type(username);
    }

    enterPassword(password) {
        cy.get('[data-test="password"]').type(password);
    }

    clickLoginButton() {
        cy.get('[data-test="login-button"]').click();
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }

    getTitle() {
        return cy.get('.title');
    }
}

export default new LoginPage();
