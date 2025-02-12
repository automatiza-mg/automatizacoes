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

- [x] Robô dedicado a facilitar a consulta de multas e pendências veiculares. Ideal para gestores de frotas que administram um grande volume de veículos.
- [x] Ler uma planilha, em formato Excel, contendo a placa e chassi dos veículos.
- [x] Consultar a situação dos veículos no site [https://cidadao.mg.gov.br/](https://cidadao.mg.gov.br/)
- [x] Atualizar a situação desses veículos na mesma planilha Excel aberta no início do processo, determinando se eles estão regulares ou irregulares.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

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


[:material-application-variable: __Clique aqui para baixar a planilha modelo__](javascript:void(0);)[^1].
{ #download-button .card path="assets/planilha_modelo_multa.csv" fileName="planilha_modelo_multa.xlsx" }

:material-microsoft-excel: __Complete as colunas da planilha modelo__ com a placa e o chassi dos veículos que serão consultados e salve.
{ .card }

[:octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/consulta_veicular/consulta_veicular.txt)[^2] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:material-application-variable: Abra a primeira ação  __'Iniciar Excel'__, edite o campo  __'caminho do documento'__ e selecione o documento salvo no passo anterior.
{ .card }

</div>

!!! note "Observação"

    Se o site cidadao.mg apresentar falhas no carregamento das páginas, algumas linhas poderão ficar em branco. Nessa situação, recomenda-se que o usuário crie uma nova planilha com as placas não consultadas e execute o robô novamente.
  

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Qualquer modificação além da inclusão de mais CNPJs na planilha Excel pode exigir modificações no código original do robô. Download desta planilha não é suportado na versão mobile desta página.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.


