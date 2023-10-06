---
comments: true
tags:
  - Compras CAFIMP
---

# Consulta Situação Cadastral de Fornecedores - CAFIMP

- **Responsável**: Isabela Romancini.
- **Data do treinamento**: 28/09/2023
- **Local**: Sala SEE, Torre Minas, 11º andar
- **Turma treinada**: órgãos diversos
- **Arquivo auxiliar**: [consulta-situacao-cadastral-fornecedores.xlsx](https://github.com/lab-mg/automatizacoes/blob/main/robos/consulta_situacao_cadastral_CAFIMP/consulta-situacao-cadastral-fornecedores.xlsx)

O robô para consulta de situação cadastral de fornecedores foi desenvolvido com a ferramenta Microsoft Power Automate e pode auxiliar na automação de tarefas relacionadas à gestão de compras e fornecedores.
Em linhas gerais ele é capaz de:

## Funções desenvolvidas pelo protótipo:

- Ler uma planilha, em formato Excel, contendo CNPJs de fornecedores.
- Consultar a situação cadastral desses fornecedores em diversos sites governamentais.
- Atualizar a situação cadastral desses fornecedores na mesma planilha Excel aberta no início do processo, determinando se eles estão impedidos ou não de participar de licitações com a administração pública.
- Salvar documentos (imagens e pdfs) que comprovem a consulta.

Essa automação oferece um processo eficiente de atualização da lista de fornecedores, economizando tempo em processos de compras e gestão de contratos.

## Robô em funcionamento

![type:video](https://cecad365.sharepoint.com/sites/LAB.mg/_layouts/15/embed.aspx?UniqueId=4a028dcd-334c-4156-b350-adaedeb4677f&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Automatização consulta empresas 1.3x.mp4)

## Montando o seu robô

Em primeiro lugar, é importante relembrar que o conteúdo desta página é um protótipo de robô. **Portanto, se você pretende utilizar este protótipo, tenha especial atenção às especificidades do problema que você quer solucionar, ajustando o código às suas necessidades.**

O arquivo contendo o código deste robô está armazenado [nesta página](https://github.com/lab-mg/automatizacoes/blob/main/robos/consulta_situacao_cadastral_CAFIMP/consulta-situacao-cadastral-fornecedores.txt). Para dar vida ao seu, clique na caixa **copiar e colar** abaixo, copie e cole o código disponível em um novo fluxo Power Automate Desktop.
Não se esqueça de personalizar seu novo robô, conforme orientado abaixo.

??? copy "**Consulta Situação Cadastral de Fornecedores CAFIMP**"

        --8<-- "robos/consulta_situacao_cadastral_CAFIMP/consulta-situacao-cadastral-fornecedores.txt"

**Importante**

Este protótipo utilizou uma planilha auxiliar, disponível [nesta pasta](https://github.com/lab-mg/automatizacoes/blob/main/robos/consulta_situacao_cadastral_CAFIMP/). Após copiar e colar o código em um novo fluxo no Power Automate, realize as seguintes adaptações para que seu robô começe a te ajudar:

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
