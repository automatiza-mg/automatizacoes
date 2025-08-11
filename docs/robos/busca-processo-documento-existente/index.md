---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Busca processo ou documento já existente no SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que abre algum documento ou processo criado anteriormente no SEI.
- [x] Utiliza subfluxo de login do SEI.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.



--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-workflow-24: __Siga todos os passos do robô de login no SEI.__](../login_sei/#montando-o-seu-robo){ target="_blank" }[^1]
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô de buscar processo ou documento já existente no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/processo_existente_sei.txt)[^2] e cole em um novo subfluxo no Power Automate Desktop, ou como ação solta em meio a um subfluxo que sua automatização já tenha.
{ .card }

:fontawesome-solid-3: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main`, com o nome do novo subfluxo (caso você o tenha criado).
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `n_doc_ou_processo_existente`[^3].
{ .card }
</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Verifique se as variáveis de entrada descritas na página do robo para [login no sei](../login_sei/#montando-o-seu-robo) `login_SEI`, `senha_SEI` e `orgao_SEI` ainda precisam ser criadas.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Número do processo / documento que se deseja abrir.

