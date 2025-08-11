---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Incluir Progressão


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô destinado a inclusão de Progressão no SISAP para os servidores através da utilização da rotina Evolução na Carreira, opção 01 - Incluir Progressão.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/scap_progressao/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/progressao/progressao_main.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :material-microsoft-excel: __Clique aqui para baixar a planilha-modelo__](javascript:void(0);).
{ #download-button .card path="assets/inclusao_progressao.csv" fileName="inclusao_progressao.xlsx" }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `usuario`, com as informações do seu usuário de acesso ao SISAP..
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `senha`, com as informações da sua senha de acesso ao SISAP.
{ .card }

</div>

## Observações 

__Instruções de preenchimento da planilha.__

- Para servidores que possuem masp de 6 dígitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0######## 
- As colunas "C - DV" e "D - ADMISSÃO" deverão conter apenas o número, sem zero a esquerda.
- A coluna "E - NAT" deverá ser preencida no formato 000. Se for o caso, formatar os dados da coluna "E - NAT" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0## para que seja acrescido o 0 (zero) a esquerda para naturezas de progressão com menos de três digitos.
- As colunas "F - DATA PUBLICAÇÃO" e  "G - DATA INICIO" deverão ser preenchidas no formato 00/00/0000.
-  A coluna "H" não deve ser preenchida. 
- A planilha modelo contém um exemplo de preenchimento, que pode ser apagado para inclusão dos dados.                                         

--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
