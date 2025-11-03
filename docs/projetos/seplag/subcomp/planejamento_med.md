# Robô Consultor de Planejamento de Compras

O desafio consiste em realizar a busca do planejamento de compras, no Portal de Compras MG, e o preenchimento de uma planilha de monitoramento, para subsidiar a análise farmacêutica realizada pela Diretoria Central de Planejamento, Padronização, e Estratégias de Contratação (DCPEC).

<!-- more -->
## 1. Sobre o projeto
A demanda iniciou a partir do momento em que o LAB.mg mapeou o processo de compra de medicamentos realizado pela Subsecretaria de Compras Públicas (Subcomp), e foi averiguado que uma das tarefas de automatização envolvia a DCPEC.

Uma das etapas do fluxo de análise farmacêutica, que ocorre na DCPEC, consiste no preenchimento de uma planilha interna de monitoramento com as informações descritas no planejamento de compras de interesse, disponível no portal de compras.

Por meio da automatização desenvolvida, foi possível acessar o portal de compras, buscar as informações do planejamento e preencher a planilha de monitoramento.

## 2. O que o robô faz
* [x] Exibe um formulário para que o analista informe o número do planejamento e o ano.
* [x] Utiliza as informações do formulário para buscar o planejamento no portal de compras.
* [x] Extrai do portal de compras o objeto do planejamento, o número SIRP, o código CATMAS, a especificação do item, o complemento da especificação, unidade de aquisição e quantidade.
* [x] Grava as informações extraídas nas colunas correspondentes da planilha de monitoramento.

## 3. Pré-requisitos para o funcionamento do robô

### 3.1. Inserção de variáveis de entrada

`link_planilha`
    Caminho completo da planilha hospedada no SharePoint. A planilha deve estar acessível e sincronizada com o computador local para edição em tempo real.

`pasta_download`
    Caminho local da pasta de downloads do computador para a busca da planilha baixada no Portal de Compras. O valor deve estar sem aspas (ex: `C:\Projetos\SUBCOMP`).

## 4. Métricas alcançadas
Foi mensurado que a execução manual deste processo demora 1min e 25seg, enquanto o robô executa em, em média, 30 segundos.

# 5. Códigos
[`Main`](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp/consulta_planejamento_medicamentos.txt)