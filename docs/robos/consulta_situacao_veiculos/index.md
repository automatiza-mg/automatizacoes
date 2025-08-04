---
comments: true
hide:
  - navigation
tags:
  - Gestão de Frota
---

# Consulta Situação de Veículos

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô desenvolvido para automatizar a consulta de multas veiculares, ideal para gestores de frotas com grande volume de veículos.
- [x] Lê uma planilha Excel contendo placas e chassis dos veículos.
- [x] Consulta automaticamente a situação dos veículos nos seguintes sites: Cidadão MG, Auto PRF e Portal de Multas de Trânsito (DNIT).

Links utilizados:

[Cidadão MG](https://cidadao.mg.gov.br/) | [Auto PRF](https://pesquisa-auto.prf.gov.br/#/pesquisa/consultar-debitos) | [Portal de Multas de Trânsito](https://servicos.dnit.gov.br/multas/nada-consta/emissao-certidao)


- [x] Atualiza as informações diretamente na mesma planilha Excel, indicando o status de cada veículo em cada fonte consultada.
- [x] Aguarda o carregamento completo das páginas para garantir que os dados estejam corretos.
- [x] Reduz o tempo de trabalho manual e minimiza riscos

## Pré-requisitos

<div class="grid" markdown>

:material-play-circle: __Power Automate__ na [versão correta](#informacoes-gerais)
{ .card }

:fontawesome-brands-chrome: __Chrome__ como navegador
{ .card }

:simple-gitextensions:  __Extensão Chrome__ para [Power Automate](https://chromewebstore.google.com/detail/microsoft-power-automate/ljglajjnnkapghbckkcmodicjhacbfhk) ativada.
{ .card }

:material-login-variant:  __Conta no site__ [cidadão.mg.gov.br](cidadão.mg.gov.br).
{ .card }
</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

:fontawesome-solid-1: :material-web: Faça login no site __[cidadao.mg.gov.br](cidadao.mg.gov.br)__.
{ .card }

[:fontawesome-solid-2: :material-microsoft-excel: __Clique aqui para baixar a planilha modelo__](javascript:void(0);)[^1].
{ #download-button .card path="assets/planilha_modelo_multa.csv" fileName="planilha_modelo_multa.xlsx" }

:fontawesome-solid-3: :material-square-edit-outline: __Complete as colunas da planilha modelo__ com a placa e o chassi dos veículos que serão consultados e salve.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô - Main__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_consulta_frota/consulta_frota_main.txt)[^2] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô - DNIT__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_consulta_frota/consulta_frota_dnit.txt)[^2] e cole em um novo subfluxo[^3] Power Automate Desktop.
{ .card }

[:fontawesome-solid-6: :octicons-copy-16: __Copie o código do robô - 'cidadao.mg'__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_consulta_frota/consulta_frota_cidadao_mg.txt)[^2] e cole em um novo subfluxo[^3] Power Automate Desktop.
{ .card }

[:fontawesome-solid-7: :octicons-copy-16: __Copie o código do robô - PRF__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_consulta_frota/consulta_frota_prf.txt)[^2] e cole em um novo subfluxo[^3] Power Automate Desktop.
{ .card }

:fontawesome-solid-8: :material-application-variable: Abra a primeira ação  __'Iniciar Excel'__, edite o campo  __'caminho do documento'__ e selecione o documento salvo no passo anterior.
{ .card }

</div>

!!! note "Observação"

    Se o robô apresentar falhas no carregamento das páginas, algumas linhas poderão ficar em branco. Nessa situação, recomenda-se que o usuário salve a planilha e execute novamente o fluxo.
  

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Qualquer modificação além da inclusão de mais CNPJs na planilha Excel pode exigir modificações no código original do robô. Download desta planilha não é suportado na versão mobile desta página.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: O robô contém um fluxo principal chamado "Main" e três subfluxos, cada um responsável por consultar um dos sites.
Para isso, é necessário criar três novos subfluxos. No canto superior direito da interface, clique em "Subfluxo" > "Novo subfluxo" e crie os seguintes fluxos: "DNIT", "PRF" e "cidadao.mg".
Certifique-se de colar cada trecho de código no subfluxo correspondente, mantendo a organização do processo.


