---
date: 2025-01-06
draft: false
authors: [dudsguedes, kinzinho666]
comments: true
categories:
  - Ferramentas
  - Power Automate
---

# Passo a passo para instalação do Python no computador

Nos projetos desenvolvidos aqui no Automatiza.MG, identificamos a necessidade de utilização do Python em alguns robôs para melhor funcionalidade. Nest post, apresentamos um passo a passo para a instalação dele em seu computador. 

<!-- more -->   

### **O que é Python?**

Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e versatilidade. Criada em 1991 por Guido van Rossum, ela é amplamente utilizada em diversas áreas, como desenvolvimento web, ciência de dados, inteligência artificial e automação.

No contexto do Microsoft Power Automate, Python pode ser utilizado para criar scripts personalizados que ampliam as capacidades dos fluxos de automação. Com Python, é possível desenvolver automações avançadas, como:

* Manipulação de dados complexos diretamente nos fluxos;
* Integração com APIs externas para acessar ou enviar informações;
* Automatização de tarefas que exigem lógica personalizada ou manipulação de arquivos;
* Criação de scripts que interagem com outras ferramentas ou sistemas que não possuem conectores nativos no Power Automate.

Com sua flexibilidade ele se torna uma excelente opção para quem busca automações mais robustas e/ou personalizadas.


### **Download do Instalador do Python**

Clique [aqui](https://www.python.org/downloads/) para acessar ao site e fazer o download do instalador. Quando a página estiver aberta, clique em Downloads > Python (número da versão), conforme print abaixo: 

![Imagem Download Site Python](https://github.com/user-attachments/assets/d45dd156-dba9-4f9c-9736-9a4c500ddff1)

**Observação:** na elaboração deste manual, o número da versão mais recente disponível do Python é a 3.13.1. Sendo assim, pode ser que quando você esteja utilizando este manual de instalação exista outra versão mais recente, divergindo do exemplo da imagem acima.

### **Instalação do Python**

**I.** Finalizado o download do instalador, clique com o botão direito no mesmo e selecione `Executar como administrador`

![Executar como adm](https://github.com/user-attachments/assets/ad8c833c-03d9-470c-812f-aec76b563ebe)

**II.** Logo após, aparecerá a caixa abaixo, onde você deverá clicar `Sim`

![3](https://github.com/user-attachments/assets/45580947-1052-4da2-9ef6-fc32f32250de)


**III.** Selecione as caixas `Use admin privileges when installing py.exe` e `Add python.exe to PATH` e em seguida, clique em `Customize installation` 

![4](https://github.com/user-attachments/assets/e926daa8-322d-4228-8fd9-ac2356887810)



**IV.** Selecione todas as caixas desta página e em seguida, clique em `Next` 

![5](https://github.com/user-attachments/assets/266a9769-39ef-4b23-a8ba-952f209ac120)



**V.** Selecione as caixas `Associate files with Python (requires the 'py' laucher)`, `Create shortcuts for installed applications` e `Add Python to environment variables` desta página e em seguida, clique em `Browse` 


![6](https://github.com/user-attachments/assets/c13108bf-aded-4009-bea9-f0e7a96246f6)


**VI.** Em seguida, abrirá a caixa abaixo, onde você deverá clicar em `Criar Nova Pasta` dentro de `C:`



![7](https://github.com/user-attachments/assets/fd40370d-2561-4317-81e7-23676c609cef)


**VII.** Renomeie a `Nova Pasta` para `Python` (diretamente no ícone na pasta, conforme destacado na imagem abaixo) e clique em `OK`


![8](https://github.com/user-attachments/assets/51ebb6e5-6420-4a13-82b5-ab8230a3ca32)

**VIII.** Confira se o local de instalação está conforme nosso exemplo abaixo e clique em `Install`

![9](https://github.com/user-attachments/assets/1cf2d902-4b48-4635-be7a-7c09a213078c)


**IX.** Aguarde a instalação terminar


![10](https://github.com/user-attachments/assets/1abfe485-5a00-4412-8ed5-ac9b8e5c3184)

**X.** Clique em `Disable path lenght limit`

![11](https://github.com/user-attachments/assets/e387bdbb-dfce-4ea8-8205-ad818c1195da)


**XI.** Clique em `Close`

![12](https://github.com/user-attachments/assets/de1b0bbb-af5e-4817-99f9-090dfa3a37e8)

### **Confirmação da Instalação**

Neste tópico, temos o passo a passo para verificar se a instalação foi realizada com sucesso.

**I.** Digite `cmd` na barra de pesquisa do Windows e abra o `Prompt de Comando` 

![13](https://github.com/user-attachments/assets/d8b23ca1-2df4-47e3-a572-385ba4d2e92a)


**II.** Digite `python --version` e aperte a tecla enter

![14](https://github.com/user-attachments/assets/90c310e4-72fe-44b6-9e32-50e634d83ed3)


Caso retorne a mensagem **Python + número da versão instalada** (conforme já informado, no momento da criação deste passo a passo a versão é a 3.13.1), a instalação foi realizada com sucesso! 🚀🚀


## Saiba Mais

Explore canais e materiais de referência para aprofundar seus conhecimentos sobre o **Power Automate**:

- [Documentação Oficial](https://docs.microsoft.com/pt-br/power-automate/)
- [Canal do Power Automate no YouTube](https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA)
- [Comunidade Power Automate](https://powerusers.microsoft.com/t5/Power-Automate-Community/ct-p/MPACommunity)

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.


