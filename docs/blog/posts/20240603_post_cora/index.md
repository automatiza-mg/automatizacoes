---
date: 2024-06-03
draft: True
authors: [augustacora]
comments: true
categories:
  - Power Automate
---

# Post Cora

Incluir aqui uma introdução

<!-- more -->

Mais texto

## Premissas

- Premissa 1
- Premissa 2
...

## Utilização do robô

- [x] [Copiar o código do primeiro robô](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/scap_inclusao_marcadores_main.txt) em um novo fluxo Power Automate Desktop[^2].
- [x] [Copiar o código do segundo robô](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/scap_inclusao_marcadores_incluindo_marcadores.txt) em um novo subfluxo chamado `incluindo_marcadores`[^2].
- [x]  [Utilizar o robô de login no SEI](../../../robos/login_sei/index.md#montando-o-seu-robo) em um novo subfluxo chamado `login_sei`[^3].
- [x]  [Utilizar o robô troca de unidade no SEI](../../../robos/troca_unidade_sei/index.md#montando-o-seu-robo) em um novo subfluxo chamado `troca_unidade_sei`[^3].
- [x] Criar a variável de entrada `nome_marcadores` para incluir servidores designados[^4].
- [x] Criar a variável de entrada `processos_por_marcador` para incluir a quantidade de processos que será distribuida para cada servidor.

## Resultados

Lembrar de colocar fluxo para quando robo der errado.
