---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Cria texto de memorando com IA


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que cria texto padronizado de memorando com auxílio do chat GPT.
- [x] Economiza tempo e evita erros.

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô de criação de texto de memorando com IA__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/prompt_memo.txt){ target="_blank" }[^1] e cole em um novo subfluxo chamado `prompt_memo`[^1].
{ .card }

:fontawesome-solid-2: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main` e selecione o subfluxo `prompt_memo`.
{ .card }

:fontawesome-solid-3: :material-application-variable: __Crie as variáveis de entrada__ `resposta_gpt`.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
