---
date: 2024-09-25
authors: [augustacora]
comments: true
categories:
  - Power Automate
---

# Seu robô de login no Terminal Prodemge não está funcionando? Uma tecla específica pode ser o problema

A [Biblioteca de robôs do Automatiza.MG](https://automatiza-mg.github.io/automatizacoes/robos/) contém, em sua listagem de automatizações, o [robô de login no Terminal Prodemge](https://automatiza-mg.github.io/automatizacoes/robos/login_terminal_prodemge/). Utilizando-o como uma peça em uma de minhas automatizações, percebi que o login ora dava certo, ora não dava, e apenas depois de muitas tentativas percebi que as vezes em que o login não se completava tinham uma coisa em comum: minha tecla **CapsLock** estava ativada no teclado.  

<!-- more -->

Da forma como esse robô foi construído, a ativação do CapsLock não permite que seja enviada a dupla de teclas Ctrl A + Ctrl C, que identifica o termo "Logon foi executado com sucesso" na tela e dá mais segurança de prosseguir com o login. 
Estando essa tecla ativada, o seguinte erro aparece:

Assim, se for este o caso do seu robô, basta desativar o CapsLock que o login tenderá a ser realizado normalmente! 




