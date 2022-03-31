/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements');
  });

  it('Locating elements with get method', () => {
    //getting elements by tagname
    cy.get('button');
    //getting elements with classname
    cy.get('.btn-with-class');
    //getting elements with specific classname
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    //getting elements with tag name and class and type attribute
    cy.get("button.Elements-btn[type='submit']");
  });
  it('locating elements with contains', () => {
    //Get element with Text
    cy.contains('Not Unique Text');

    //Get element with Selector
    cy.contains("[type='submit']",'Not Unique Text');

    cy.get("[type='submit']").contains("Not Unique Text")
  });

  it('Locating elements to Find', ()=>{
      cy.get("#form-1",). find(".btn-1")
  })
  
 
});
