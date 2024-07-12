---
date: 2024-05-20
authors: [andrelamor]
comments: true
categories:
  - Tira dúvidas
  - Ferramentas
---

# Criando ações de conversão de arquivo com auxílio da IA e do Power Shell

Na nossa primeira seção de **Tira-Dúvidas**, avaliamos como utilizar o Power Automate para converter e salvar arquivo de `word` para `pdf`, sem recorrer a ações de envios de teclas na interface gráfica do Windows. 

<!-- more -->

A interface gráfica de abrir ou salvar arquivos do Windows é sujeita a diferentes formas de visualização (ícones, lista, detalhes, etc, tal qual mostrado no print a seguir). Isso pode causar erro de um robô, caso sejam incluídas ações de navegação das opções dessas caixas de diálogo com `Enviar teclas` ou `Clique no elemento da interface gráfica`

![](../../../assets/images/windows.jpg)

A necessidade em questão era salvar um arquivo `word` em edição e convertê-lo para o formato `pdf`. Versões recentes do Windows comportam salvar um texto num formato `pdf`, mas isso também dependeria da navegação em caixa de diálogo, se o Power Automate dependesse da navegãção na interface gráfica do Windows, como mostrado abaixo:

![](../../../assets/images/word.jpg)

## Código do Power Shell com ajuda da IA :gemini:

Uma alternativa foi utilizar o Power Shell para a conversão. Porém, qual seria o código para ser aplicado? Aqui entrou o auxílio da ferramenta de IA Gemini, da Google. :rabbit::carrot: Com a inserção da pergunta em um texto relativamente simples no prompt, ela nos retornou o snippet [^1] abaixo:

````
# Define o caminho para o arquivo Word
$wordDocPath = "C:\Users\Andre\Documents\SIGES-SEPLAG\word-pdf.docx"

# Cria uma instância do aplicativo Word
$wordApp = New-Object -ComObject Word.Application

# Abre o documento Word
$wordDoc = $wordApp.Documents.Open($wordDocPath)

# Salva o documento como PDF
$wordDoc.SaveAs([ref]$wordDocPath.Replace(".docx", ".pdf"), [ref]17)

# Fecha o documento e o aplicativo Word
$wordDoc.Close()
$wordApp.Quit()
````
A conversão via código do Power Shell foi incluída com a ação **Executar script do Power Shell**, como mostrado na figura abaixo:

![](../../../assets/images/pdf-powershell.jpg)

Acesse [aqui](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/word_pdf_power_shell.txt) o código do Power Automate que cola um print de tela, fecha e salva o arquivo word em formato `.docx` e o converte para `.pdf`, usando o snippet do Power Shell em uma das ações.

[^1]: pequenos blocos de código reutilizável que você pode inserir em um arquivo de código

