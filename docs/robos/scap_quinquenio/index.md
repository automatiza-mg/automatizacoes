---
comments: true
hide:
  - navigation
tags:
  - RH
   - SISAP
---

# Incluir quinquênio


## Informações gerais

| **Desenvolvedor**| Erik Tadeu de Morais  |
| ----------- | ------------------------------------ |
| **E-mail**       | erik.morais@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Excel**    | 2016 ou superior |

- [x] Robô destinado a inclusão de Quinquênio no SISAP para os servidores através da utilização da rotina Quinquênio adicional 10%, opção 01 - Incluir Quinquênio.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/scap_quinquenio/assets/fluxo.md"
    ```

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/quinquenio/quinquenio_main.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

:fontawesome-solid-2: :material-microsoft-excel: <a href="assets/inclusao_quinquenio.xlsx"download="inclusao_quinquenio.xlsx">__Clique aqui para baixar a planilha-modelo__</a>[^2]
{ .card }

:fontawesome-solid-3: :material-application-variable: __Crie a variável de entrada__ `usuario`, com as informações do seu usuário de acesso ao SISAP..
{ .card }

:fontawesome-solid-4: :material-application-variable: __Crie a variável de entrada__ `senha`, com as informações da sua senha de acesso ao SISAP.
{ .card }

:fontawesome-solid-5: :material-application-variable: __Crie a variável de entrada__ `caminho_documento` e atribua o caminho do arquivo na seção Valor Padrão.
{ .card }

</div>

## Observações 

__Instruções de preenchimento da planilha.__

- Para servidores que possuem masp de 6 dígitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>0######## 
- As colunas "DV" e "ADMISSÃO" deverão conter apenas o número, sem zero a esquerda.
- A coluna "E - REFERÊNCIA" deverá ser preenchida com a referência do quinqueno e deverá ser inserido o número "0" antes da referencia. Exemplo: 03 para a concessão do terceiro quinquenio, 05 para a concessão do quinto quinquenio, etc. Não é necessário inserir o numero "0" se o registro for a partir do 10° quinquenio. Basta preencher com o numero 10 em diante. Se for o caso, para inserir o numero "0" antes da referência, formatar os dados da coluna "E - REFERÊNCIA" da seguinte maneira: Formatar Células>Número>Personalizado>Tipo>#00.
- A coluna "F - TIPO" deverá ser preenchido com o tipo do quinquenio (A - administrativo ou M - Magisterio).
- A coluna "G - NATUREZA" deverá ser preenchida com o código da natureza do quinquenio.
- As colunas "H - DATA PUBLICAÇÃO" e  "I - DATA VIGÊNCIA" deverão ser preenchidas no formato 00/00/0000.
- A coluna "J - PERC" deverá ser preenchida com o percentual relativo ao quinquenio, geralmente o numero 10.
- A coluna "K - INSERIR OCORRÊNCIA (S/N)" deverá ser preenchida somente com "S" - SIM" ou "N" - NÃO" e serve para inserir ou não as ocorrências após a confirmação da inclusão da vantagem nos dados financeiros.
- A coluna "L - DESCRITOR DA OCORRÊNCIA" deve ser preenchida somente no caso de se optar por inserir a ocorrência (S - SIM) na coluna "K", e deverá conter a descrição do ocorrido. Para servidores que possuirem mais de uma concessão de quinquenio, inserir a ocorrência e seu descritor apenas no primeiro registro. Obs: o campo de "ocorrências" do Sisap costuma não aceitar certo tipos de caracteres, como por exemplo: ^, /, Ç, ~, além de alguns caracteres especiais, quando eles vem exportados da planilha. Deste modo, ao preencher a coluna "L", desconsiderar esses tipos de caracteres, e utilizar somente o texto. Por exemplo: "concessao terceiro quinquenio, vigencia 00-00-0000 conforme publicacao 00-00-0000".
- A coluna "M - STATUS"  e "N - OBSERVAÇÃO OCORRÊNCIA" não devem ser preenchidas, onde na coluna "N" será gravada a mensagem se a ocorrência foi efetuada ou não.                                     

--8<-- "docs/overrides/partials/modelo_robo/ajuda externos.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.
