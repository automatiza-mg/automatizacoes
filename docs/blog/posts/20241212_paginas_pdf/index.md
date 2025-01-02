---
date: 2024-12-26
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
Nesta alternativa, temos o caminho para solucionar o problema com um mínimo de codificação manual, a qual chamamos de solução _**Low Code**_ (conforme já explicado [nesse post](../20231226_descomplicado/index.md)), realizando os seguintes passos:

**I.** Criar uma variável de entrada com nome `caminho_pdf` e valor padrão contendo o caminho do PDF que será editado:



![imagem](https://github.com/user-attachments/assets/99fa3bd4-a545-40a3-8fa1-dbd52892dae7)




**II.** Incluir as ações de `Iniciar novo Chrome`, solicitando que seja aberta qualquer URL válida (no nosso exemplo, utilizamos o site do Google) e `Enviar teclas`, com o texto a ser enviado: {Alt}({D}){Delete}`%caminho_pdf%`{Return}:

![imagem (1)](https://github.com/user-attachments/assets/b2cc535f-d585-48c0-ad53-cb0766249b4e)



**Observações:** 

* Caso seu navegador possua "Google Lens" ativado, acesse chrome://flags na barra de pesquisas, digite Lens e desative as opções exibidas na página

* Alt+D é o atalho para o cursor ir para a barra de endereço URL no Google Chrome
                            

**III.** Incluir as ações de `Enviar teclas`, com o texto a ser enviado: {Tab: 2}{End}{Tab: 6}{Control}({C}). Com essa sequência, o robô irá colocar o cursor do mouse no conta páginas, tendo colocado o documento em sua última página, conforme exemplo abaixo e copiará o total de páginas indicado:


![imagem (2)](https://github.com/user-attachments/assets/811c797d-1a73-43a2-8842-4390f565bd8c)




**Observação Importante:** 

* A quantidade de teclas Tab utilizada pode variar de navegador para navegador, sendo necessários alguns ajustes. Os 02 primeiros são para o cursor ir para a página do documento, já os outros 06 são para o cursor chegar até a caixinha indicada na imagem acima.



**IV.** Incluir as ações de `Obter texto da área de transferência` e `Converter texto em número`:

![imagem (3)](https://github.com/user-attachments/assets/779eec25-57bb-4e00-a36f-68f3d620c87f)



**V.** Incluir um `Loop` com as seguintes configurações:

![imagem (4)](https://github.com/user-attachments/assets/0aec80ae-eddd-4222-b475-6fa376496f73)


**VI.** Dentro do `Loop` criado, serão incluídas as ações de `If` e `Else` e um `Rótulo` ao final dele: 

![imagem (5)](https://github.com/user-attachments/assets/d33fb07f-e79d-46a0-9a08-ac2913f0ce11)

Clicando [aqui](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/paginas-pdf.txt) você acessará o código completo do robô apresentado[^1].


# Solução Python

Nesta alternativa, utilizaremos a linguagem Python e a biblioteca `PyPDF2` para manipulação de arquivos PDF.  

### I. Definições de Variáveis

Antes de executar o código, ajuste as variáveis conforme a estrutura de diretórios em sua máquina. Segue a descrição:

- **`CaminhoDoArquivo`**:
  - Descrição: Caminho completo do arquivo PDF incluindo o nome do arquivo.
  - Exemplo: `C:\Documentos\projeto\arquivo.pdf`

- **`CaminhoPastaDoArquivo`**:
  - Descrição: Diretório onde o arquivo PDF está localizado.
  - Exemplo: `C:\Documentos\projeto`

- **`CaminhoArquivosDivididos`**:
  - Descrição: Diretório onde os arquivos resultantes serão armazenados após a divisão.
  - Exemplo: `C:\Documentos\projeto\arquivos_divididos`

- **`AcessoPython`**:
  - Descrição: Diretório de instalação do Python em sua máquina.
  - Observação: Certifique-se de que o Python foi instalado corretamente seguindo [esta orientação](#). Substitua pelo caminho real de instalação.
  - Exemplo: `C:\Python\versao\python.exe`

### Configuração e Utilização

1. **Prepare o Ambiente**:
   - Certifique-se de que o Python está instalado e configurado em sua máquina.
   - Instale utiliznado o prompt de comando como `ADMINISTRADOR`, a biblioteca necessária utilizando o seguinte comando:
     ```bash
     pip install pypdf2
     ```
2. **Baixar o Script Python**:
   - 📥 **[Baixar conta_pagina.py](scripts/conta_pagina.py)**   


2. **Modifique o Código**:
   - Edite as variáveis mencionadas acima no script Python para refletirem a estrutura de seus diretórios locais.


3. **Resultados**:
   - Após a execução bem-sucedida do fluxo, os arquivos divididos estarão disponíveis no diretório definido em `CaminhoArquivosDivididos`.

---

**Robô TXT**:
   - 📥 **[Baixar Robô](fluxo_pdf_python.txt)** 

---

**Fluxo**:

![fluxo](https://github.com/user-attachments/assets/ecbe3263-c8fa-4ed7-9aab-05a25ed1f271)


---


## Saiba Mais

Explore canais e materiais de referência para aprofundar seus conhecimentos sobre o **Power Automate**:

- [Documentação Oficial](https://docs.microsoft.com/pt-br/power-automate/)
- [Canal do Power Automate no YouTube](https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA)
- [Comunidade Power Automate](https://powerusers.microsoft.com/t5/Power-Automate-Community/ct-p/MPACommunity)

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.


