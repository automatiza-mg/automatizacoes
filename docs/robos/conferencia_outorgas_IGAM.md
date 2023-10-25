---
comments: true
hide:
  - navigation
tags:
  - Treinamento SEPLAG
  - Outorgas ambientais
---

# Conferência de outorgas do IGAM

<div class="content-wrapper">
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allowfullscreen></iframe>
</div>

## Informações gerais

| **Responsável**       | Yan Carmo  |
| ----------- | ------------------------------------ |
| **E-mail**       | yan.carmo@planejamento.mg.gov.br |
| **Ferramenta**    | Power Automate Desktop |
| **Arquivo(s) auxiliar(es)**    | [conferencia-outorgas-IGAM.xlsx](https://github.com/lab-mg/automatizacoes/blob/main/robos/conferencia_outorgas_IGAM/conferencia-outorgas-IGAM.xlsx) |

## Funções desenvolvidas pelo robô

- Ler os dados sobre processos de outorga, em formato Excel.
- Acessar o site do IGAM e consultar a situação dos processos de outorga por Portaria.
- Passar as páginas de consulta do site do IGAM, para cada processo, e extrair os dados desejados para leitura e armazenamento.
- Comparar os dados do site com os da planilha e escrever uma nova coluna com um texto de marcação `conferido`.
- Salvar a planilha alterada e enviá-la por email.

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/fluxos/fluxo_modelo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"


??? note "**Clique para copiar e colar**"

        --8<-- "robos/conferencia_outorgas_IGAM/conferencia-outorgas-IGAM.txt"


Agora, realize as seguintes adaptações para que seu robô comece a te ajudar:

1. Adaptação 1.
2. Adaptação 2.
3. Adaptação 3.

--8<-- "docs/partials/modelo_robo/importante.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"