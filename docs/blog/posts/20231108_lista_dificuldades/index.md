---
date: 2023-11-08
draft: true
authors: [dcd-github-admin]
comments: true
categories:
  - Ferramentas
  - Power Automate
---

# Dificuldades recorrentes e alternativas na montagem de protótipos 

Algumas ações pensadas para montagem de um fluxo no power automate podem não funcionar como inicialmente planejado. Por exemplo, algumas circunstâncias como a forma com que a página html da web foi concebida, tamanho da tela do monitor, janelas pop up podem restringir a atuação do robô montado.

Como exemplos de tarefas úteis, que às vezes não é possível:

- abrir o aplicativo local;
- utilizar o tab para navegar na página da web;
- identificar uma imagem ou texto na página da web para clicar;
- identificar linhas semi-estruturadas de um arquivo pdf;
- baixar arquivo de página da web;

| Ação frustrada | Alternativa                          |
| -----------    | ------------------------------------ |
| `Abrir aplicativo`| :Obter a posição do mouse |
| `Enviar teclas`| :Passar o mouse sobre um elemento |
| `Passar o mouse sobre um elemento`| :Obter a posição do mouse |
| `Clicar em elemento de interface do usuário`| :Obter a posição do mouse |
| `Extrair tabelas do pdf`       | :Extrair texto do pdf |

Nesse post algumas dessas dificuldades serão exemplificadas, bem como os prós e contras das alternativas identificadas.

<!-- more -->

## Utilizar movimento do mouse para abrir aplicativo
Algumas aplicações não "aceitam" ser abertas pelo robô, o que exige uma busca "manual" pelo mouse na interface do windows. 
A alternativa de acionamento manual do mouse (enviar pixels e cliques da posição estática do ícone do programa na tela) pode falhar, se a posição do ícone se alterar, ou mesmo se ela já estiver marcado anteriormente (caso de uso do robô da Programação Financeira/SEAFAZ nas OPE)

## Utilizar movimento do mouse para navegar e clicar em elemento de página da web
Algumas imagens, ou elementos de inrterface de usuário não são captadas facilmente. A alterantiva seria idêntica à anterior, com os mesmos limitadores de depender da posição exata na tela para identificação e clique. 

## Dados em linhas de arquivo semi-estruturado
Uma guia ou boleto bancário pode ter seu texto quase que integralmente decodificado num arquivo de texto, formato `.txt`. Ou seja, é possível extrair seu conteúdo para linhas. Entretando, alguns dados podem estar truncados e virem juntos em uma única linha (p. ex., valor do boleto com código do banco, número do processo, outros campos de texto preenchidos pelo usuário na geração da guia).



## Funções de baixar arquivo



# Saiba Mais

(materiais e cursos sobre as ações enumeradas - a explorar e mencionar)
