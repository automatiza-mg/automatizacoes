---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Cadastra novo perfil de acesso na unidade SEI

![type:video](https://www.youtube.com/embed/0-FlMyb_yr4)

## Informações gerais

| **Desenvolvedor**| Pablo Cezar Moreira Paz - NUSISCORP / SUBDIGITAL / SEPLAG MG |
| ----------- | ------------------------------------ |
| **E-mail**       | atendimentosei@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô dedicado a liberação de permissões para Usuário a determinada Unidade no SIP / SEI!MG.
- [x] Indicado para a liberação de acesso para múltiplos usuários ou liberação de acesso para várias unidades.
- [x] Repete o procedimento a partir do momento da administração de permissões.
- [x] Reduz consideravelmente o tempo no procedimento e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/cadastro_novo_perfil_acesso_sei/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/cadastro_novo_perfil_acesso_sei)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :material-microsoft-excel: __Clique aqui para baixar a planilha modelo__](javascript:void(0);)[^2].
{ #download-button .card path="assets/usuarios.csv" fileName="usuarios.xlsx" }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `local_excel` com o caminho onde a planilha modelo foi salva. 
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `usuário`.
{ .card }

:fontawesome-solid-5: :material-application-variable: __Crie a variável de entrada__ `senha`.
{ .card }

:fontawesome-solid-6: :material-application-variable: __Crie a variável de entrada__ `Órgão`.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.
