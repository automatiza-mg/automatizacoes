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

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô de login no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/login_sei.txt){ target="_blank" }[^1] e cole em um novo subfluxo `login_sei`[^2].
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô de troca de unidade no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/troca_unidade_sei.txt){ target="_blank" }[^1] e cole em um novo subfluxo `troca_unidade` [^3]:warning:{ title='Caso seja necessário' }.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô de criar processo no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/cria_processo_sei.txt)[^1] e cole em um novo subfluxo `cria_processo_sei`.
{ .card }

:fontawesome-solid-4: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main`, para cada um dos subfluxos 1, 2 e 3, selecionando `login_sei`, `troca_unidade_sei` :warning:{ title='Caso seja necessário' } e `cria_processo_sei` respectivamente.
{ .card }

:fontawesome-solid-5: :material-application-variable: __Crie as variáveis de entrada__ `tipo_do_processo_criar`[^4], `especificacao`[^5] e `hipotese_restricao`[^6].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Verifique se as variáveis de entrada descritas na página do robo para [login no sei](../login_sei/#montando-o-seu-robo) `login_sei`, `senha_sei`, `orgao_sei` ainda precisam ser criadas.
[^3]: Verifique se a variável de entrada descrita na página do robo para [troca de unidade no SEI](../troca_unidade_sei/#montando-o-seu-robo) `unidade_sei` ainda precisa ser criada.
[^4]: É um palavra-chave que localiza o tipo do processo na lista predefinida de criação de processos do SEI: `Memorando` ou `Comunicação: Interna`, por exemplo.
[^5]: Um texto a ser inserido no campo aberto do SEI que descreve sumariamente o processo a ser criado, como um título.
[^6]: Apenas se o processo for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso não seja público deverá ficar em branco.
