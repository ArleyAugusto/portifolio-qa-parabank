const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import * as selectors from '../selectors/seletores';

//CT014

Given('que eu esteja logado no ParaBank', () => {
  cy.visit('https://parabank.parasoft.com');
  cy.get('input[name="username"]').type('john');
  cy.get('input[name="password"]').type('demo');
  cy.get('input[value="Log In"]').click();

  cy.get('#leftPanel', { timeout: 10000 }).should('be.visible')
});

When('eu acessar a opção "Accounts Overview"', () => {
    cy.contains('Accounts Overview')
});

Then('o valor do saldo total deve ser exibido no final do balanço das contas', () => {
  cy.contains('Total')
});

//CT015

When('eu acessar a opção "Open New Account"', () => {
  cy.get('#leftPanel a[href="openaccount.htm"]', { timeout: 10000 })
    .should('be.visible')
    .click()
});

When('selecionar o tipo "SAVINGS"', () => {
  cy.get('select#type').select('SAVINGS'); 

});


When('clicar em "Open New Account"', () => {
  cy.wait(500); 
  cy.get(selectors.botaoOpenNewAccount).should('be.visible').click();
});

Then('devo visualizar a mensagem "Account Opened!" com o número da nova conta', () => {
    cy.contains('Account Opened!')
});

//CT016

When('eu acessar a opção "Transfer Funds"', () => {
  cy.get('#leftPanel a[href="transfer.htm"]', { timeout: 10000 })
    .should('be.visible')
    .click()
});

When('informar um valor válido', () => {
  cy.get(selectors.campoAmount).type("50")
});

When('informar contas válidas', () => {
  cy.get('#fromAccountId', { timeout: 10000 })
    .should('be.visible')
    .select('12345');

  cy.get('#toAccountId', { timeout: 10000 })
    .should('be.visible')
    .should('not.have.value', '')
    .select('12567');
});

When('clicar em "Transfer"', () => {
  cy.get(selectors.botaoTransfer).click();
});

Then('devo visualizar a mensagem "Transfer Complete!" e o valor transferido', () => {
  cy.contains('Transfer Complete!').should('be.visible');
  cy.contains('$50.00').should('be.visible');
});

//CT017

When('não informar valor', () => {
  cy.get(selectors.campoAmount).clear()
});

Then('devo visualizar uma mensagem de erro', () => {
    cy.contains('An internal error has occurred and has been logged.')
});

//CT018

When('eu clicar em "Log Out"', () => {
  cy.get('#leftPanel a[href="logout.htm"]', { timeout: 10000 }).should('be.visible').click()
});

Then('devo ser redirecionado para a página de login', () => {
    cy.contains('Customer Login')
})