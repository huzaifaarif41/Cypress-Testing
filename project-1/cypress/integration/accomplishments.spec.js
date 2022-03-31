/// <reference types="cypress" />

describe('Accomplishments Dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments');
  });

  it('should showcase an error if input field is missing', () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      'My basketball accomplishment'
    );
    cy.get("[data-cy='accomplishment-input']").type('I made 3 goals in a row');

    cy.contains('Submit Accomplishment').click();
    cy.contains('Complete the items above to continue').should('be.visible');
  });

  it('should display validation component if all information is given', () => {
    cy.get("[data-cy='accomplishment-title-input']").type('My basketball accomplishment');
    cy.get("[data-cy='accomplishment-input']").type('I made 3 goals in a row');
    cy.get('[data-cy="accomplishment-checkbox"]').click()
    cy.contains('Submit Accomplishment').click();
    cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")

  });
  it('should return back to accomplishment dashboard with empty inputs when "Goback" button is clicked', () => {
    cy.get("[data-cy='accomplishment-title-input']").type('My basketball accomplishment');
    cy.get("[data-cy='accomplishment-input']").type('I made 3 goals in a row');
    cy.get('[data-cy="accomplishment-checkbox"]').click()
    cy.contains('Submit Accomplishment').click();
    cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    cy.contains("Go Back").click()

    cy.contains("h2", "Accomplishment").should("be.visible")
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");

    cy.get('[data-cy="accomplishment-checkbox"]').should("not.be.checked")


  });
});
