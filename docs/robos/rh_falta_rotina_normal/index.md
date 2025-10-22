---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Inclui faltas – Rotina Faltas Consolidadas


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg,gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Excel**    | 2016 ou superior |
<!-- | **Versão Power Automate**    | 2.39.00239.23332 | -->

- [x] Robô realiza a inclusão de Faltas para a taxação vigente através da utilização da rotina Faltas Consolidada Pagamento, opção 01 - Incluir Faltas Consolidadas.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/rh_falta_rotina_historico/index.md"
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

:fontawesome-solid-1: :octicons-copy-16: [__Copie o código do robô de inclusão de faltas consolidadas__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/falta_rotina_consolidadas/falta_rotina_consolidadas.txt){ target="_blank" }[^1] e cole em um novo fluxo do Power Automate.
{ .card }

:fontawesome-solid-2: :material-microsoft-excel:[ __Clique aqui para baixar a planilha modelo__](javascript:void(0);) [^2].
{ #download-button .card path="assets/falta_rotina_consolidada.csv" fileName="falta_rotina_consolidada.xlsx" }

:fontawesome-solid-3: :material-square-edit-outline: __Complete as colunas da planilha modelo__ com as informações de faltas a serem incluídas no Sisap: `NOME`,`MASP`,`DV`,`ADMISSÃO`,`MÊS/ANO APURAÇÃO`,`TIPO DE FALTA`,`QUANTIDADE DE FALTAS`,`HORAS A DESCONTAR`,`CÓDIGO DA VERBA DE FALTAS`,`VALOR DO DESCONTO`,`INSERIR OCORRÊNCIA (S/N)`,`DESCRITOR DA OCORRÊNCIA`.
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
- A coluna "E - MÊS/ANO APURAÇÃO" deverá ser preencida no formato 00/0000. Repetir os dados em outra linha se existir mais de um mês/ano apuração de falta para o mesmo servidor. 
- A coluna "G - QUANTIDADE DE FALTAS" deverá ser preenchida no formato de dois digitos. Exemplo: 01, 09, 10. Se for o caso, formatar os dados da coluna "G - QUANTIDADE DE FALTAS" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0##.  
- A coluna "H - HORAS A DESCONTAR" deverá ser preenchida com a quantidade de horas a descontar. Caso não tenha a quantidade de horas a descontar, sempre preenchê-la com o número "0" (zero). As colunas "I" e "N" não devem ser preenchida. 
- A coluna "J - CÓDIGO DA VERBA DE FALTAS" deverá ser preenchida com o código da verba de desconto da falta, que geralmente é o código 7506 - FALTAS ATRASO.  
- A coluna  "K - VALOR DO DESCONTO" deverá ser peenchida com o valor a ser descontado do servidor, após apurado/calculado pelo DRH. 
- A coluna "L - INSERIR OCORRÊNCIA (S/N)" deverá ser preenchida somente com "S" - SIM" ou "N" - NÃO" e serve para inserir ou não as ocorrências após a confirmação da inclusão do desconto de faltas nos dados financeiros. 
- A coluna "M - DESCRITOR DA OCORRÊNCIA" deve ser preenchida somente no caso de se optar por inserir a ocorrência (S - SIM) na coluna "L", e deverá conter a descrição do ocorrido. Caso exista ocorrencia cadastrada para o servidor, ela não será inserida, e as observações serão gravadas na coluna"O". Para servidores que possuirem mais de um mês/ano apuração de falta, inserir a ocorrência e seu descritor apenas no primeiro registro de falta. O campo de "ocorrências" do Sisap costuma não aceitar certo tipos de caracteres, como por exemplo: ^, /, Ç, ~, além de alguns caracteres especiais, quando eles vem exportados da planilha. Deste modo, ao preencher a coluna M, desconsiderar esses tipos de caracteres, e utilizar somente o texto. Por exemplo: "desconto de faltas relativo ao mes 00-0000". Seguem exemplos de preenchimentos nas primeiras linhas, que poderão ser apagados para inclusão dos dados. 


--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.  
[^2]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.