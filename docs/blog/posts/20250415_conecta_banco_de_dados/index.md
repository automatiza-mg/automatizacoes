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
    Para as configurações a seguir, serão necessários os dados de acesso ao Banco de dados (URL, login e senha)

## Instalando o conector
O primeiro passo para a configuração do Banco de Dados no robô é a instalação de um arquivo que vai funcionar como conector entre o banco e o Power Automate Desktop. Antes de instalar, é necessário fazer o download desse conector, chamado Connector/ODBC (aqui será utilizada a versão 9.3.0, a mais atual no momento desse post).

[Nesse link é possível fazer o download do conector](https://dev.mysql.com/downloads/connector/odbc/)

Depois de baixado o conector, basta proceder com sua instalação básica/típica.

## Criando a fonte de conexão

<!-- As informações abaixo estão presentes nas primeiras páginas da documentação. Para iniciar o processo de criação de um Sistema no SEI, é preciso Efetuar o cadastro do sistema cliente através do menu Administração/Sistemas:

![novo_sistema](https://github.com/user-attachments/assets/e4d93e30-2183-4aac-bdce-fd91809428f5)


Em seguida, acessar o ícone Serviços na lista de sistemas:

![icone_servicos](https://github.com/user-attachments/assets/57b03244-c51a-4c86-9ca3-10560ee21e0a)


Então, cadastrar os serviços do sistema:

![novo_servico](https://github.com/user-attachments/assets/63218307-75d9-480c-bd0c-85296b3ae789)


Com isso, o serviço será criado. Para continuar, basta acessar o ícone Operações na lista de serviços do sistema:

![clique_operacoes](https://github.com/user-attachments/assets/b7c4116a-7ab7-429c-8f61-8f857bd9cb99)


Aqui é o momento de selecionar a opção de "Consultar Procedimento", que é exatamente o que o robô da API faz, buscando os processos e fazendo download. Portanto, deve-se cadastrar as operações permitidas para o serviço, que no caso é "Consultar Procedimento":

![tipo_operacoes](https://github.com/user-attachments/assets/a71d0145-f10f-4cf6-9b72-e5aff31bf1a1)
![image](https://github.com/user-attachments/assets/d1602ea2-48ab-4804-84f7-3ca97aaeda51)

-->
## Criando um token para o sistema SEI

Por fim, para gerar o token, basta acessar o serviço criado e acessar o ícone Gerar Chave de Acesso na lista de serviços do sistema:

![gerar_token](https://github.com/user-attachments/assets/31c49bba-1cd5-4800-8eba-c0f78f91b3f4)


A chave estará disponível para cópia apenas no momento da geração pois é armazenada de forma criptografada no banco de dados. É necessário sinalizar a opção Autenticação/Chave de Acesso no cadastro do serviço e passar a chave no parâmetro Identificacao das chamadas de Web Services.

Assim, com essas informações em mão, é possível criar as variáveis no fluxo e prosseguir para a utilização do robô que está na biblioteca de robôs.

Para mais informações, [consulte a documentação da API](https://github.com/automatiza-mg/handbook/blob/main/docs/assets/SEI-WebServices-v40.3._240130_172029%201.pdf).



