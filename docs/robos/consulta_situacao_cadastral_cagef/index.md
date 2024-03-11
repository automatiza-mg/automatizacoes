---
comments: true
hide:
  - navigation
tags:
  - Compras Públicas
---

# Consulta Situação Cadastral de Fornecedores - CAGEC

<video width="640"  controls>
    <source src="#" type="video/mp4">
</video>

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar a busca da [situação cadastral de fornecedores](https://www.cagef.mg.gov.br/fornecedor-web/br/gov/prodemge/seplag/fornecedor/publico/index.zul).
- [x] Ler uma planilha, em formato Excel, contendo CNPJs de fornecedores.
- [x] Consultar a situação cadastral desses fornecedores no site do CAGEC.
- [x] Atualizar a situação cadastral desses fornecedores na mesma planilha Excel aberta no início do processo, determinando se eles estão impedidos ou não de participar de licitações com a administração pública.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

--8<-- "docs/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/consulta_situacao_cadastral_cagef.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:material-application-variable: __Crie a variável de entrada__] `lista_fornecedores`[^2]
com o caminho desta planilha Excel modelo.
{ .card .download-button path="assets/fornecedores.csv" fileName="fornecedores.xls" }

</div>

--8<-- "docs/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Qualquer modificação além da inclusão de mais CNPJs na planilha pode exigir modificações no código original do robô.
