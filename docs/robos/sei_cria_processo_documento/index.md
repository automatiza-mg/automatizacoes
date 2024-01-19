---
comments: true
hide:
  - navigation
tags:
  - SEI
  - Ferramentas
---

# Criar processo e documento no SEI


## Informações gerais

| **Desenvolvedora**| Isabela Romancini  |
| ----------- | ------------------------------------ |
| **e-mail**       | isabela.romancini@planejamento.mg.gov.br|
| **Ferramenta**   | Power Automate Desktop |


## Funções desenvolvidas pelo robô

- Faz login no SEI.
- Cria processo no SEI
- Cria documento no processo criado

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/sei_cria_processo_documento/assets/codigo_fonte.txt"

!!! note "**Importante:**"

    Antes de executar este robô em especial, é importante seguir os seguintes passos:

    1. Verificar se a máquina em que o robô vai ser executado possui os seguintes programas instalados:
        - Microsoft Power Automate;
        - Extensão do Google Chrome ("Microsoft Power Automate" - sem ser o legacy);
    2. Criar **Variável de Entrada** para
        - Login_SEI (verificar se o navegador está com autocomplete ativado para este login - desativar, se for o caso)
        - Senha_SEI
    3. Verifique se o nome do seu órgão já consta no campo "órgão" na tela de login do SEI. Caso não conste, entre no SEI com suas credenciais e, logo após fazer o login, saia do sistema. Assim, seu órgão ficará como padrão na tela de login


--8<-- "docs/partials/modelo_robo/ajuda.md"
