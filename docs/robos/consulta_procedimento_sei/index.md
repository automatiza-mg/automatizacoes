---
comments: true
hide:
  - navigation
tags:
  - APIs
---

# Baixa processos e documentos SEI

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que realiza chamada em API externa.
- [x] Verifica se resposta à chamada API foi bem sucedida.
- [x] Executa downloads de processos SEI em PDF ou de todos os documentos de um processo em uma pasta ZIP.

## Pré-requisitos

<div class="grid" markdown>

:simple-powerautomate: __Power Automate__ na [versão correta](#informacoes-gerais)
{ .card }

:octicons-key-16: __Token de acesso__ à API do SEI
{ .card }

</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/api_sei.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `api_sei_sistema`[^2].
{ .card }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `api_sei_token`[^3].
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `api_sei_unidade`[^4].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"


[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Sistema criado pelos Administradores do SEI do seu órgão.
[^3]: Token de acesso à API do SEI gerada pelas administradores do SEI do seu órgão.
[^4]: Código da Unidade que será utilizada no SEI para encontrar o(s) processo(s) procurados.
