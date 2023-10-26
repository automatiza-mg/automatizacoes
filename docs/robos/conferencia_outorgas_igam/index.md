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
  <iframe width="1280" height="720" src="" frameborder="0" allowfullscreen></iframe>
</div>

## Informações gerais

| **Responsável**       | Yan Carmo  |
| ----------- | ------------------------------------ |
| **E-mail**       | yan.carmo@planejamento.mg.gov.br |
| **Ferramenta**    | Power Automate Desktop |
| **Arquivo(s) auxiliar(es)**    | [conferencia-outorgas-IGAM.xlsx](https://github.com/lab-mg/automatizacoes/blob/main/docs/robos/conferencia_outorgas_igam/assets/conferencia-outorgas-igam.xlsx) |

## Funções desenvolvidas pelo robô

- Ler os dados sobre processos de outorga, em formato Excel.
- Acessar o site do IGAM e consultar a situação dos processos de outorga por Portaria.
- Passar as páginas de consulta do site do IGAM, para cada processo, e extrair os dados desejados para leitura e armazenamento.
- Comparar os dados do site com os da planilha e escrever uma nova coluna com um texto de marcação `conferido`.
- Salvar a planilha alterada e enviá-la por email.

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"


??? note "**Clique para copiar e colar**"

        --8<-- "assets/codigo_fonte.txt"


Agora, realize as seguintes adaptações para que seu robô comece a te ajudar:

1. Confira se a URL (caminho da página do site) acessada permanece a mesma.
2. Revise todas instâncias criadas (nomes dos arquivos, páginas da web, etc).
3. Revise e edite todas as variáveis criadas (ex.: nomes das colunas que serão criadas/preenchidas, etc).
4. Confira o caminho dos arquivos editados pelo robô no seu computador (`PATH
5. Certifique-se de haja ações para todas as operações desejadas que o robô execute

--8<-- "docs/partials/modelo_robo/importante.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"