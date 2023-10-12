---
comments: true
tags:
  - treinamentos
  - outorgas IGAM
---

# Conferência de outorgas do IGAM 

- **Responsável pelo desenvolvimento do protótipo**: Yan
- **Data do treinamento**: 11/10/2023
- **Local**: Sala SEE, Torre Minas, 11º andar
- **Turma treinada**: IGAM
- **Arquivo auxiliar**: [conferencia-outorgas-IGAM.xlsx](https://github.com/lab-mg/automatizacoes/blob/main/robos/conferencia_outorgas_IGAM/conferencia-outorgas-IGAM.xlsx)

## Funções desenvolvidas pelo protótipo:

- Ler os dados sobre processos de outorga, em formato Excel;
- Acessar o site do IGAM e consultar a situação dos processos de outorga por Portaria;
- Passar as páginas de consulta do site do IGAM, para cada processo, e extrair os dados desejados para leitura e armazenamento;
- Comparar os dados do site com os da planilha e escrever uma nova coluna com um texto de marcação `conferido`;
- Salvar a planilha alterada e enviá-la por email.

## Robô em funcionamento

![type:video](https://cecad365.sharepoint.com/sites/LAB.mg/_layouts/15/embed.aspx?UniqueId=4a028dcd-334c-4156-b350-adaedeb4677f&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Automatização consulta empresas 1.3x.mp4)

## Montando o seu robô

Em primeiro lugar, é importante relembrar que o conteúdo desta página é um protótipo de robô. **Portanto, se você pretende utilizar este protótipo, tenha especial atenção às especificidades do problema que você quer solucionar, ajustando o código às suas necessidades.**

O arquivo contendo o código deste robô está armazenado [nesta página](https://github.com/lab-mg/automatizacoes/blob/main/robos/conferencia_outorgas_IGAM/conferencia-outorgas-IGAM.txt). Para dar vida ao seu, clique na caixa **copiar e colar** abaixo, copie e cole o código disponível em um novo fluxo Power Automate Desktop. 

Não se esqueça de personalizar seu novo robô, conforme orientado abaixo.


??? copy "**Conferência Outorgas IGAM**"

                --8<-- "robos/conferencia_outorgas_IGAM/conferencia-outorgas-IGAM.txt"

**Importante**

Este protótipo utilizou uma planilha auxiliar, disponível [nesta pasta](https://github.com/lab-mg/automatizacoes/blob/main/robos/conferencia_outorgas_IGAM/). Após copiar e colar o código em um novo fluxo no Power Automate, realize as seguintes adaptações para que seu robô começe a te ajudar:

  - Confira se a URL (caminho da página do site) acessada permanece a mesma.

  - Revise todas instâncias criadas (nomes dos arquivos, páginas da web, etc).

  - Revise e edite todas as variáveis criadas (ex.: nomes das colunas que serão criadas/preenchidas, etc).

  - Confira o caminho dos arquivos editados pelo robô no seu computador (`PATH`) 

  - Certifique-se de haja ações para todas as operações desejadas que o robô execute


!!! question "Precisando de ajuda?"

    Algum erro está ocorrendo em uma das fazes de criação de seu robô?
    Não tem problema.
    Abaixo temos um espaço para perguntas e respostas.
    Dá uma olhadinha lá.
    Quem sabe alguém já não fez uma pergunta com o mesmo problema que você está enfrentando.
    Caso prefira mande um e-mail para [escolher-email@dominio.com]().

    Ótimo trabalho!
