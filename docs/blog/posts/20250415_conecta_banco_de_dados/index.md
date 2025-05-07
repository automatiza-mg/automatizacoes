---
date: 2025-04-15
draft: true
authors: [halvesromano]
comments: true
categories:
  - Power Automate
---

# Conectando o Power Automate Desktop a um banco de dados MySQL

A utilização desse robô, em geral, será apenas um subfluxo de um robô completo. O intuito desse post é explicar como fazer uma conexão direta do Power Automate Desktop com um Banco de Dados MySQL.

<!-- more -->

!!! Info
    Para as configurações a seguir, serão necessários os dados de acesso ao banco de dados (URL, login e senha)

## Instalando o conector
O primeiro passo para a configuração do Banco de Dados no robô é a instalação de um arquivo que vai funcionar como conector entre o banco e o Power Automate Desktop. Antes de instalar, é necessário fazer o download desse conector, chamado Connector/ODBC (aqui será utilizada a versão 9.3.0, a mais atual no momento desse post).

[Nesse link é possível fazer o download do conector](https://dev.mysql.com/downloads/connector/odbc/)

Depois de baixado o conector, basta proceder com sua instalação básica/típica.

## Criando a fonte de conexão
Instalado o conector, o passo seguinte é configurar a fonte de dados da conexão. Para isso, é necessário abrir um programa nativo do Windows chamado Fonte de Dados ODBC (:warning: importante abrir o programa na mesma opção de bits do download do passo inicial). 

![programa-fonte-de-dados](https://github.com/user-attachments/assets/9cd896a1-78ca-4be4-815d-379eafb9ec04)

Nele, selecione a aba "DSN de Arquivo", e clique em "Adicionar". Caso tenha seguido todos os passos corretamente até aqui, na lista com os drivers de fonte de dados que abrir, deverá aparecer o driver "MySQL ODBC 'versão instalada' Unicode Driver", como mostrado a seguir.

![lista-drivers-conector](https://github.com/user-attachments/assets/e325af5e-37d3-4ef2-b479-ade50ae2c53b)

Selecione esse driver conforme a imagem e clique em "Avançar". Na tela seguinte, defina um nome para esse conector e em "Procurar", selecione em qual pasta quer salvar esse conector (um ícone será criado nessa pasta indicada, que será usado posteriormente). <br>Por fim, clique em "Avançar" e na tela seguinte em "Concluir".

Automaticamente deverá abrir uma tela onde as credenciais do banco de dados deverão ser preenchidas com a URL ou IP, usuário e senha do banco.<br>

!!! Info
    :warning: Ao preencher as credenciais, essa tela iniciará o reconhecimento do acesso ao banco que poderá parar ou sobrecarregar a máquina por alguns segundos, então é importante aguardar um pouco. 
    
Ao reconhecer o acesso, a lista de "Database" mostrará os bancos que seu login tem acesso. Selecione o banco correto e clique em "Ok". Na tela do Administrador de Fonte de Dados ODBC, aparecerá o ícone da fonte de dados criado, clique em "Ok" novamente.

![credenciais-banco-de-dados-preenchida](https://github.com/user-attachments/assets/1c74f493-1e2a-4c37-b3f8-f9c5a361cf08)


### USANDO A FONTE DE DADOS NO POWER AUTOMATE

Após abrir no Power Automate o fluxo que será usada a conexão com o Banco de Dados, crie um novo subfluxo para configurar a conexão com o Banco. A primeira ação a ser usada nesse fluxo será "Abrir conexão SQL". Na tela de configuração dessa ação, será necessário preencher a cadeia de conexão. Para isso clique no botão "Criar cadeia de conexão".

![criar cadeia de conexão](https://github.com/user-attachments/assets/14dd012c-d1a4-4fe6-a14f-e6bf509499bb)

Na tela seguinte selecione a opção "Microsoft OLE DB Provider for ODBC Drivers" e clique em "Avançar". Marque a opção "Usar cadeia de conexão" e clique em "Criar". Encontre fonte de dados criada nos passos anteriores (arquivo no formato .dsn normalmente) na pasta em que ele estiver salvo, selecione a mesma e clique em "Ok". 

![seleção do conector](https://github.com/user-attachments/assets/eb154ab9-408b-4744-98d5-93769765b4c0)

A tela de configuração incial da conexão Banco abrirá novamente, porém já preenchida com os dados, conforme feito na criação da fonte. Clique em "Ok" e aguarde, nesse momento o próprio Power Automate fará a conexão com o Banco de Dados (o computador pode travar um pouco e demorar alguns segundos). O campo "Cadeia de Conexão" será preenchido com os dados do Banco. Clique em "Ok" e posteriormente, na configuração da ação do Power Automate, clique em "Salvar".

![ação abrir SQL no power automate](https://github.com/user-attachments/assets/e7b9e15e-6b9d-4c88-a071-6726168e1593)

Daí pra frente, basta usar a ação "Executar instrução SQL" com os respectivos códigos em SQL para manuseio e utilização do Banco de Dados. :rocket::rocket:
