---
comments: true
hide:
  - navigation
tags:
  - Projeto SCAP
  - Pessoal
---

# Folha Entidades - pessoal ATIVO

<div class="content-wrapper">
  <iframe width="1280" height="720" src="" frameborder="0" allowfullscreen></iframe>
</div>

## Informações gerais

| **Responsável**       | Yan Carmo e André Amorim  |
| ----------- | ------------------------------------ |
| **E-mail**       | andre.amorim@planejamento.mg.gov.br |
| **Ferramenta**    | Power Automate Desktop |

## Funções desenvolvidas pelo robô

- Abrir uma planilha de excel, identificar CNPJ de entidades credoras
- Identificar as fontes para pagamentos (GFIMP) das entidades na mesma planilha
- Abrir e operar o SIAFI para pagar os valores devidos às entidades identificadas, por fonte
- Gravar uma confirmação de cada pagamento finalizado na planilha aberta e salvá-la

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/folha_bancos_entidades/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"


??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/folha_bancos_entidades/assets/codigo_fonte.txt"


--8<-- "docs/partials/modelo_robo/importante.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"
