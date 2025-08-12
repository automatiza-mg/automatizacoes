---
comments: true
hide:
  - navigation
tags:
  - Compras
---

# Consulta à situação cadastral de fornecedores - CAFIMP

![type:video](https://www.youtube.com/embed/ijJdrQYm6vM)

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar a busca da [situação cadastral de fornecedores](https://www.cagef.mg.gov.br/fornecedor-web/br/gov/prodemge/seplag/fornecedor/publico/index.zul).
- [x] Ler uma planilha, em formato Excel, contendo CNPJs de fornecedores.
- [x] Consultar a situação cadastral desses fornecedores no site do CAFIMP.
- [x] Atualizar a situação cadastral desses fornecedores na mesma planilha Excel aberta no início do processo, determinando se eles estão impedidos ou não de participar de licitações com a administração pública.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/consulta_situacao_cadastral_cafimp/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/consulta_situacao_cadastral_cafimp.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :material-microsoft-excel: __Clique aqui para baixar a planilha modelo__](javascript:void(0);)[^2].
{ #download-button .card path="assets/fornecedores.csv" fileName="fornecedores.xlsx" }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `Caminho_excel` com o caminho onde a planilha modelo foi salva.
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `Caminho_pasta_automatiza` onde serão salvos os _prints_ de tela com os resultados das consultas.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.
