---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Incluir Concessão de Férias Prêmio


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.51.00227.24333 |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô destinado a inclusão de Concessão de Férias Prêmio no SISAP para os servidores através da utilização da rotina Férias Prêmio, opção 01 - Concessão de Férias Prêmio, opção 01 - Incluir Concessão de Férias Prêmio.
- [x] Reduz consideravelmente o tempo no procedimento e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/inclusao_ferias_premio/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_robo_sisap.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_premio/incluir_concess%C3%A3o_ferias_pr%C3%AAmio.txt) e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-2::material-application-variable:__Crie as variáveis de entrada__ `usuario`[^1] e `Senha`[^2].
{ .card }

[:fontawesome-solid-3: :material-microsoft-excel: __Clique aqui para baixar a planilha-modelo__](javascript:void(0);).
{ #download-button .card path="assets/inclusao-ferias-premio.csv" fileName="inclusao-ferias-premio.xlsx" }

:fontawesome-solid-4: :material-square-edit-outline:__Edite a planilha-modelo :warning:{ title='Veja informações abaixo'} e informe o caminho do arquivo salvo nas ações 16 e 122__.
{ .card }

</div>

## Informações para a planilha-modelo

- [ ] A planilha modelo contém exemplos de preenchimentos nas primeiras linhas, que deverão ser apagados para inclusão dos dados

- [ ] Para servidores que possuem masp de 6 digitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0########

- [ ] As colunas "C - DV" e "D - ADMISSÃO" deverão conter apenas o número, sem zero a esquerda. 

- [ ] A coluna "E - REFERENCIA" deverá ser preencida com numero da referencia das férias prêmio. 

- [ ] As colunas "F - DATA PUBLICAÇÃO" e "G - DATA VIGÊNCIA" devem ser preenchidas no formato 00/00/0000 . 

- [ ] A coluna "H -QUANTIDADE DE MESES" deverá ser preenchida com a quantidade de meses (3 meses) concedidos de férias prêmio.

- [ ] A coluna "I" não deve ser preenchida, pois ela conterá o status após operação pelo robô.

--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: MASP para acesso ao SISAP.
[^2]: Senha de acesso ao SISAP.

