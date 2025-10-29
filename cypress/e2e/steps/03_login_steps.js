const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import * as selectors from '../selectors/seletores';

// CT010 

When ('eu informar username e senha válidos', () => {
    cy.get(selectors.campoUsername).type('john');
    cy.get(selectors.campoPassword).type('demo');
    
})

When ('clicar em "Log In"', () => {
    cy.get(selectors.botaoLogin).click();
})

Then ('devo visualizar a mensagem "Welcome" e o menu da conta', () => {
    cy.contains('Welcome John Smith');
})

//CT011

When ('eu informar um username válido e senha incorreta', () => {
    cy.get(selectors.campoUsername).type('john');
    cy.get(selectors.campoPassword).type('SenhaInvalida');
    
})

Then ('devo visualizar uma mensagem de erro, me impedindo de realizar o login na conta', () => {
    cy.contains('The username and password could not be verified.');
})

//CT012

When ('eu informar um username não cadastrado', () => {
    cy.get(selectors.campoUsername).type('usuarionaocadastrado');
    cy.get(selectors.campoPassword).type('Senhavalida');
    
})

//CT013

When ('eu clicar em "Log In" sem preencher os campos', () => {
    cy.get(selectors.botaoLogin).click();
})

Then ('devo visualizar uma mensagem de erro informando que os campos Username e Password são obrigatórios', () => {
    cy.contains('Please enter a username and password.');
})