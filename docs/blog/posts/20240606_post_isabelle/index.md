---
date: 2024-06-06
draft: true
authors: [Isabelle-Fernandes]
comments: true
categories:
  - Power Automate
---

# Lançamento da taxação de serviores no SISAP a partir de planilha de taxação - FJP

A taxação dos professores da Fundação João Pinheiro (FJP) é realizada manualmente no SISAP. O objetivo da demanda é criar robô para efetuar os lançamentos de descontos de taxação no SISAP. Com o fluxo atual, manual, eram lançados aproximadamente 140 professores, demandando 01 (um) dia de serviço. 

Diante dessa situação, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O novo "robozinho" dá continuidade no preparo da planilha `taxação` e utiliza outra planilha `base SISAP BO`como subsídio que contém os masp's dos servidores. Diante disso, o robô calcula o valor a ser taxado por masp e efetua seu lançamento no SISAP, tendo a necessidade de intervenção humana apenas para iniciar o processo.

<!-- more -->

## Premissas

**Planilha `taxação`:**

- Mensal (acompanha os dados das taxações).
- Abas (nesta ordem): "taxacao", "Internos", "Inss internos", "Externos", "Inss Externos" (**essencial** que sejam exatamente esses os nomes).
- Nome do arquivo: [mês]_[ano]. Ex: "maio_2024".

![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/2ae333e8-beab-4efa-b98c-2a340afbf686)

**Planilha `base SISAP BO`:**
- Mensal (extraída do SISAP a cada mês);
- Aba única: "Relatório 1";
- Para este robô, usa-se a geral (servidores internos e externos);
- Nome do arquivo: sisap_[mês]_[ano]. Ex: sisap_maio_2024.

![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/16578ed5-0826-4b15-a0b3-086bd2ba5a01)

**Pasta de cada mês:** 

- Mensal (uma nova pasta deve ser criada a cada mês);
- Deve conter, antes de iniciar o robô, a planilha `taxação` e a planilha `base SISAP BO`.
- Nome da pasta: [Mês][espaço][Ano]. Ex: Maio 2024

![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/95bf7bc8-9aab-4bc1-85b2-d111fb446671)

## Como funciona? Passo a passo explicado do Automate

**1. Main**
Este fluxo, ramo principal do robô, ordena os demais subfluxos. 
- Chama os subfluxos dos tópicos seguintes na ordem em que devem acontecer as etapas.

**Importante:** Antes de executar o robô, além da pasta criada e aquivos renomeados adequadamente, o usuário deverá renomear algumas variáveis de entrada/saída. As variáveis que devem ser renomeadas mensalmente estão fixadas.

![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/2e738eb3-2a58-47e7-8499-b6eddee7d4f1)

- As variaveis `data_extenso`, `data_inicio` e `data_fim` precisam ser alteradas mensalmente pelo taxador, conforme mês vigente da taxação.
- Alterar mensalmente o conteúdo da variável `caminho_documento_taxacao` com o nome da pasta e arquivo da planilha `taxação` atual.
- Alterar mensalmente o conteúdo da variável `caminho_documento_sisapmasp` com o nome da pasta e arquivo da planilha `base SISAP BO` atual.

**2. Subfluxo preparar_planiha**
- Inicia a planilha `taxação` e executa subfluxo `procv`.
- Cria nova guia na planilha `taxação`que se chama `lanca_pagamento`. Nessa guia, é formada uma tabela onde cada linha é um professor. Nela, consta o masp, valor a receber das aulas e valor a ser descontado pelo INSS. Esses dois valores são calculados pelo robô.
 

  **2.1 Subfluxo procv**
  - Como a planilha `taxação`não informa o masp dos professores, somente o CPF, esse subfluxo pega o masp que está na planilha `base SISAP BO` e coloca na planilha `taxação`.

**3. Subfluxo taxacao**
- Baseado na guia criada `lanca_pagamento`na planilha exel `taxacao`, esse subfluxo acessa o terminal Prodemge SISAP e efetua os lançamentos pertinentes.
- Executa o subfluxo `busca_posicao_admissao`.
- Executa o subfluxo `liberacao_financeiro`.

  **3.1 Subfluxo busca posição_admissão**
  - Caso o professor tenha mais de uma admissão, o robô precisa escolher a adimissão correta. Esse subfluxo consiste em fazer a escolha correta da admissão do professor.
 
  **3.2 Subfluxo liberacao_financeiro**
  - Esse subfluxo insere os valores de INSS e aulas a receber no terminal Prodemge SISAP.

