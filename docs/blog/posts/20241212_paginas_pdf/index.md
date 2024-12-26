---
date: 2024-12-12
draft: true
authors: [dudsguedes, kinzinho666]
comments: true
categories:
  - Ferramentas
  - Power Automate
---

# Contagem do total de páginas de um arquivo PDF

Na montagem de um robô em específico, nos deparamos com o desafio de contar o total de páginas de um arquivo específico em PDF, a fim de configurar o robô para dividir este arquivo em outros PDFs, contendo no máximo 10 (dez) páginas cada.  Este post contém duas alternativas para resolução do problema, sendo uma Low Code e outra com a utilização do Python.  

<!-- more -->   

## Alternativas

### **Solução Low Code**
Nesta alternativa, temos o caminho para solucionar o problema com um mínimo de codificação manual, a qual chamamos de solução _**Low Code**_ (conforme já explicado [nesse post](https://automatiza-mg.github.io/automatizacoes/blog/descomplicado-ferramenta-_no-code_-e-_low-code_/_)), realizando os seguintes passos:

**I.** Criar uma variável de entrada com nome `caminho_pdf` e valor padrão contendo o caminho do PDF que será editado:



![imagem](https://github.com/user-attachments/assets/99fa3bd4-a545-40a3-8fa1-dbd52892dae7)




**II.** Incluir as ações de `Iniciar novo Chrome`, solicitando que seja aberta qualquer URL válida (no nosso exemplo, utilizamos o site do Google) e `Enviar teclas`, com o texto a ser enviado: {Alt}({D}){Delete}`%caminho_pdf%`{Return}:

![imagem (1)](https://github.com/user-attachments/assets/b2cc535f-d585-48c0-ad53-cb0766249b4e)



**Observações:** 
* Caso seu navegador possua "Google Lens" ativado, acesse chrome://flags na barra de pesquisas, digite Lens e desative as opções exibidas na página
* Alt+D é o atalho para o cursor ir para a barra de endereço URL no Google Chrome
                            
A parte do código correspondentes às ações das linhas 1 e 2 seguem para cópia e utilização:

````
/# - No Google Chrome, acessar chrome://flags na barra de pesquisas, digitar Lens e desativar as opções exibidas na página
#/
WebAutomation.LaunchChrome.LaunchChrome Url: $'''https://www.google.com/''' WindowState: WebAutomation.BrowserWindowState.Maximized ClearCache: False ClearCookies: False WaitForPageToLoadTimeout: 60 Timeout: 60 PiPUserDataFolderMode: WebAutomation.PiPUserDataFolderModeEnum.AutomaticProfile TargetDesktop: $'''{\"DisplayName\":\"Computador local\",\"Route\":{\"ServerType\":\"Local\",\"ServerAddress\":\"\"}}''' BrowserInstance=> navegador
MouseAndKeyboard.SendKeys.FocusAndSendKeysByInstanceOrHandle WindowInstance: navegador TextToSend: $'''{Alt}({D}){Delete}%caminho_pdf%{Return}''' DelayBetweenKeystrokes: 60 SendTextAsHardwareKeys: True
WAIT 2
````

**III.** Incluir as ações de `Enviar teclas`, com o texto a ser enviado: {Tab: 2}{End}{Tab: 6}{Control}({C}). Com essa sequência, o robô irá colocar o cursor do mouse no conta páginas, tendo colocado o documento em sua última página, conforme exemplo abaixo e copiará o total de páginas indicado:


![imagem (2)](https://github.com/user-attachments/assets/811c797d-1a73-43a2-8842-4390f565bd8c)




**Observação Importante:** 
* A quantidade de teclas Tab utilizada pode variar de navegador para navegador, sendo necessários alguns ajustes. Os 02 primeiros são para o cursor ir para a página do documento, já os outros 06 são para o cursor chegar até a caixinha indicada na imagem acima.


A parte do código correspondente ao Item III segue abaixo para cópia e utilização:

````
/# Os números de tabs variam de navegador para navegador!!!
Os 2 Tab são para ir para a página do documento
O End é para ir para a última página, a fim de deixar o marcador de página na última do PDF
Os 6 Tab são para o cursor chegar até a caixinha que indica o total de páginas no marcador presente no cabeçalho#/
MouseAndKeyboard.SendKeys.FocusAndSendKeysByInstanceOrHandle WindowInstance: navegador TextToSend: $'''{Tab: 2}{End}{Tab: 6}{Control}({C})''' DelayBetweenKeystrokes: 700 SendTextAsHardwareKeys: True
WAIT 2
````

**IV.** Incluir as ações de `Obter texto da área de transferência` e `Converter texto em número`:

![imagem (3)](https://github.com/user-attachments/assets/779eec25-57bb-4e00-a36f-68f3d620c87f)



A parte do código correspondente às ações das linhas 7 e 8 segue abaixo para cópia e utilização:

````
Clipboard.GetText Text=> total_paginas
Text.ToNumber Text: total_paginas Number=> total_paginas_numero
````

**V.** Incluir um `Loop` com as seguintes configurações:

![imagem (4)](https://github.com/user-attachments/assets/0aec80ae-eddd-4222-b475-6fa376496f73)


Dentro do `Loop` criado, serão incluídas as ações de `If` e `Else` e um `Rótulo` ao final dele: 

![imagem (5)](https://github.com/user-attachments/assets/d33fb07f-e79d-46a0-9a08-ac2913f0ce11)

Segue a parte do código que é representada na imagem acima:

````
LOOP pagina FROM 1 TO total_paginas_numero STEP 10
    IF (pagina + 9) <= total_paginas_numero THEN
        Pdf.ExtractPages PDFFile: caminho_pdf PageSelection: $'''%pagina% - %pagina + 9%''' ExtractedPDFPath: caminho_pdf IfFileExists: Pdf.IfFileExists.AddSequentialSuffix ExtractedPDFFile=> ExtractedPDF
            ON ERROR
                GOTO fim
            END
    ELSE
        Pdf.ExtractPages PDFFile: caminho_pdf PageSelection: $'''%pagina% - %total_paginas_numero%''' ExtractedPDFPath: caminho_pdf IfFileExists: Pdf.IfFileExists.AddSequentialSuffix ExtractedPDFFile=> ExtractedPDF
            ON ERROR
                GOTO fim
            END
    END
END
LABEL fim

````











# Saiba Mais

Explore canais e materiais de referência para aprofundar seus conhecimentos sobre o **Power Automate**:

- [Documentação Oficial](https://docs.microsoft.com/pt-br/power-automate/)
- [Canal do Power Automate no YouTube](https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA)
- [Comunidade Power Automate](https://powerusers.microsoft.com/t5/Power-Automate-Community/ct-p/MPACommunity)
