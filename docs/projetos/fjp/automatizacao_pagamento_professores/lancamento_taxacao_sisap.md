# Lançamento da taxação de servidores no SISAP a partir de planilha de taxação - FJP

A taxação dos professores da Fundação João Pinheiro (FJP) é realizada manualmente no SISAP. O objetivo da demanda é criar robô para efetuar os lançamentos de descontos de taxação no SISAP. Com o fluxo atual, manual, eram lançados aproximadamente 140 professores, demandando 01 (um) dia de serviço.

Diante dessa situação, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O novo "robozinho" dá continuidade no preparo da planilha `taxação` e utiliza outra planilha `base SISAP BO`como subsídio que contém os masp's dos servidores. Diante disso, o robô calcula o valor a ser taxado por masp e efetua seu lançamento no SISAP, tendo a necessidade de intervenção humana apenas para iniciar o processo.

## 1. Premissas

**`Pasta de cada mês:`**

- Mensal (uma nova pasta deve ser criada a cada mês); 
- Deve conter, antes de iniciar o robô, a planilha de taxação e a planilha base do SISAP. 
- Nome da pasta: [Mês][Ano]. Ex: Maio 2024.

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/6764b28d-5d04-4c89-bd72-673cf145d2c1)
  <figcaption></figcaption>
</figure>


**`Planilha de taxação:`**

- Mensal (acompanha os dados das taxações).
- Abas (nesta ordem): "taxacao", "Internos", "Inss internos", "Externos", "Inss Externos" (**essencial** que sejam exatamente esses os nomes).
- Nome do arquivo: [mês]_[ano]. Ex: "maio_2024".

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/2ae333e8-beab-4efa-b98c-2a340afbf686)
  <figcaption></figcaption>
</figure>

Baixe aqui o modelo da planilha de taxação! Ela está no formato com que o robô foi construído, mas com dados fictícios.

<a href="../assets/maio_2024.xlsx" download="maio_2024.xlsx">**maio_2024**.</a>


**`Planilha de informações-base dos professores:`**

- Mensal (extraída do SISAP a cada mês);
- Aba única: "Relatório 1";
- Para este robô, usa-se a geral (servidores internos e externos);
- Nome do arquivo: sisap_[mês]_[ano]. Ex: sisap_maio_2024.

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/16578ed5-0826-4b15-a0b3-086bd2ba5a01)
  <figcaption></figcaption>
</figure>

Baixe aqui o modelo da planilha de informações-base dos professores! Ela está no formato com que o robô foi construído, mas com dados fictícios.

<a href="../assets/sisap_maio_2024.xlsx" download="sisap_maio_2024.xlsx">**sisap_maio_2024**.</a>


**Alterar nome de variáveis:**

Antes de executar o robô, além da pasta criada e aquivos renomeados adequadamente, o usuário deverá renomear algumas variáveis de entrada/saída. As variáveis que devem ser renomeadas mensalmente estão fixadas.

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/2e738eb3-2a58-47e7-8499-b6eddee7d4f1)
  <figcaption></figcaption>
</figure>

- Alterar mensalmente o conteúdo das variáveis `data_inicio` e `data_fim`  conforme mês vigente da taxação.
- Alterar mensalmente o conteúdo da variável `data_extenso` conforme o texto a ser colocado na descrição da taxação no terminal Prodemge SISAP.
- Alterar mensalmente o conteúdo da variável `caminho_documento_taxacao` com o nome da pasta e arquivo da planilha `taxação` atual.
- Alterar mensalmente o conteúdo da variável `caminho_documento_sisapmasp` com o nome da pasta e arquivo da planilha `base SISAP BO` atual.



## 2. Como funciona? Passo a passo explicado do Automate

**2.1. Main**

Este fluxo, ramo principal do robô, ordena os demais subfluxos.

- Chama os subfluxos dos tópicos seguintes na ordem em que devem acontecer as etapas.

**2.2. Subfluxo preparar_planiha**

- Inicia a planilha `taxação` e executa subfluxo `procv`.
- Cria nova guia na planilha `taxação`que se chama `lanca_pagamento`. Nessa guia, é formada uma tabela onde cada linha é um professor. Nela, consta o masp, valor a receber das aulas e valor a ser descontado pelo INSS. Esses dois valores são calculados pelo robô.

**2.3. Subfluxo procv**

  - Como a planilha `taxação`não informa o masp dos professores, somente o CPF, esse subfluxo pega o masp que está na planilha `base SISAP BO` e coloca na planilha `taxação`.

**2.4. Subfluxo taxacao**

- Baseado na guia criada `lanca_pagamento`na planilha Excel `taxacao`, esse subfluxo acessa o terminal Prodemge SISAP e efetua os lançamentos pertinentes.
- Executa o subfluxo `busca_posicao_admissao`.
- Executa o subfluxo `liberacao_financeiro`.

**2.5. Subfluxo busca posição_admissão**

  - Caso o professor tenha mais de uma admissão, o robô precisa escolher a adimissão correta. Esse subfluxo consiste em fazer a escolha correta da admissão do professor.

**2.6. Subfluxo liberacao_financeiro**

  - Esse subfluxo insere os valores de INSS e aulas a receber no terminal Prodemge SISAP.



## 3. Utilização do robô

- [ ] Conferir se a pasta do mês está com o nome indicado e se estão nela as planilhas `taxação` e `base SISAP BO`. Isso é feito mensalmente.
- [ ] Conferir se as planilhas `taxação` e `base SISAP BO` estão com os nomes apropriados de arquivo. Isso é feito mensalmente.
- [ ] Alterar o conteúdo das variáveis indicadas na seção Premissas desse blog. Isso é feito mensalmente.
- [ ] Nem todos os professores estão registrados na planilha `base SISAP BO`. Para estes professores que não foram cadastrados, o robô não realizará o lançamento do SISAP. Neste caso há duas alternativas:
  - [ ]   Fazer a inclusão manual desses professores faltantes na `base SISAP BO`. Isso deve ser feito antes da execução do robô.
  - [ ]   Fazer o lançamento manual desses professores no terminal Prodemge SISAP. Isso deve ser feito após a execução do robô. Nesse caso, o robô indica na planilha `taxação`os professores que não foram lançados. Para os que foram lançados ele escreve "lançamento ok". Os que não foram lançados ele deixa a célula vazia.
- [ ] Conferir se posicionamentos das tabelas de cada aba das planilhas `taxação` e `base SISAP BO` estão tal como as planilhas taxação e base de maio. Ex: tabela começando na célula A2, ou na A1. Todos os posicionamentos devem ser iguais aos das planilhas em cima das quais o robô foi feito.
- [ ] Quando o robô for ser executado é importante nenhum arquivo excel estar aberto. O robô é quem deve abri-los.


## 4. Resultados

Processo manual: 8 horas.

Processo automatizado: 2,5 horas.


## 5. Códigos
- [x] Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_taxacao/main.txt)
- [x] Subfluxo ['Prepara planilha'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_taxacao/1_preparar_planilha.txt)
- [x] Subfluxo ['Taxação'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_taxacao/2_taxacao.txt)
- [x] Subfluxo ['Busca posição admissão'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_taxacao/3_busca_posicao_admisao.txt)
- [x] Subfluxo ['Liberação financeiro'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_taxacao/4_liberacao_financeiro.txt)
- [x] Subfluxo ['Procv'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_taxacao/procv.txt)
