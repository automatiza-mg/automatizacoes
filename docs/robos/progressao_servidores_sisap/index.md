---
comments: true
hide:
  - navigation
tags:
  - Treinamento SEPLAG
  - Pessoal
  - SISAP
---

# Progressão de servidores no SISAP

<div class="content-wrapper">
  <iframe width="320" height="180" src="" frameborder="0" allowfullscreen></iframe>
</div>

## Informações gerais

| **Responsável pelo desenvolvimento do protótipo**  | Yan Carmo  |
| ----------- | ------------------------------------ |
| **E-mail**  | yan.carmo@planejamento.mg.gov.br  |
| **Ferramenta**    | Power Automate Desktop |
| **Data do treinamento**       | 05/10/2023 |
| **Local**    | Sala SEE, Torre Minas, 11º andar |
| **Turma treinada**       | FHEMIG  |
| **Arquivo auxiliar** | [progressao-servidores-sisap.xlsx](https://github.com/automatiza-mg/automatizacoes/blob/main/docs/robos/progressao_servidores_sisap/assets/progressao_servidores_sisap.xlsx) |

## Funções desenvolvidas pelo protótipo:

- Ler os MASP dos servidores em uma planilha, em formato Excel;
- Acessar o SISAP e consultar a situação dos servidores referenciados na planilha;
- Passar as páginas de consulta do SISAP, para cada servidor/MASP, e aplicar a regra desejada (enviar teclas);
- Realizar as operações desejadas (no caso em tela, a progressão funcional), em escala, para os servidores mencionados na planilha;
- Atualizar a situação de progressão dos servidores na mesma planilha Excel aberta no início do processo, adaptando-a com a inclusão e/ou edição de novas colunas de informações necessárias e controle da operação (concluída, ou `Não se aplica`, por exemplo.
- Salvar a planilha alterada e enviá-la por email.

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/progressao_servidores_sisap/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? note "**Clique para copiar e colar**"

                --8<-- "docs/robos/progressao_servidores_sisap/assets/codigo_fonte.txt"

--8<-- "docs/partials/modelo_robo/importante.md"

--8<-- "docs/partials/modelo_robo/ajuda.md"
