---
comments: true
hide:
  - navigation
tags:
  - RH
---

# Gera certificados


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | automatizamg@planejamento.mg.gov.br|
| **Ferramenta**    | Excel com VBA e Power Point |
| **Versão Excel**    | 2016 ou superior |


- [x] Gera certificados a partir de um modelo e de uma lista de informações.
- [x] Salva os certificados em PDF, com o nome da pessoa participante.

## Pré-requisitos

<div class="grid" markdown>

:material-microsoft-excel:  __Excel instalado__ no computador.
{ .card }

:material-file-powerpoint: __Power point instalado__ no computador.
{ .card }

:material-play-circle: __Aba desenvolvedor__ habilitada no Excel
{ .card }


</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

:fontawesome-solid-1: :material-microsoft-excel: <a href="./assets/Planilha_modelo.xlsm" download="Planilha modelo para gerar certificado.xlsm">__Baixe a planilha-modelo.__</a> e habilite o conteúdo ao abri-la.
{ .card }

:fontawesome-solid-2: :material-file-powerpoint: <a href="./assets/Certificado_modelo.pptx" download="Certificado modelo.pptx">__Baixe o certificado-modelo.__</a>
{ .card }

:fontawesome-solid-3: :material-microsoft-excel: __Preencha os dados da planilha de excel__ sem alterar ou excluir colunas. Mantenha o formato das informaçoes [^1].
{ .card }

:fontawesome-solid-4: :material-microsoft-excel: __Acesse a area de VBA__ da planilha de excel clicando no menu 'desenvolvedor' > 'vba'; ou aperte alt +f11.
{ .card }

:fontawesome-solid-5: :material-microsoft-excel: __Altere as informações__ indicadas pelas linhas da cor verde e pelos colchetes '[]'.
{ .card }

:fontawesome-solid-6: :material-file-powerpoint: __Altere o certificado-modelo__ de acordo com sua preferência, mantendo as caixas de texto da forma como estão. Lembre-se de alterar o nome da secretaria. [^2]
{ .card }


</div>

##Informações extras
Essa automatização foi feita baseada no vídeo <a href= "https://www.youtube.com/watch?v=NXJvP0JAvlw"> __Como Integrar o Excel com o PowerPoint - Gerador de Certificados"__</a>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Preencha somente os nomes completos dos participantes, o nome do evento, a quantidade de horas e a data completa. Mantenha a quantidade de horas com a palavra "horas". Mantenha a data com o formato __dia__ de __mês__ de __ano__
[^2]: Não delete as caixas de "Nome completo"; "Nome do evento"; "Qte de horas" e "Data completa". Essas caixas estão interligadas com o excel e, por isso, podem ser movimentadas no slide, não podem ser deletadas. Os demais textos do slide podem ser alterados ou removidos. 