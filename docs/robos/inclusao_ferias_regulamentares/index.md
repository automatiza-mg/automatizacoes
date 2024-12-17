---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Incluir Concessão de Férias Regulamentares


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.51.00227.24333 |

- [x] Robô destinado a inclusão de Férias Regulamentares no SISAP para os servidores através da utilização da rotina Férias Regulamentares, opção 01 - Incluir Férias Regulamentares.
- [x] Reduz consideravelmente o tempo no procedimento e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/inclusao_ferias_regulamentares/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_robo_sisap.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô e cole em um novo fluxo MAIN__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_regulamentares/incluir_ferias_regulamentares_MAIN.txt){ target="_blank" }.
{ .card }

:fontawesome-solid-2::material-application-variable:__Crie as variáveis de entrada__ `usuario`[^1] e `senha`[^2].
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô de férias em período integral__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_regulamentares/subfluxo_ferias_per%C3%ADodo_integral.txt){ target="_blank" } e cole em um novo subfluxo `Ferias_Periodo_Integral`.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô de férias parceladas__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_regulamentares/subfluxo_ferias_parceladas.txt){ target="_blank" } e cole em um novo subfluxo `Ferias_Parceladas`.
{ .card }

[:fontawesome-solid-5: :material-application-variable: __Faça o download da planilha modelo__](javascript:void(0);).
{ #download-button .card path="assets/inclusao-ferias-regulamentares.csv" fileName="inclusao-ferias-regulamentares.xlsx" }

:fontawesome-solid-6: :material-application-variable:__Edite a planilha-modelo :warning:{ title='Veja informações abaixo'} e informe o caminho do arquivo salvo nas ações 20 e 100__.
{ .card }

</div>

## Informações para a planilha-modelo

- [ ] A planilha modelo contém exemplos de preenchimentos nas primeiras linhas, que deverão ser apagados para inclusão dos dados
- [ ] Para servidores que possuem masp de 6 digitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0########                                     
- [ ] As colunas "C - DV" e "D - ADMISSÃO" deverão conter apenas o número, sem zero à esquerda. 
- [ ] As colunas "G - NUMERO DE DIAS" e "K - DATA INICIO 2° PERIODO DE FÉRIAS" não deverão ser prenchidas nos casos de férias integrais. 
- [ ] A coluna "H - MÊS DE FÉRIAS" deverá ser preencida no formato de dois dígitos para os meses com um dígito. Por exemplo, mês 02, 03, 07. 
- [ ] A coluna "K - DATA INICIO 2° PERIODO DE FÉRIAS" deverá ser preenchida no formato 00/00/0000. 
- [ ] Para servidores que marcaram as férias em dois períodos, existindo a exclusão de um dos periodos de férias para remarcação, preencher até a coluna "J - DIA INICIO FÉRIAS". 
- [ ] A coluna "L" não deve ser preenchida, pois ela conterá o status após operação pelo robô.                   

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: MASP para acesso ao SISAP.
[^2]: Senha de acesso ao SISAP.

