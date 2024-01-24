---
comments: true
hide:
  - navigation
tags:
  - Modular
  - SEI
---

# Troca unidade no SEI

<video width="640"  controls>
    <source src="#" type="video/mp4">
</video>

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

## Ações do fluxo do robô

![image](https://github.com/automatiza-mg/automatizacoes/assets/52294411/2eb425d3-4295-4831-a8e8-9687712c32d5)

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

Este robô possui formato modular.
O que significa que ele se beneficiou de robô(s) já desenvolvido(s) para simplificar o trabalho.
Sua construção é dividida entre 3 subfluxos:

- **`main`**: Executa os dois subluxos listados abaixo.
- **`login_sei`**: Executa o robô que realiza [login no SEI](../login_sei/).
- **`troca_unidade_sei`**: Realiza a troca de unidade SEI após o login.


??? note "**Clique para copiar e colar**"

    === ":material-file-code: main"

        ``` yaml
        --8<-- "docs/robos/sei_troca_unidade/assets/main.txt"
        ```


    === ":material-file-code: fazer_login"

        ``` yaml
        --8<-- "docs/robos/login_sei/assets/main.txt"
        ```

    === ":material-file-code: troca_unidade_sei"

        ``` yaml
        --8<-- "docs/robos/sei_troca_unidade/assets/troca_unidade_sei.txt"
        ```


!!! note "**Importante:**"

    Antes de executar este robô em especial, é importante seguir os seguintes passos:

    1. Verificar se a máquina em que o robô vai ser executado possui os seguintes programas instalados:
        - Microsoft Power Automate;
        - Extensão do Google Chrome ("Microsoft Power Automate" - sem ser o legacy);
    2. Criar **Variável de Entrada** para
        - 2.1. Login_SEI (verificar se o navegador está com autocomplete ativado para este login - desativar, se for o caso)
        - 2.2. Senha_SEI
        - 2.3. Orgao_SEI
        - 2.4. Unidade_SEI


--8<-- "docs/partials/modelo_robo/ajuda.md"
