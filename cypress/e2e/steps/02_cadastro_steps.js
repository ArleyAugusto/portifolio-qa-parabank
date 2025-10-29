const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import * as selectors from '../selectors/seletores';

// CT006

Given('clicar no botão "Register"', () => {
    cy.get(selectors.botaoRegisterHome).click();
     cy.contains('Signing up is easy!').should('be.visible')
});

When('eu preencher todos os campos obrigatórios corretamente', () => {

    const letras = Math.random().toString(36).substring(2, 5).toUpperCase()
    const numeros = Math.floor(Math.random() * 900 + 100) 
    const randomUsername = `Testador_${letras}${numeros}`

     cy.get('#customer\\.firstName').type('Arley')
     cy.get('#customer\\.lastName').type('Aguiar')
     cy.get('#customer\\.address\\.street').type('Rua dos testes')
     cy.get('#customer\\.address\\.city').type('Ribeirão Preto')
     cy.get('#customer\\.address\\.state').type('São Paulo')
     cy.get('#customer\\.address\\.zipCode').type('00000')
     cy.get('#customer\\.phoneNumber').type('5516999999999')
     cy.get('#customer\\.ssn').type('000001')
     cy.get('#customer\\.username').type(randomUsername)
     cy.get('#customer\\.password').type('Teste##2025')
     cy.get('#repeatedPassword').type('Teste##2025')
});

When('clicar em "Register"', () => {
    cy.get(selectors.botaoRegisterCadastro).click();
});

Then('devo visualizar a mensagem "Welcome" com o nome do usuário criado', () => {
    cy.contains('Your account was created successfully. You are now logged in.');
})


//CT007

When('eu deixar todos os campos obrigatórios vazios', () => {

     cy.get('#customer\\.firstName').clear()
     cy.get('#customer\\.lastName').clear()
     cy.get('#customer\\.address\\.street').clear()
     cy.get('#customer\\.address\\.city').clear()
     cy.get('#customer\\.address\\.state').clear()
     cy.get('#customer\\.address\\.zipCode').clear()
     cy.get('#customer\\.phoneNumber').clear()
     cy.get('#customer\\.ssn').clear()
     cy.get('#customer\\.username').clear()
     cy.get('#customer\\.password').clear()
     cy.get('#repeatedPassword').clear()

     });

Then('devo visualizar mensagens de erro informando os campos obrigatórios', () => {
    cy.contains('First name is required.').should('be.visible')
    cy.contains('Last name is required.').should('be.visible')
    cy.contains('Address is required.').should('be.visible')
    cy.contains('City is required.').should('be.visible')
    cy.contains('State is required.').should('be.visible')
    cy.contains('Zip Code is required.').should('be.visible')
    cy.contains('Social Security Number is required.').should('be.visible')
    cy.contains('Username is required.').should('be.visible')
    cy.contains('Password is required.').should('be.visible')
});

//CT008

When('eu preencher todos os campos, mas informar senhas diferentes', () => {

    const letras = Math.random().toString(36).substring(2, 5).toUpperCase()
    const numeros = Math.floor(Math.random() * 900 + 100) 
    const randomUsername = `Testador_${letras}${numeros}`

     cy.get('#customer\\.firstName').type('Arley')
     cy.get('#customer\\.lastName').type('Aguiar')
     cy.get('#customer\\.address\\.street').type('Rua dos testes')
     cy.get('#customer\\.address\\.city').type('Ribeirão Preto')
     cy.get('#customer\\.address\\.state').type('São Paulo')
     cy.get('#customer\\.address\\.zipCode').type('00000')
     cy.get('#customer\\.phoneNumber').type('5516999999999')
     cy.get('#customer\\.ssn').type('000001')
     cy.get('#customer\\.username').type(randomUsername)
     cy.get('#customer\\.password').type('Teste##2025')
     cy.get('#repeatedPassword').type('Teste##2024')
});


Then('devo visualizar uma mensagem de erro informando que as senhas não coincidem', () => {
    cy.contains('Passwords did not match.');
})


//CT009

When('eu preencher o formulário com um username já cadastrado', () => {

     cy.get('#customer\\.firstName').type('Arley')
     cy.get('#customer\\.lastName').type('Aguiar')
     cy.get('#customer\\.address\\.street').type('Rua dos testes')
     cy.get('#customer\\.address\\.city').type('Ribeirão Preto')
     cy.get('#customer\\.address\\.state').type('São Paulo')
     cy.get('#customer\\.address\\.zipCode').type('00000')
     cy.get('#customer\\.phoneNumber').type('5516999999999')
     cy.get('#customer\\.ssn').type('000001')
     cy.get('#customer\\.username').type('john')
     cy.get('#customer\\.password').type('Teste##2025')
     cy.get('#repeatedPassword').type('Teste##2025')
});

Then('devo visualizar uma mensagem de erro informando que o username já existe', () => {
    cy.contains('This username already exists.');
})