---
comments: true
tags:
  - Robôs
  - Robôs - Pessoal
---

# Progressão de servidores no SISAP

- **Responsável pelo desenvolvimento do protótipo**: Yan.

O robô para consulta de situação cadastral de fornecedores foi desenvolvido com a ferramenta Microsoft Power Automate e pode auxiliar na automação de tarefas relacionadas à gestão de compras e fornecedores.

Em linhas gerais ele é capaz de:

- Ler uma planilha, em formato Excel, os MASP dos servidores;
- Acessar o SISAP e consultar a situação dos servidores referenciados na planilha;
- Passar as páginas de consulta do SISAP, para cada servidor/MASP, e aplicar a regra desejada (enviar teclas);
- Realizar as operações desejadas (no caso em tela, a progressão funcional), em escala, para os servidores mencionados na planilha; 
- Atualizar a situação de progressão dos servidores na mesma planilha Excel aberta no início do processo, adaptando a planilha com a inclusão e/ou edição de novas colunas de informações necessárias e controle da operação (concluída, ou `Não se aplica`, por exemplo.
- Salvar a planilha alterada e enviá-la por email.


## Robô em funcionamento

![type:video](https://cecad365.sharepoint.com/sites/LAB.mg/_layouts/15/embed.aspx?UniqueId=4a028dcd-334c-4156-b350-adaedeb4677f&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Automatização consulta empresas 1.3x.mp4)

## Montando o meu robô

Em primeiro lugar, é importante relembrar que o conteúdo desta página é um protótipo de robô. **Portanto, se você pretende utilizar este protótipo, tenha especial atenção às especificidades do problema que você quer solucionar, ajustando o código às suas necessidades.**

Este robô está armazenado [nesta comunidade do GitHub](https://github.com/Andrelamor/treinamentos-power-automate/blob/main/progressao-fhemig-05-10.md)^[1]. Para dar vida ao seu, clique na caixa **copiar e colar** abaixo, copie e cole o código disponível em um novo fluxo Power Automate Desktop.
Não se esqueça de personalizar seu novo robô, conforme orientado abaixo.

??? copy "copiar e colar"

        python
        --8<-- "https://raw.githubusercontent.com/Andrelamor/treinamentos-power-automate/main/progressao-fhemig-05-10.md"

Após copiar e colar o código em um novo fluxo no Power Automate, realize as seguintes adaptações para que seu robô começe a te ajudar:

  -Inclua login e senha do SISAP.
  - Revise todas instâncias criadas.
  - Revise e edite todas as variáveis criadas.

!!! question "Precisando de ajuda?"

    Algum erro está ocorrendo em uma das fazes de criação de seu robô?
    Não tem problema.
    Abaixo temos um espaço para perguntas e respostas.
    Dá uma olhadinha lá.
    Quem sabe alguém já não fez uma pergunta com o mesmo problema que você está enfrentando.
    Caso prefira mande um e-mail para [escolher-email@dominio.com]().

    Ótimo trabalho!
