/// <reference types="Cypress" />

describe('Page tests', () => {
  it('Tests the page loads and the share button works', () => {
    cy.visit('http://localhost:8000');

    // Check share pop-up appears when click on button
    cy.get('button').first().click();
    cy.get('.content__share').should('be.visible');

    // And disappears when you click on it again
    cy.get('button').first().click();
    cy.get('.content__share').should('not.be.visible');
  });
});
