---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Troca de unidade no SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que troca a unidade do SEI.
- [x] Utiliza subfluxo de login do SEI.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/troca_unidade_sei/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-workflow-24: __Siga todos os passos do robô de login no SEI.__](../login_sei/#montando-o-seu-robo){ target="_blank" }[^1]
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô de troca de unidade do SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/troca_unidade_sei.txt)[^2] e cole em um novo subfluxo `troca_unidade_sei` no Power Automate Desktop.
{ .card }

:fontawesome-solid-3: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main`, com o nome `troca_unidade_sei`.
{ .card }


:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `unidade_sei`[^3].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Verifique se as variáveis de entrada descritas na página do robo para [login no sei](../login_sei/#montando-o-seu-robo) `login_SEI`, `senha_SEI` e `orgao_SEI` ainda precisam ser criadas.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Unidade desejada do SEI.

