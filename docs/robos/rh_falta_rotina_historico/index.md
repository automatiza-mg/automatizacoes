---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Incluir Faltas – Rotina Histórico


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg,gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Excel**    | 2016 ou superior |
<!-- | **Versão Power Automate**    | 2.39.00239.23332 | -->

- [x] Robô destinado a inclusão de Faltas relativas a meses anteriores através da utilização da rotina Histórico Servidor, opção 21 - Faltas, opção 01 - Incluir Histórico Faltas Consolidadas e lançamento da verba 7506 com o valor da falta a ser descontada, através da rotina Manutenção Dados Financeiros, opção 01 - Lançamento Cargo Código de Recebimento
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/rh_falta_rotina_normal/assets/fluxo.md"
    ```


## Pré-requisitos

<div class="grid" markdown>

:material-play-circle: __Power Automate__ na [versão correta](#informacoes-gerais)
{ .card }

:octicons-key-16: __Acesso ao SiSAP__ com perfil para taxação de faltas.
{ .card }

</div>

## Montando o seu robô

<div class="grid" markdown>

:fontawesome-solid-1: :octicons-copy-16: [__Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/falta_rotina_historico/falta_rotina_historico.txt){ target="_blank" }[^1] e cole em um novo fluxo do Power Automate.
{ .card }

:fontawesome-solid-2: :material-microsoft-excel:[ __Clique aqui para baixar a planilha modelo__](javascript:void(0);).
{ #download-button .card path="assets/falta_rotina_historico.csv" fileName="falta_rotina_historico.xlsx" }

:fontawesome-solid-3: :material-square-edit-outline: __Complete as colunas da planilha modelo__ com as informações de faltas a serem incluídas no Sisap: `NOME`,`MASP`,`DV`,`ADMISSÃO`,`MÊS/ANO APURAÇÃO`,`TIPO DE FALTA`,`QUANTIDADE DE FALTAS`,	`NATUREZA DA FALTA`,`HORAS A DESCONTAR`,`NATUREZA DA FALTA/HORAS`.
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `usuario`, com as informações do seu usuário de acesso ao SISAP..
{ .card }

:fontawesome-solid-5: :material-application-variable: __Crie a variável de entrada__ `senha`, com as informações da sua senha de acesso ao SISAP.
{ .card }

</div>

## Observações 

__Instruções de preenchimento da planilha.__

- Para servidores que possuem masp de 6 digitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0########   
- As colunas "C - DV" e "D - ADMISSÃO" deverão conter apenas o número, sem zero a esquerda. 
- A coluna "E - MÊS/ANO APURAÇÃO" deverá ser preencida no formato 00/0000. 
- A coluna "F - TIPO DE FALTA" deverá ser preenchido no formato 00. Exemplo: inlcusão da falta tipo 1 - exercicio: inserir na respectiva coluna "01". 
- A coluna "G - QUANTIDADE DE FALTAS" deverá ser preenchida no formato "00". Observação: Se o lançamento for relativo apenas a quantidade de horas a descontar, sempre preencher a coluna "G" com a quantidade de faltas "00". 
- A coluna "H - NATUREZA DA FALTA" é relativa a natureza da falta. Deverá ser prenchida no formato "000". Exemplo: 501 para faltas/dias administrativo; 502 para faltas/aulas obrigatórias, etc. Observação: Se o lançamento for relativo apenas a quantidade de horas a descontar, sempre preencher a coluna "H" com o número "000" (três zeros). 
- A coluna "I - HORAS A DESCONTAR" deverá ser preenchida com a quantidade de horas a descontar. Caso não tenha a quantidade de horas a descontar, sempre preenchê-la com o número "0" (zero).                                                   
- A coluna "J - NATUREZA DA FALTA/HORAS" é relativa a natureza das faltas/horas. Deverá ser preenchida no formato "000". Exemplo: 511 para horas descontadas/administrativo; 512 para horas/greve. Caso não exista falta em horas para descontar, prencher a coluna  "J - NATUREZA DA FALTA/HORAS" sempre com o número "0" (zero). 
- A coluna "K" não deve ser preenchida.

--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.   