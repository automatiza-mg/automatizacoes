---
comments: true
hide:
  - navigation
tags:
  - SEI
  - Ferramentas
---

# Trocar unidade no SEI


## Informações gerais

| **Desenvolvedora**| André Amorim  |
| ----------- | ------------------------------------ |
| **e-mail**       | andre.amorim@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |

## Ações do fluxo do robô

![image](https://github.com/automatiza-mg/automatizacoes/assets/52294411/2eb425d3-4295-4831-a8e8-9687712c32d5)


--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/sei_troca_unidade/assets/codigo_fonte.txt"

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
