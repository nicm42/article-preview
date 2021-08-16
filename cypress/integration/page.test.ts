/// <reference types="Cypress" />

describe('Page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('Tests the page loads and the share button works', () => {
    // Check share pop-up appears when click on button
    cy.get('button').first().click();
    cy.get('.content__share').should('be.visible');

    // And disappears when you click on it again
    cy.get('button').first().click();
    cy.get('.content__share').should('not.be.visible');
  });

  it.only('Tests LTR and RTL radio buttons', () => {
    // Check direction is RTL when click on that radio button
    // Need the force: true because the radio button has appearance none
    cy.get('#rtl').check({ force: true });
    cy.document().should('have.attr', 'dir', 'rtl');

    // Check direction is LTr when click on that radio button
    cy.get('#ltr').check({ force: true });
    cy.document().should('have.attr', 'dir', 'ltr');
  });
});
