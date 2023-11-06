---
comments: true
hide:
  - navigation
tags:
  - Projeto SCAP
  - Pessoal
---

# Guias Judiciais

<video width="640"  controls>
    <source src="assets/video.mp4" type="video/mp4">
</video>

## Informações gerais

| **Responsável**       | André Amorim  |
| ----------- | ------------------------------------ |
| **E-mail**       | andre.amorim@planejamento.mg.gov.br |
| **Ferramenta**    | Power Automate Desktop |
| **Arquivo(s) auxiliar(es)**    | [planilha prodemge](), [planilha]()  |

## Funções desenvolvidas pelo robô

- Capturar e guardar dados de processo de pagamento, credores e devedores de planilha.
- Acessar sites e gerar guias para pagamento.
- Salvar guias emitidas e copiar número do código de barras.
- Acessar o SIAFI e processar o pagamento das guias emitidas.
- Preencher a planilha de controle com as informações das guias geradas e pagas

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/guias_judiciais/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"


??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/guias_judiciais/assets/codigo_fonte.txt"


--8<-- "docs/partials/modelo_robo/importante.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"
