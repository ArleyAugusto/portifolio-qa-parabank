# language: pt
Funcionalidade: Cadastro de novo cliente
  Como novo usuário
  Quero me cadastrar no ParaBank
  Para acessar as funcionalidades da conta

  Cenario: CT006 - Registro com sucesso
    Dado que eu acesse a página inicial do ParaBank
    E clicar no botão "Register"
    Quando eu preencher todos os campos obrigatórios corretamente
    E clicar em "Register"
    Então devo visualizar a mensagem "Welcome" com o nome do usuário criado

  #Cenários negativos 

  Cenario: CT007 - Registro com campos obrigatórios vazios
    Dado que eu acesse a página inicial do ParaBank
    E clicar no botão "Register"
    Quando eu deixar todos os campos obrigatórios vazios
    E clicar em "Register"
    Então devo visualizar mensagens de erro informando os campos obrigatórios

  Cenario: CT008 - Registro com senha e confirmação diferentes
    Dado que eu acesse a página inicial do ParaBank
    E clicar no botão "Register"
    Quando eu preencher todos os campos, mas informar senhas diferentes
    E clicar em "Register"
    Então devo visualizar uma mensagem de erro informando que as senhas não coincidem

  Cenario: CT009 - Registro com username já existente
   Dado que eu acesse a página inicial do ParaBank
   E clicar no botão "Register"
   Quando eu preencher o formulário com um username já cadastrado
   E clicar em "Register"
   Então devo visualizar uma mensagem de erro informando que o username já existe

  
