---
comments: true
hide:
  - navigation
tags:
  - Modular
  - SEI
---

# Abre processo no SEI

<video width="640"  controls>
    <source src="#" type="video/mp4">
</video>

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar a criação de processo no SEI.
- [x] Automatiza todo o processo de login, confirmação ou troca de unidade, consulta ou abertura de processo.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/aposentadoria/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

Este robô possui formato modular.
O que significa que ele se beneficiou de robô(s) já desenvolvido(s) para simplificar o trabalho.
Sua construção é dividida entre 3 subfluxos:

- **main**: Executa os dois subluxos listados abaixo.
- **login_sei**: Executa o robô que realiza [login no SEI](../login_sei/index.md).
- **troca_unidade_sei**: Realiza a troca de unidade SEI após o login.
- **processo**: realiza etapas para seleção de processo existente ou abertura de novo


??? note "**Clique para copiar e colar**"

    === ":material-file-code: main"

        ``` yaml
        --8<-- "docs/robos/sei_processo/assets/main.txt"
        ```


    === ":material-file-code: fazer_login"

        ``` yaml
        --8<-- "docs/robos/login_sei/assets/main.txt"
        ```

    === ":material-file-code: troca_unidade_sei"

        ``` yaml
        --8<-- "docs/robos/sei_troca_unidade/assets/troca_unidade_sei.txt"
        ```

    === ":material-file-code: processo_sei"

        ``` yaml
        --8<-- "docs/robos/sei_processo/assets/processo.txt"
        ```

- Crie **variáveis de entrada** para:
    - **`login_sei`**: Login para entrar no SEI.
    - **`senha_sei`**: Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
    - **`orgao_sei`**: Órgão de login no SEI, com todas as letras maiúsculas.
    - **`unidade_sei`**: Unidade do SEI, com todas as letras maiúsculas. 
    - **`tipo_do_processo`**: público, sigiloso ou restrito
    - **`assunto`**
    - **`hipotese_restricao`**
    - **`n_doc_ou_processo_existente`**

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
