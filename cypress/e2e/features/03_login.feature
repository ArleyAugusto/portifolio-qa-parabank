# language: pt
Funcionalidade: Login no sistema
  Como cliente registrado
  Quero realizar login no ParaBank
  Para acessar minha conta bancária

  Cenario: CT010 - Login com credenciais válidas
    Dado que eu acesse a página inicial do ParaBank
    Quando eu informar username e senha válidos
    E clicar em "Log In"
    Então devo visualizar a mensagem "Welcome" e o menu da conta

  #Cenários negativos 
  
  Cenario: CT011 - Login com senha incorreta
    Dado que eu acesse a página inicial do ParaBank
    Quando eu informar um username válido e senha incorreta
    E clicar em "Log In"
    Então devo visualizar uma mensagem de erro, me impedindo de realizar o login na conta

  Cenario: CT012 - Login com username inexistente
    Dado que eu acesse a página inicial do ParaBank
    Quando eu informar um username não cadastrado
    E clicar em "Log In"
    Então devo visualizar uma mensagem de erro, me impedindo de realizar o login na conta

  Cenario: CT013 - Login com campos vazios
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "Log In" sem preencher os campos
    Então devo visualizar uma mensagem de erro informando que os campos Username e Password são obrigatórios

