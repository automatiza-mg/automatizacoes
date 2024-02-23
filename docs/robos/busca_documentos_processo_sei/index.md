---
comments: true
hide:
  - navigation
tags:
  - Modular
  - SEI
---

# Busca documentos processo SEI

<video width="640"  controls>
    <source src="#" type="video/mp4">
</video>

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar a busca de documentos em um processo SEI.
- [x] Lista todos os documentos (e seus respectivos números) de um processo SEI.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? copy "**Clique para copiar e colar**"

    === ":material-file-code: main"

    ```yaml
    --8<-- "docs/robos/busca_documentos_processo_sei/assets/main.txt"
    ```

- [Realize login SEI](../login_sei/).
- Entre no processo desejado

## Pré-requisitos

<div class="grid" markdown>

:simple-powerautomate: __Power Automate__ na [versão correta](#informacoes-gerais)
{ .card }

:fontawesome-brands-chrome: __Chrome__ como navegador
{ .card }

:simple-gitextensions:  __Extensão Chrome__ para [Power Automate](https://chromewebstore.google.com/detail/microsoft-power-automate/ljglajjnnkapghbckkcmodicjhacbfhk)
{ .card }

</div>


--8<-- "docs/partials/modelo_robo/ajuda.md"
