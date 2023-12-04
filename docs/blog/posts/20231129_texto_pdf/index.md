---
date: 2023-11-29
draft: true
authors: [andrelamor]
comments: true
categories:
  - Ferramentas
  - Scraping
---

# Como extrair um texto de um arquivo PDF

Neste exemplo, a necessidade é guardar o número do boleto ou guia de pagamento gerada em um [arquivo pdf](https://github.com/lab-mg/automatizacoes/blob/main/docs/robos/texto_pdf/texto-pdf.jpg).

<!-- more -->

O número do boleto da imagem abaixo, bem como outras informações deste documento, são extraídas e salvas em formato de tabela.

![](assets/texto-pdf.jpg)

??? copy "**Código-Fonte**"

        --8<-- "assets/texto_pdf.txt"

![](assets/codigo.png)

A lista resultante da aplicação deste código no Power Automate aparece como na figura abaixo, e o código de barras do boleto ficou guardado na posição 11 da lista criada:

![](assets/lista.png)
