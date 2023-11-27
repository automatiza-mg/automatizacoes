---
comments: true
hide:
  - navigation
tags:
  - PAE
---

# Robô PAE 1


## Informações gerais

| **Responsável**  | Alessandro Campos  |
| ----------- | ------------------------------------ |
| **E-mail**  | alessandro.campos@meioambiente.mg.gov.br |
| **Desenvolvedora**| Isabela Romancini  |
| **e-mail**       | isabela.romancini@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Arquivo(s) auxiliar(es)**    | [PAE.xlsx](https://github.com/lab-mg/automatizacoes/blob/maindocs/robos/pae/assets/) |

## Funções desenvolvidas pelo robô

- Faz login no SEI e pesquisa número do processo, após buscar seu número na a Planilha Base - Automatização 1;
- Baixa processo SEI, descompacta arquivos e os salva no computador;
- Preenche “Planilha Base - Automatização 1” informando que o processo foi baixado e que os arquivos foram descompactados;
- Cria uma nova planilha “Planilha Documentos - Automatização 1” para cada processo SEI;
- Verifica se há arquivos (PDF, shapefile e tif) corrompidos e preenche “Planilha Documentos - Automatização 1" informando se arquivo abriu ou se está corrompido;
- Verifica se no processo SEI há arquivos com formatos que não são aceitos para o PAE: KML, MPK e MXD; e Preenche Planilha Documentos - Automatização 1 informando se há arquivo com formato não aceito.

??? note "**Clique e veja o fluxo do robô**"

    ```mermaid
            --8<-- "docs/robos/pae/assets/fluxo.md"
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? note "**Clique para copiar e colar**"

        --8<-- "docs/robos/pae/assets/codigo_fonte.txt"

!!! note "**Importante:**" 

    Antes de executar este robô em especial, é importante seguir os seguintes passos:

    1. Verificar se a máquina em que o robô vai ser executado possui os seguintes programas instalados:
        - Microsoft Power Automate;
        - Extensão do Google Chrome ("Microsoft Power Automate" - sem ser o legacy);
        - 7-zip;
        - QGis.
    2. Criar planilha-base no Excel: "Número do processo SEI" na célula 1A e "Status" na 1B;
    3. Alterar configurações da pasta "download" para baixar arquivos numa pasta separada;
    4. Configurar como padrão:
        - Abrir arquivos em PDF no Adobe Acrobat;
        - Abrir arquivos shapefile no QGis;
        - Descompactar arquivos no 7-zip.

--8<-- "docs/partials/modelo_robo/ajuda.md"
