# Robô Consultor de Registro de Medicamentos

O desafio consiste em realizar consultas no site da Anvisa, por meio do número RMS, para subsidiar a análise farmacêutica realizada pela Diretoria Central de Planejamento, Padronização, e Estratégias de Contratação (DCPEC).

<!-- more -->
## 1. Sobre o projeto
A demanda iniciou a partir do momento em que o LAB.mg mapeou o processo de compra de medicamentos realizado pela Subsecretaria de Compras Públicas (Subcomp), e foi averiguado que uma das tarefas de automatização envolvia a DCPEC.

Uma das etapas do fluxo de análise farmacêutica, que ocorre na DCPEC, consiste no preenchimento da planilha interna de monitoramento com as devidas informações do site da Anvisa.
O(A) analista informa o número de registro (RMS) para cada medicamento e, posteriormente, faz a consulta, manualmente, no site da Anvisa.
Com isso, ele(a) obtém informações relevantes sobre os medicamentos pretendidos e que constam no planejamento de compras.

## 2. O que o robô faz
* [x] Exibe um formulário para que o usuário informe o número do planejamento, o ano e o objeto;
* [x] Inicia a Planilha de Análise Técnica referente ao objeto do planejamento;
* [x] Copia o número RMS;
* [x] Acessa o site da Anvisa e realiza a busca por RMS;
* [x] Captura as informações necessárias (situação do registro; princípio ativo; empresa detentora da regularização; nome do produto; apresentação; vencimento da regularização; categoria regulatória);
* [x] Grava as informações nas colunas correspondentes da Planilha de Análise Técnica.

## 3. Pré-requisitos para o funcionamento do robô

* O usuário deve estar logado na conta Microsoft.
* As planilhas devem estar acessíveis via OneDrive/SharePoint.

### 3.1. Preencher a coluna referente ao número RMS, da Planilha Análise Técnica.

### 3.2. Adicionar as seguintes variáveis de entrada:

`link_central`
    Caminho completo da planilha hospedada no SharePoint. A planilha deve estar acessível e sincronizada com o computador local para edição em tempo real.

`link_estadual`
    Caminho completo da planilha hospedada no SharePoint. A planilha deve estar acessível e sincronizada com o computador local para edição em tempo real.

`link_judicial`
    Caminho completo da planilha hospedada no SharePoint. A planilha deve estar acessível e sincronizada com o computador local para edição em tempo real.

`link_anvisa`
    Caminho do site da Anvisa

## 4. Métricas alcançadas
Foi mensurado que a execução manual deste processo (por consulta) ocorre em 1min e 52seg, enquanto o robô executa em, em média, 35 segundos.

## 5. Códigos
[`Main`](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp/consulta_registro_medicamentos.txt)
