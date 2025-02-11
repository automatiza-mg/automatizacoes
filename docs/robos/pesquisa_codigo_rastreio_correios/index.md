---
comments: true
hide:
  - navigation
tags:
  - APIs
---

# Pesquisa código rastreio dos correios

![type:video](https://www.youtube.com/embed/cN-68syXTQk){: #iframe-youtube style='width: 100%; height: 17em; border-radius:20px'}

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que realiza chamada em [API externa](https://github.com/chipytux/correiosApi).
- [x] Verifica se resposta à chamada API foi bem sucedida.
- [x] Busca informações, como data de postagem, com base no número do rastreio.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/pesquisa_codigo_rastreio_correios/assets/fluxo.md"
    ```

## Pré-requisitos

<div class="grid" markdown>

:material-play-circle: __Power Automate__ na [versão correta](#informacoes-gerais)
{ .card }

:octicons-key-16: [__Token de acesso__](https://github.com/chipytux/correiosApi#:~:text=Rastreamento%20da%20Encomenda-,Os%20exemplos,-abaixo%20utilizam%20o) à API Link Track
{ .card }

</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/pesquisa_codigo_rastreio_correios.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `usuario_api_correios`[^2].
{ .card }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `chave_acesso_api_correios`[^3].
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `codigo_rastreio`[^4].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

## Agradecimentos

Agradecemos a atenção e o apoio da equipe [Link Track](https://linketrack.com) que nos permitindo acessar gratuitamente esta API.

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Usuário para acesso à API Link Track.
[^3]: Token de acesso à API Link Track.
[^4]: Em caso de consultas em massa poderá ser incluído o processo dentro de um loop. Nesta opção a variável `codigo_rastreio` poderá vir de uma variável de fluxo, alimentada com os registros de uma planilha de Excel, por exemplo.
