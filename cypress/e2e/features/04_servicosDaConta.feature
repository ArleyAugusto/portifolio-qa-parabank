# language: pt
Funcionalidade: Serviços da Conta
  Como cliente autenticado no ParaBank
  Quero utilizar os serviços disponíveis da minha conta
  Para gerenciar minhas finanças

  Cenario: CT014 - Validar saldo total exibido
    Dado que eu esteja logado no ParaBank
    Quando eu acessar a opção "Accounts Overview"
    Então o valor do saldo total deve ser exibido no final do balanço das contas

  Cenario: CT015- Abrir uma nova conta do tipo SAVINGS
    Dado que eu esteja logado no ParaBank
    Quando eu acessar a opção "Open New Account"
    E selecionar o tipo "SAVINGS"
    E clicar em "Open New Account"
    Então devo visualizar a mensagem "Account Opened!" com o número da nova conta

  Cenario: CT016 - Transferência bem-sucedida
    Dado que eu esteja logado no ParaBank
    Quando eu acessar a opção "Transfer Funds"
    E informar um valor válido
    E informar contas válidas
    E clicar em "Transfer"
    Então devo visualizar a mensagem "Transfer Complete!" e o valor transferido

  Cenario: CT017 - Transferência com campo vazio
    Dado que eu esteja logado no ParaBank
    Quando eu acessar a opção "Transfer Funds"
    E não informar valor
    E clicar em "Transfer"
    Então devo visualizar uma mensagem de erro

  Cenario: CT018 - Logout com sucesso
    Dado que eu esteja logado no ParaBank
    Quando eu clicar em "Log Out"
    Então devo ser redirecionado para a página de login
