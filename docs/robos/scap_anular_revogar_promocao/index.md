---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Anular Promoção


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô destinado a anular o registro de promoção no SISAP para os servidores através da utilização da rotina Evolução na Carreira, opção 10 - Anular Promoção.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/scap_anular_revogar_promocao/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/anular_revogar_promocao/anular_revogar_promocao.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :material-application-variable: __Clique aqui para baixar a planilha-modelo__](javascript:void(0);).
{ #download-button .card path="assets/anular_revogar_promocao.csv" fileName="anular_revogar-promocao.xlsx" }

:fontawesome-solid-3: :material-application-variable: __Crie as variáveis de entrada__ `usuario` e `senha` com os dados do SISAP [^2].
{ .card }

</div> 
       

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: MASP e senha do SISAP.
