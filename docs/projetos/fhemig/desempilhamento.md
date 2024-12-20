# Automação de processo: desempilhamento da planilha Contratos de Prestação de Serviços - Fhemig

O desafio em questão consiste em automatizar um dos processos de análise dos contratos de prestação de serviços, realizado pela Coordenação de Custos da Diretoria de Contratualização, Faturamento e Parcerias da Fhemig.

Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O robô realiza o preparo da planilha que contém o Relatório de Contratos de Prestação de Serviços e o seu desempilhamento, por unidade assistencial, tendo a necessidade de intervenção humana apenas para iniciar o processo.

## 1. O que o robô faz
- Realiza a leitura dos dados da planilha.
- Realiza o desempilhamento dos dados, por unidade assistencial.

## 2. Como funciona? Passo a passo explicado do Automate
### 2.1. _"Main"_
Este fluxo, ramo principal do robô, contempla as ações principais:

- Obter planilha a partir de uma pasta especificada;
- Abrir a planilha do Excel;
- Definir a aba ‘contratos’ como ativa;
- Reexibir linhas e colunas ocultas;
- Padronizar a formatação da coluna `unidade executora`, por meio da fórmula `ARRUMAR`;
- Elaborar uma lista com as unidades executoras;
- Remover itens duplicados da lista;
- Limpar filtros da planilha;
- Filtrar os dados, para cada unidade executora listada;
- Salvar os dados filtrados;
- Identificar o arquivo gerado com o nome da unidade executora.

## 3. Utilização do robô
- Antes de executar o robô, ___o(a) usuário(a) deverá adicionar a variável de entrada___ `caminho_pasta`, inserindo no campo `valor padrão` o local onde a planilha se encontra.
- O robô abrirá todos os arquivos necessários, assim, ___certifique-se que nenhum arquivo Excel esteja aberto___.

## 4. Resultados
- Processo manual: em média 1 hora.
- Processo automatizado: 07 min.

## 5. Códigos
- Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/desempilhamento_main.txt)