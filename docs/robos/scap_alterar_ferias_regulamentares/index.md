---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Alterar Férias Regulamentares


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô destinado a alterar o registro de férias regulamentares no SISAP para os servidores através da utilização da rotina Férias Regulamentares, opção 02 - Alterar Férias Regulamentares.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/scap_alterar_ferias_regulamentares/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/alterar_ferias_regulamentares/alterar_ferias_consolidadas.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :material-application-variable: __Clique aqui para baixar a planilha-modelo__](javascript:void(0);).
{ #download-button .card path="assets/alterar_ferias_regulamentares.csv" fileName="alterar_ferias_regulamentares.xlsx" }

:fontawesome-solid-3: :material-application-variable: __Crie as variáveis de entrada__ `usuario` e `senha` com os dados do SISAP [^2].
{ .card }

</div> 
       

--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: MASP e senha do SISAP.
