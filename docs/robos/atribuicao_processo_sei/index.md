---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Atribuição automática de processos no SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.58.00134.25188 |


- [x] Atribui processos automaticamente conforme critério selecionado.
- [x] Faz login no SEI, troca de unidade (se necessário) e percorre a fila.
- [x] Atribui com base no Nome e CPF, percorrendo pela unidade e órgão; registra log de auditoria de atribuição.
- [x] Pode ser executado em modo de teste (sem atribuir) e modo produção (atribui de fato).
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/atribuicao_processo_sei/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

:fontawesome-solid-1: :material-microsoft-excel: <a href="./assets/Fila_de_Atribuicao.xlsx" download="Fila_de_Atribuição.xlsx">__Clique aqui para baixar a planilha-modelo.__</a> [^1]
{ .card }

:fontawesome-solid-2: [:octicons-copy-16: __Copie o código do robô - Main__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/main.txt)[^2] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-3: [:octicons-copy-16: __Copie o código do robô - `configura_fluxo`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/configura_fluxo.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-4: [:octicons-copy-16: __Copie o código do robô - `carrega_fila_de_atribuicao`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/carrega_fila_de_atribuicao.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-5: [:octicons-copy-16: __Copie o código do robô - `login_sei`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/login_sei.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-6: [:octicons-copy-16: __Copie o código do robô - `troca_unidade`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/troca_unidade_sei.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-7: [:octicons-copy-16: __Copie o código do robô - `extrai_dados`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/extrai_dados.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-8: [:octicons-copy-16: __Copie o código do robô - `distribui_processos`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/distribui_processos.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-9: [:octicons-copy-16: __Copie o código do robô - `atribui_processos`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/atribui_processos.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-1::fontawesome-solid-0: [:octicons-copy-16: __Copie o código do robô - `salva_dados`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/salva_dados.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-1::fontawesome-solid-1: [:octicons-copy-16: __Copie o código do robô - `configura_marcadores`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/configura_marcadores.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-1::fontawesome-solid-2: [:octicons-copy-16: __Copie o código do robô - `distribui_por_fila`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/distribui_por_fila.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-1::fontawesome-solid-3: [:octicons-copy-16: __Copie o código do robô - `distribui_aleatoriamente`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/distribui_aleatoriamente.txt)[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-8: :material-application-variable: __Crie a variável de entrada__ `login_sei`[^3].
{ .card }

:fontawesome-solid-9: :material-application-variable: __Crie a variável de entrada__ `senha_sei`[^4].
{ .card }

:fontawesome-solid-1::fontawesome-solid-0: :material-application-variable: __Crie a variável de entrada__ `orgao_sei`[^5].
{ .card }

:fontawesome-solid-1::fontawesome-solid-0: :material-application-variable: __Crie a variável de entrada__ `unidade_sei`[^5].
{ .card }

:fontawesome-solid-1::fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `pastaDeTrabalho`[^6].
{ .card } 

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O nome da aba "Recursos_2025" tem a ideia de ser atualizada anualmente, criando-se uma nova aba a cada ano. Este nome é vinculado no fluxo, devendo-se alterar o nome da aba no próprio robô no caso de alteração. O download desta planilha não é suportado na versão mobile desta página.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
[^4]: Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
[^5]: Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
[^6]: Local e ou caminho da pasta onde se encontra o arquivo Excel com a fila de atribuição. Exemplo: 'C:\Users\xxxx\Downloads\Atribuição_automatica'