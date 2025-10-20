---
comments: true
hide:
  - navigation
tags:
  - Compras
---

# Emite certidões de fornecedores para processos de compra


## Informações gerais

| **Desenvolvedores**| Extensionistas FJP (Diego Silva, João Vitor Fonseca e Leidi Alves) e Automatiza.MG (André Amorim)  |
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

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_robo_cagef.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :material-microsoft-excel: __Clique aqui para baixar a planilha modelo__](javascript:void(0);)[^1].
{ #download-button .card path="assets/cnpj-fornecedores.csv" fileName="cnpj-fornecedores.xlsx" }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô - `Main`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/certidoes-fornecedores-main.txt){ target="_blank" }[^2] e cole em um novo fluxo do Power Automate Desktop.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô - `CRC`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/crc-cagef.txt){ target="_blank" }[^2], cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô - `CNPJ`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/consulta-cnpj.txt){ target="_blank" }[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô - `CND_Federal`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/cnd-federal.txt){ target="_blank" }[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-6: :octicons-copy-16: __Copie o código do robô - `FGTS`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/consulta_fgts.txt){ target="_blank" }[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-7: :octicons-copy-16: __Copie o código do robô - `Justiça_Trabalho`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/consulta_justiça_trabalho.txt){ target="_blank" }[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-8: :octicons-copy-16: __Copie o código do robô - `CND_MG`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/cnd-mg-siare.txt){ target="_blank" }[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-9: :octicons-copy-16: __Copie o código do robô - `SIARE_SEF_MG`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/endereço-siare.txt) [^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.:warning:{ title='Para empresas de MG' }
{ .card }

[:fontawesome-solid-1::fontawesome-solid-0: :octicons-copy-16: __Copie o código do robô - `CND_PBH`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/certidoes_fornecedores/cnd-pbh.txt){ target="_blank" }[^2] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop. :warning:{ title='Para empresas de BH' }
{ .card }

:fontawesome-solid-1::fontawesome-solid-1: :material-application-variable: __Crie a variável de entrada__ `planilha`[^3].
{ .card }

:fontawesome-solid-1::fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `pasta`[^4].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Contendo o caminho da pasta onde será salva a planilha-modelo.
[^4]: Contendo o caminho da pasta onde serão salvos o CRC ou as certidões dos fornecedores.

