/// <reference types="cypress" />

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/habits');
    })

    it('should open modal', () => {
        cy.contains('button', 'Add').click();
        cy.get('.modal').should("be.visible");
    })

    it('should close modal on Cancel button click', function () {
        cy.contains('button', 'Add').click();
        cy.contains('.modal', 'Close').click();
        cy.contains('Habit Checklist').should("be.visible");
    });

    it('should be able to type a habit name', function () {
        cy.contains('button', 'Add').click();
        cy.get("input").type("Hasan Ajkunić");
        cy.get('input').should("have.value", "Hasan Ajkunić");
    });
})
