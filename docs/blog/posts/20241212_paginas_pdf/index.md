

# Contagem do total de páginas de um arquivo PDF

Na montagem de um robô em específico, nos deparamos com o desafio de contar o total de páginas de um arquivo X em PDF, a fim de configurar o robô para dividir este arquivo em outros PDFs, com no máximo 10 páginas cada.   

## Alternativas

### No Code
Nesta alternativa, temos o caminho para realização da contagem das páginas sem a utilização de códigos, a qual chamamos de solução _No Code_, realizando os seguintes passos:

**I.** Criar uma variável de entrada com nome `caminho_pdf` e valor padrão contendo o caminho do PDF a ser contado:



![image](https://github.com/user-attachments/assets/c681845e-929a-4678-9bf7-d6e83c0f5fde)



**II.** Incluir as ações de `Iniciar novo Chrome`, solicitando que seja aberta qualquer URL válida (no nosso exemplo, utilizamos o site do Google) e `Enviar teclas`, com o texto a ser enviado: {Alt}({D}){Delete}`%caminho_pdf%`{Return} (Alt+D é atalho para o cursor ir para a barra de endereço):



![image](https://github.com/user-attachments/assets/67c96716-1f77-409b-9b20-c162721c254d)



As partes do código correspondentes às ações das linhas 1 e 2 seguem abaixo, para cópia e utilização:

````
WebAutomation.LaunchChrome.LaunchChrome Url: $'''https://www.google.com/''' WindowState: WebAutomation.BrowserWindowState.Maximized ClearCache: False ClearCookies: False WaitForPageToLoadTimeout: 60 Timeout: 60 PiPUserDataFolderMode: WebAutomation.PiPUserDataFolderModeEnum.AutomaticProfile TargetDesktop: $'''{\"DisplayName\":\"Computador local\",\"Route\":{\"ServerType\":\"Local\",\"ServerAddress\":\"\"}}''' BrowserInstance=> navegador
MouseAndKeyboard.SendKeys.FocusAndSendKeysByInstanceOrHandle WindowInstance: navegador TextToSend: $'''{Alt}({D}){Delete}%caminho_pdf%{Return}''' DelayBetweenKeystrokes: 60 SendTextAsHardwareKeys: True
WAIT 2

````

**III.** Incluir as ações de `Enviar teclas`, com o texto a ser enviado: {Tab: 2}{End}{Tab: 6}{Control}({C}). Com essa sequência, o robô irá colocar o cursor do mouse no conta páginas, tendo colocado o documento em sua última página, conforme exemplo abaixo:



![image (1)](https://github.com/user-attachments/assets/d5cb919e-b572-4701-9d69-f2e93aaa2255)


**Observação Importante:** A quantidade de teclas Tab utilizada pode variar de navegador para navegador, sendo necessários alguns ajustes. Os 02 primeiros são para o cursor ir para a página do documento, já os outros 06 são para o cursor chegar até a caixinha indicada na imagem acima.


A parte do código correspondente ao Item III segue abaixo, para cópia e utilização:

````
/# Os números de tabs variam de navegador para navegador!!!
Os 2 Tab são para ir para a página do documento
O End é para ir para a última página, a fim de deixar o marcador de página na última do PDF
Os 6 Tab são para o cursor chegar até a caixinha que indica o total de páginas no marcador presente no cabeçalho#/
MouseAndKeyboard.SendKeys.FocusAndSendKeysByInstanceOrHandle WindowInstance: navegador TextToSend: $'''{Tab: 2}{End}{Tab: 6}{Control}({C})''' DelayBetweenKeystrokes: 700 SendTextAsHardwareKeys: True
WAIT 2


````


________________________________________________________________________________________________________________________________________________________________________________












# Saiba Mais

Explore canais e materiais de referência para aprofundar seus conhecimentos sobre o **Power Automate**:

- [Documentação Oficial](https://docs.microsoft.com/pt-br/power-automate/)
- [Canal do Power Automate no YouTube](https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA)
- [Comunidade Power Automate](https://powerusers.microsoft.com/t5/Power-Automate-Community/ct-p/MPACommunity)
