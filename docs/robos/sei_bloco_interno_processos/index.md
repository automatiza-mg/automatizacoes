---
comments: true
hide:
  - navigation
tags:
  - SEI
  - Ferramentas
---

# Listar e acessar processos de um bloco interno do SEI


## Informações gerais

| **Desenvolvedora**| Isabela Romancini  |
| ----------- | ------------------------------------ |
| **e-mail**        | isabela.romancini@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |


## Funções desenvolvidas pelo robô

- Faz login no SEI.
- Acessa bloco interno definido como variável
- Copia a lista dos processos do bloco e salva no excel

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/sei_bloco_interno_processos/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/sei_bloco_interno_processos/assets/codigo_fonte.txt"
!!! note "**Importante:**"

    Antes de executar este robô em especial, é importante seguir os seguintes passos:

    1. Verificar se a máquina em que o robô vai ser executado possui os seguintes programas instalados:
        - Microsoft Power Automate;
        - Extensão do Google Chrome ("Microsoft Power Automate" - sem ser o legacy);
    2. Criar **Variável de Entrada** para
        - Usuário_SEI (verificar se o navegador está com autocomplete ativado para este login - desativar, se for o caso)
        - Login_SEI


--8<-- "docs/partials/modelo_robo/alem_disso.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"
