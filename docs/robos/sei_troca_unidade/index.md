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

| **Desenvolvedora**| Isabela Romancini  |
| ----------- | ------------------------------------ |
| **e-mail**       | isabela.romancini@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |

## Funções desenvolvidas pelo robô

- Troca unidade do usuário logado no SEI
![image](https://github.com/automatiza-mg/automatizacoes/assets/52294411/16f7c9a8-79b1-496d-ad5b-b79948fd6a22)
![image](https://github.com/automatiza-mg/automatizacoes/assets/52294411/6ab52b83-9fee-4e76-aa4d-8babbb0063ab)

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/sei_troca_unidade/assets/fluxo.md"
    ```

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
        - 2.3. Nome do Órgão** (ação nº 2)
        - 2.4. Nome da unidade do SEI (ação de número 6 - Enviar teclas)
    3. Editar imagens 
        - 3.1. Na ação 7 (Aguardar conteúdo da página da Web)
        - 3.2. Na ação 11 (Clicar em link na página da Web) 


--8<-- "docs/partials/modelo_robo/ajuda.md"
