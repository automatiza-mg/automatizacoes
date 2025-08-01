---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Cadastro de Novo Usuário SEI

![type:video](https://www.youtube.com/embed/2fA7HXFZ7vs)

## Informações gerais

| **Desenvolvedor**| Pablo Cezar Moreira Paz - NUSISCORP / SUBDIGITAL / SEPLAG MG |
| ----------- | ------------------------------------ |
| **E-mail**       | atendimentosei@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô dedicado ao cadastro de novo Usuário no SIP / SEI!MG.
- [x] Indicado para o cadastro múltiplo de usuários.
- [x] Repete o procedimento a partir do momento do cadastro de novo usuário.
- [x] Reduz consideravelmente o tempo no procedimento e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/cadastro_novo_usuario_sei/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/cadastro_novo_usuario_sei.md)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :material-application-variable: __Clique aqui para baixar a planilha modelo__](javascript:void(0);)[^2].
{ #download-button .card path="assets/usuarios.csv" fileName="usuarios.xlsx" }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `local_excel` com o caminho onde a planilha modelo foi salva.
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `login_sei`.
{ .card }

:fontawesome-solid-5: :material-application-variable: __Crie a variável de entrada__ `senha_sei`.
{ .card }

:fontawesome-solid-6: :material-application-variable: __Crie a variável de entrada__ `orgao_sei`.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Qualquer modificação além da inclusão de mais usuários na planilha Excel pode exigir modificações no código original do robô. Download desta planilha não é suportado na versão mobile desta página.
