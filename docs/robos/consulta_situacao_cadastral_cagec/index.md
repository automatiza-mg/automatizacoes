---
comments: true
hide:
  - navigation
tags:
  - Treinamento SEPLAG
  - Compras
  - CAGEC
---

# Consulta Situação Cadastral de Fornecedores - CAGEC

<div class="content-wrapper">
  <iframe width="1280" height="720" src="" frameborder="0" allowfullscreen></iframe>
</div>

## Informações gerais

| **Responsável pelo desenvolvimento do protótipo**       | Isabela Romancini|
| ----------- | ------------------------------------ |
| **E-mail**  | isabela.romancini@planejamento.mg.gov.br  |
| **Ferramenta**    | Power Automate Desktop |
| **Data do treinamento**       | 28/09/2023 |
| **Local**    | Sala SEE, Torre Minas, 11º andar |
| **Turma treinada**       | órgãos diversos  |
| **Arquivo auxiliar**: | [consulta-situacao-cadastral-fornecedores.xlsx](https://github.com/lab-mg/automatizacoes/blob/main/docs/robos/consulta_situacao_cadastral_cagec/assets/consulta_situacao_cadastral_fornecedores.xlsx) |

## Funções desenvolvidas pelo protótipo:

- Ler uma planilha, em formato Excel, contendo CNPJs de fornecedores.
- Consultar a situação cadastral desses fornecedores no site do CAGEC.
- Atualizar a situação cadastral desses fornecedores na mesma planilha Excel aberta no início do processo, determinando se eles estão impedidos ou não de participar de licitações com a administração pública.
- Criar pasta e salvar imagens e pdfs do site que comprovem a consulta.


??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/consulta_situacao_cadastral_cagec/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/consulta_situacao_cadastral_cagec/assets/codigo_fonte.txt"

--8<-- "docs/partials/modelo_robo/importante.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"
