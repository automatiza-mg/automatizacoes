---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Inserir documento externo no SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que insere documento externo em processo no SEI.
- [x] Utiliza os subfluxos de login, troca de unidade e criação de processo no SEI.
- [x] Economiza tempo e evita erros.

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-workflow-24: __Siga todos os passos do robô de criação de processos no SEI.__](../cria_processo_sei/#montando-o-seu-robo){ target="_blank" }
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô de inserção de documento externo__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/insere_documento_externo.txt){ target="_blank" }[^1] e cole em um novo subfluxo chamado `insere_documento_externo`[^1].
{ .card }

:fontawesome-solid-3: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main` e selecione o subfluxo `insere_documento_externo`.
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `caminho_excel`.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
