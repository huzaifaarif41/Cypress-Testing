/// <reference types="cypress" />

describe('Habit Dashboard', () => {
    beforeEach(() => {
        cy.visit('/habits');
      });
    
  it('should be clicked in to the Add button and modal will be displayed', () => {
    cy.contains('button', 'Add').click()
    cy.contains("Add a new habit").should("be.visible")
  });

  it("should display habit card when new habit is added",()=>{
      cy.get("#habit-add-btn").click()
      cy.get("input[placeholder='Habit']").type("Drink a cup of water")
      cy.contains("Save Changes").click()
      cy.contains("Drink a cup of water").should("have.text", "Drink a cup of water")
      .and("have.class", "HabitCard__habit-container")
  })

 it('should have toggle when Habit list item is clicked', ()=>{
    cy.get("#habit-add-btn").click()
    cy.get("input[placeholder='Habit']").type("Drink a cup of water")
    cy.contains("Save Changes").click()
    cy.contains("Drink a cup of water")
   cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
   cy.contains("Drink a cup of water").click()
  
   cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
 })

 it("should not go to habit dashboard when Habit is not given", ()=>{
    cy.get("#habit-add-btn").click()
    cy.get(".form-control").should("have.value", "")
    cy.contains("Save Changes").click()
     

 })

});
