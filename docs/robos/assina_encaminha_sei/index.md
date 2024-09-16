---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Assina memorando e encaminha processo do SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que assina memorando e encaminha processo do SEI.
- [x] Utiliza os subfluxos de login, troca de unidade, criação de processo e criação de memorando no SEI.
- [x] Economiza tempo e evita erros.

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-workflow-24: __Siga todos os passos do robô de criação de memorando no SEI.__](../criar_memorando/#montando-o-seu-robo){ target="_blank" }
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô de inserir documento externo no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/insere_documento_externo.txt){ target="_blank" }[^1] :warning:{ title='Caso seja necessário' } e cole em um novo subfluxo chamado `insere_documento_externo`[^1].
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô de assinatura de memorando e encaminhamento de processo do SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/assinatura_encaminhamento.txt){ target="_blank" }[^1] e cole em um novo subfluxo chamado `assinatura_encaminhamento`[^1].
{ .card }

:fontawesome-solid-4: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main` e selecione o subfluxo `assinatura_encaminhamento`.
{ .card }

:fontawesome-solid-5: :material-application-variable: __Crie a variável de entrada__ `nome`.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
