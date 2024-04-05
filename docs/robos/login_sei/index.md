---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Login no SEI

![type:video](https://www.youtube.com/embed/2GMy8TcuQ6A)

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar o acesso ao SEI.
- [x] Automatiza todo o processo de login SEI, verificando, antes de iniciar, se login(CPF) e órgão informados estão no padrão corretos.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/login_sei/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/login_sei.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:material-application-variable: __Crie a variável de entrada__ `login_sei`[^2].
{ .card }

:material-application-variable: __Crie a variável de entrada__ `senha_sei`[^3].
{ .card }

:material-application-variable: __Crie a variável de entrada__ `orgao_sei`[^4].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
[^3]: Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
[^4]: Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
