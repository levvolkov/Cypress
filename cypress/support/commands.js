// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.contains("Log in").click();
    
    if (email) {
        cy.get("#mail").type(email);
    }
    if (password) {
        cy.get("#pass").type(password);
    }
    cy.get("form > .ml-2").click();
});

Cypress.Commands.add("addBook", (title, description, authors) => {
    cy.get("button[class='btn btn-warning']").click();
    
    if (title) {
        cy.get("#title").type(title);
    }
    if (description) {
        cy.get("#description").type(description);
    }
    if (authors) {
        cy.get("#authors").type(authors);
    }
    cy.get("button[type='submit']").click();
});
 
Cypress.Commands.add("addBookFavorite", (title, description, authors) => {
    cy.get("button[class='btn btn-warning']").click();

    if (title) {
        cy.get("#title").type(title);
    }
    if (description) {
        cy.get("#description").type(description);
    }
    if (authors) {
        cy.get("#authors").type(authors);
    }
        cy.get("#favorite").click();
       
        cy.get("button[type='submit']").click();
});