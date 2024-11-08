---
comments: true
hide:
  - navigation
tags:
  - Compras
---

# Emite certidões de fornecedores para processos de compra


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.49.00202.24289 |

- [x] Robô que emite certidões para instrução de processo de compra, principalmente o CRC a partir do CAGEF.
- [x] Utiliza subfluxos para cada uma das certidões necessárias (CND, CNPJ, FGTS, Justiça), caso não haja CRC Ativo.
- [x] Depende de planilha de apoio para pesquisar os CNPJ e anotar os resultados das consultas ao sites das certidões.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/emissão_de_certidões_de_fornecedores/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código principal na MAIN__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes-fornecedores-main.txt){ target="_blank" }[^1] e __Crie a variável de entrada__ `planilha`[^2].
{ .card }

[:fontawesome-solid-2: :material-application-variable: __Faça o download da planilha modelo__](javascript:void(0);).
{ #download-button .card path="assets/cnpj-fornecedores.csv" fileName="cnpj-fornecedores.xlsx" }


[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô de emissão de CRC__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/crc-cagef.txt){ target="_blank" }[^1], cole em um novo subfluxo `CRC` e :material-application-variable:__Crie as variáveis de entrada__ `pasta`[^3] e `site_cagef`[^4].
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô de consulta ao CNPJ__](){ target="_blank" }[^1], cole em um novo subfluxo `CNPJ` e :material-application-variable: __Crie a variável de entrada__ `site_cnpj`[^5].
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô de consulta à CND Federal__](){ target="_blank" }[^1], cole em um novo subfluxo `CND_FEDERAL` e :material-application-variable: __Crie a variável de entrada__ `site_cnd_federal`[^6].
{ .card }

[:fontawesome-solid-6: :octicons-copy-16: __Copie o código do robô de consulta ao FGTS__](){ target="_blank" }[^1], cole em um novo subfluxo `FGTS` e :material-application-variable: __Crie a variável de entrada__ `site_fgts`[^7].
{ .card }

[:fontawesome-solid-7: :octicons-copy-16: __Copie o código do robô de consulta à Justiça do Trabalho__](){ target="_blank" }[^1], cole em um novo subfluxo `JUSTIÇA_TRABALHO` e :material-application-variable: __Crie a variável de entrada__ `site_justiça`[^8].
{ .card }

[:fontawesome-solid-8: :octicons-copy-16: __Copie o código do robô de consulta à CND Estadual de Minas Gerais__](){ target="_blank" }[^1], cole em um novo subfluxo `CND_MG`.:warning:{ title='Para empresas de MG' } e :material-application-variable: __Crie a variável de entrada__ `site_siare`[^9].
{ .card }

[:fontawesome-solid-9: :octicons-copy-16: __Copie o código do robô de consulta à CND Municipal de Belo Horizonte__](){ target="_blank" }[^1], cole em um novo subfluxo `CND_BH`.:warning:{ title='Para empresas de BH' } e :material-application-variable: __Crie a variável de entrada__ `site_pbh`[^10].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Contendo o caminho da pasta onde será salva a planilha-modelo.
[^3]: Contendo o caminho da pasta onde serão salvos o CRC ou as certidões dos fornecedores..
[^4]: [Endereço da página inicial do site do CAGEF](https://www.cagef.mg.gov.br/fornecedor-web/br/gov/prodemge/seplag/fornecedor/publico/index.zul).
[^5]: .
[^6]: .
[^7]:
[^8]:
[^9]: