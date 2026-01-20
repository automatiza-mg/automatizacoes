---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Busca números de documentos em processo SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar a busca dos números de documentos em um processo SEI.
- [x] Lista todos os documentos (e seus respectivos números) de um processo SEI.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-workflow-24: __Utilize o robô de login no SEI__](../login_sei/#montando-o-seu-robo){ target="_blank" }[^1] em um novo subfluxo chamado `login_sei`.
{ .card }

[:fontawesome-solid-2: :octicons-workflow-24: __Utilize o robô de troca de unidade no SEI__]((../troca_unidade_sei/#montando-o-seu-robo)) caso precise.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/busca_numeros_documentos_processo_sei.txt)[^2] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-4::material-application-variable: __Crie a variável de entrada__ `numero_processo`[^3].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: As variáveis de entrada descritas na página do robo para [login no sei](../login_sei/#montando-o-seu-robo) também deverão ser criadas.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Necessário criar repetição (loop) caso seja necessário buscar números de documentos de mais de um processo.
