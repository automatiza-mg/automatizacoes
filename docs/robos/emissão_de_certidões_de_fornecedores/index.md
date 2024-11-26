---
comments: true
hide:
  - navigation
tags:
  - Compras
---

# Emite certidões de fornecedores para processos de compra


## Informações gerais

| **Desenvolvedores**| Extensionistas FJP (Diego Silva, João Vitor Fonseca e Leidi Alves) e AutomatizaMG (André Amorim)  |
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


[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô de emissão de CRC__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/crc-cagef.txt){ target="_blank" }[^1], cole em um novo subfluxo `CRC` e :material-application-variable:__Crie a variável de entrada__ `pasta`[^3].
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô de consulta ao CNPJ__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/consulta-cnpj.txt){ target="_blank" }[^1] e cole em um novo subfluxo `CNPJ`.
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô de consulta à CND Federal__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cnd-federal.txt){ target="_blank" }[^1] e cole em um novo subfluxo `CND_FEDERAL`.
{ .card }

[:fontawesome-solid-6: :octicons-copy-16: __Copie o código do robô de consulta ao FGTS__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/consulta_fgts.txt){ target="_blank" }[^1] e cole em um novo subfluxo `FGTS`.
{ .card }

[:fontawesome-solid-7: :octicons-copy-16: __Copie o código do robô de consulta à Justiça do Trabalho__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/consulta_justi%C3%A7a_trabalho.txt){ target="_blank" }[^1] e cole em um novo subfluxo `JUSTIÇA_TRABALHO`.
{ .card }

[:fontawesome-solid-8: :octicons-copy-16: __Copie o código do robô de consulta à CND Estadual de Minas Gerais__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cnd-mg-siare.txt){ target="_blank" }[^1] e [cadastro de endereço](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/endere%C3%A7o-siare.txt) e cole em 2 novos subfluxos `CND_MG` e `endereço_CND_MG`. :warning:{ title='Para empresas de MG' }
{ .card }

[:fontawesome-solid-9: :octicons-copy-16: __Copie o código do robô de consulta à CND Municipal de Belo Horizonte__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cnd-pbh.txt){ target="_blank" }[^1] e cole em um novo subfluxo `CND_BH`.:warning:{ title='Para empresas de BH' }
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Contendo o caminho da pasta onde será salva a planilha-modelo.
[^3]: Contendo o caminho da pasta onde serão salvos o CRC ou as certidões dos fornecedores..

