---
comments: true
hide:
  - navigation
tags:
  - PRODEMGE
---

# Login no Terminal PRODEMGE

![type:video](https://www.youtube.com/embed/2GMy8TcuQ6A)

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que automatiza o login nos sistemas transacionais da PRODEMGE: SIAFI, SISAD e SISAP.
- [x] Economiza tempo e evita erros.

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/login_terminal_prodemge.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `login`[^2].
{ .card }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `senha`[^3].
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `sistema`[^4].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Login do usuário no sistema desejado. Em geral é o próprio masp do servidor
[^3]: Senha do usuário no sistema desejado. Recomendamos incluir esta variável como confidencial.
[^4]: Sistema para qual se deseja realizar o login. Valor padrão deverá ser, obrigatoriamente, uma das opções: `sisap`, `siad` ou `siafi`
