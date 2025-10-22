---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Inclui concessão de Férias Regulamentares


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.51.00227.24333 |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô destinado a inclusão de Férias Regulamentares no SISAP para os servidores através da utilização da rotina Férias Regulamentares, opção 01 - Incluir Férias Regulamentares.
- [x] Reduz consideravelmente o tempo no procedimento e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/inclusao_ferias_regulamentares/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_robo_sisap.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_regulamentares/incluir_ferias_regulamentares_MAIN.txt) e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-2: :material-application-variable: __Crie a variável de entrada__ `usuario`[^1].
{ .card }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `Senha`[^2].
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô - `Ferias_Periodo_Integral`__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_regulamentares/subfluxo_ferias_per%C3%ADodo_integral.txt)e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô - `Ferias_Parceladas`__](https://github.com/automatiza-mg/biblioteca-de-robos/raw/refs/heads/main/robos/site/scap/ferias_regulamentares/subfluxo_ferias_parceladas.txt){ target="_blank" } e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-6: :material-microsoft-excel: __Clique aqui para baixar a planilha modelo__](javascript:void(0);) [^3].
{ #download-button .card path="assets/inclusao-ferias-regulamentares.csv" fileName="inclusao-ferias-regulamentares.xlsx" }

:fontawesome-solid-7: :material-square-edit-outline:__Edite a planilha-modelo :warning:{ title='Veja informações abaixo'} e informe o caminho do arquivo salvo nas ações 20 e 100__.
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

--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: MASP para acesso ao SISAP.
[^2]: Senha de acesso ao SISAP.
[^3]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.

