---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Cria processo no SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que cria novo processo no SEI.
- [x] Utiliza os subfluxos de login e troca de unidade no SEI.
- [x] Permite a escolha da criação de processo público ou restrito.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/cria_processo_sei/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__]([https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/processo_novo_sei.txt](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/6e97041a249daa6db545351a23ed3034d73ac4f9/docs/robos/sei_processo/assets/processo_novo.txt))[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :octicons-workflow-24: __Utilize o robô de login no SEI__](../login_sei/#montando-o-seu-robo){ target="_blank" }[^2] em um novo subfluxo chamado `login_sei`.
{ .card }

[:fontawesome-solid-3: :octicons-workflow-24: __Utilize o robô de troca de unidade no SEI__](../troca_unidade_sei/#montando-o-seu-robo){ target="_blank" }[^2] em um novo subfluxo chamado `troca_unidade`, :warning: caso seja necessário.
{ .card }

:fontawesome-solid-4::material-application-variable: __Crie as variáveis de entrada__ `tipo_do_processo_criar`[^3] e `assunto`[^4].
{ .card }

:fontawesome-solid-5::material-application-variable: __Crie a variável de entrada__ `hipotese_restricao`, :warning: caso o processo não seja público [^5].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: As variáveis de entrada descritas na página do robo para [login no sei](../login_sei/#montando-o-seu-robo) e [troca de unidade no SEI](../troca_unidade_sei/#montando-o-seu-robo) também deverão ser criadas.
[^3]:Deverá ser `público`, `sigiloso` ou `restrito`, de acordo com a categorização do SEI.
[^4]: É um palavra-chave que localiza o assunto na lista do formulário de criação de processos do SEI.
[^5]: Se processo for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI.
