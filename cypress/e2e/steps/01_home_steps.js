const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import * as selectors from '../selectors/seletores';

// CT001 

Given('que eu acesse a página inicial do ParaBank', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
});

When('eu clicar em "Home" no menu superior', () => {
  cy.get(selectors.botaoHome).click();
});

Then("devo permanecer na página inicial", () => {
  cy.contains('Customer Login').should('be.visible');
})

//-------

// CT002

When('eu clicar em "Sobre" no menu superior', () => {
  cy.get(selectors.botaoSobre).click();
});


Then('a página "Sobre" deve ser exibida corretamente', () => {
  cy.contains('ParaSoft Demo Website').should('be.visible');
})

//-------

// CT003

When('eu clicar em "Contato" no menu superior', () => {
  cy.get(selectors.botaoContato).click();
});

Then('a página "Contato" deve ser exibida corretamente', () => {
  cy.contains('Customer Care').should('be.visible');
})

//-------

// CT004

When('eu clicar em "About Us" no menu lateral', () => {
  cy.get(selectors.botaoSobreLateral).click();
});

Then('a página "About Us" deve ser exibida corretamente', () => {
  cy.contains('ParaSoft Demo Website').should('be.visible');
})


//-------

// CT005

When('eu clicar em "Services" no menu lateral', () => {
  cy.get(selectors.botaoServices).click();
});

Then('a página "Services" deve ser exibida corretamente', () => {
  cy.contains('Available Bookstore SOAP services:').should('be.visible');
})

//-------

// CT006

When('eu clicar em "Admin Page" no menu lateral', () => {
  cy.get(selectors.botaoAdminPage).click();
});

Then('a página "Admin Page" deve ser exibida corretamente', () => {
  cy.contains('Administration').should('be.visible');
})