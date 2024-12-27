# Automatização de processo: empilhamento das planilhas Contratos de Prestação de Serviços - Fhemig

O desafio em questão consiste em automatizar um dos processos de análise dos contratos de prestação de serviços, realizado pela Coordenação de Custos da Diretoria de Contratualização, Faturamento e Parcerias da Fhemig.

Mensalmente, cada hospital conveniado encaminha um relatório com prestação de contas, no formato .xlsx. São enviadas cerca de 21 planilhas de contratos que passam por tratamento e coleta de dados, o processo consiste na unificação de todas essas planilhas, gerando um relatório único, esse fluxo denomina-se empilhamento. 

Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O robô realiza o preparo das planilhas que contém os Relatórios de Contratos de Prestação de Serviços e faz empilhamento, por unidade assistencial, tendo a necessidade de intervenção humana apenas para iniciar o processo.

## 1. O que o robô faz 

- Realiza a leitura dos dados das planilhas.
- Realiza o empilhamento dos dados, por unidade assistencial.

## 2. Como funciona? Passo a passo explicado do Automate
### 2.1. _"Main"_

Este fluxo, ramo principal do robô, contempla as ações principais:

- Obter arquivos da pasta empilhamento;
- Executar o Subfluxo "Preparar planilha empilhamento";
- Executar o Subfluxo "Empilhar"
- Executar o Subfluxo "Exclui células vazias";

### 2.2. Subfluxo "preparar_planilha_empilhamento"

- Iniciar o excel  -  abrir documento pasta_empilhamento;
- Definir a planilha aba "Apontamento Lista Contratos”;
- Desproteger planilhas;
- Reexibir linhas e colunas ocultas;
- Limpar filtros das planilhas;
- Excluir linhas e colunas vazias;
- Excluir a aba "Apontamento SIGH";
- Renomear a planilha "contrato empilhado"
- Salvar o documento;
  
### 2.3. Subfluxo "empilhar"

- Iniciar o excel - abrir documento contrato empilhado;
- Definir a planilha aba "Contrato Empilhado";
- Definir a aba "Apontamento Lista Contrato";
- Desproteger planilha;
- Selecionar células;
- Reexibir linhas e colunas ocultas;
- Limpar filtros da planilha;
- Excluir linhas e colunas vazias;
- Copiar dados da planilha;
- Colar dados na planilha "contrato empilhado";
- Salvar o documento;
  
### 2.4. Subfluxo "exclui_celulas_vazias"

- Iniciar o excel - abrir documento contrato empilhado;
- Definir a planilha aba "Contrato Empilhado";
- Limpar filtros da planilha;
- Seleciona as linhas e colunas vazias;
- Exclui as linhas e colunas vazias;
- Salvar documento;
  
## 3. Utilização do robô
- Antes de executar o robô, ___o(a) usuário(a) deverá adicionar a variável de entrada___ `senha`.
- O robô abrirá todos os arquivos necessários, assim, ___certifique-se que nenhum arquivo Excel esteja aberto___.

## 4. Resultados
- Processo manual: em média 1 hora.
- Processo automatizado: 15 min.

## 5. Códigos

- Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/empilhamento_main.txt)
- Subfluxo ["preparar_planilha_empilhamento"](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/empilhamento_preparar_planilha_empilhamento.txt)
- Subfluxo ["empilhar"](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/empilhamento_empilhar.txt)
- Subfluxo ["exclui_celulas_vazias"](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/empilhamento_exclui_celulas_vazias.txt)
