---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Marcador flag em processos PAD


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.58.00134.25188 |
| **Extensão do SEI**    | SEI Pro |

- [x] Robô tem como objetivo otimizar e agilizar o fluxo de trabalho, além de evitar erros ao realizar automaticamente as marcações de flag no SEI, direcionando os processos para a equipe especializada responsável pelo tratamento.
- [x] Facilita o acesso ao SEI, baixa planilhas e realiza as marcações de flag com precisão.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/marcador_flag/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

:fontawesome-solid-1: :material-microsoft-excel: <a href="assets/Recurso_PAD.xlsx"download="recurso_PAD">__Clique aqui para baixar a planilha-modelo__</a>
{ .card }

:fontawesome-solid-2: [:octicons-copy-16: __Copie o código do robô - Main__](link)[^2] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-3: [:octicons-copy-16: __Copie o código do robô - Login SEI__](link)[^2] e cole em um novo subfluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-4: [:octicons-copy-16: __Copie o código do robô - Conferência de variáveis__](link)[^2] e cole em um novo subfluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-5: [:octicons-copy-16: __Copie o código do robô - Excel__](link)[^2] e cole em um novo subfluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-6: [:octicons-copy-16: __Copie o código do robô - Gravar__](link)[^2] e cole em um novo subfluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-7: [:octicons-copy-16: __Copie o código do robô - Marcador_Flag__](link)[^2] e cole em um novo subfluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-8: [:octicons-copy-16: __Copie o código do robô - Marcar Processos__](link)[^2] e cole em um novo subfluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-9: :material-application-variable: __Crie a variável de entrada__ `login_sei`[^3].
{ .card }

:fontawesome-solid-1::fontawesome-solid-0: :material-application-variable: __Crie a variável de entrada__ `senha_sei`[^4].
{ .card }

:fontawesome-solid-1::fontawesome-solid-1: :material-application-variable: __Crie a variável de entrada__ `orgao_sei`[^5].
{ .card }

:fontawesome-solid-1::fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `marcador`[^6].
{ .card }

:fontawesome-solid-1::fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `pasta_download`[^7].
{ .card } 

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: O nome da aba "Recursos_2025" tem a ideia de ser atualizada anualmente, criando-se uma nova aba a cada ano. Este nome é vinculado no fluxo, devendo-se alterar o nome da aba no próprio robô no caso de alteração. 
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
[^4]: Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
[^5]: Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
[^6]: Valor padrão: "Novas manifestações aguardando para distribuir".
[^7]: Local e ou caminho da pasta dowload que irá receber o arquivo baixado. Exemplo: 'C:\Users\xxxx\Downloads'