/// <reference types="cypress" />

describe('MojiTestovi', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/habits');
    })

    it('should open popup when Add button is clicked', function () {
        cy.get('#habit-add-btn').click();
        cy.contains('Add a new habit').should('be.visible');
    });

    it('should close modal when Close button is clicked', function () {
        cy.get('#habit-add-btn').click();
        cy.get('span').click();
        cy.contains('Habit Checklist').should('be.visible');
    });
})
