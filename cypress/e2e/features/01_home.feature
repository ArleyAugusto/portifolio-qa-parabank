# language: pt

Funcionalidade: Validação de links na home
  Como usuário do ParaBank
  Quero validar o funcionamento dos menus
  Para garantir que os links e seções estão acessíveis

  # Cenários para menu suspenso superior

  Cenario: CT001 - Validar link 'Home' no menu superior
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "Home" no menu superior
    Então devo permanecer na página inicial

  Cenario: CT002 - Validar link 'Sobre' no menu superior
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "Sobre" no menu superior
    Então a página "Sobre" deve ser exibida corretamente

  Cenario: CT003 - Validar link 'Contato' no menu superior
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "Contato" no menu superior
    Então a página "Contato" deve ser exibida corretamente

  # Cenários para menu lateral

  Cenario: CT004 - Validar link 'About Us' no menu lateral
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "About Us" no menu lateral
    Então a página "About Us" deve ser exibida corretamente

  Cenario: CT005 - Validar link 'Services' no menu lateral
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "Services" no menu lateral
    Então a página "Services" deve ser exibida corretamente

  Cenario: CT006 - Validar link 'Admin Page' no menu lateral
    Dado que eu acesse a página inicial do ParaBank
    Quando eu clicar em "Admin Page" no menu lateral
    Então a página "Admin Page" deve ser exibida corretamente