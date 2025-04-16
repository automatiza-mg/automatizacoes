# Automatização do *upload* do Parecer Final e elaboração da notificação

O desafio em questão consiste em automatizar a tarefa de inserir o Parecer Final, na Plataforma Digital da Secretaria de Estado de Cultura e Turismo - Secult. 
Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. 

O robô realiza a leitura dos dados da planilha de controle e, quando o texto `NÃO ENVIADA` está presente na coluna `NOTIFICAÇÃO`, executará ações distintas para readequações aprovadas ou reprovadas. Quando a readequação é aprovada, ele elaborará o e-mail de notificação e fará o seu *upload*, juntamente com o Parecer Final na Plataforma Digital. Caso a readequação seja reprovada, o robô realiza apenas o *upload* do e-mail.

## 1. O que o robô faz
- Leitura dos dados da planilha de controle.
- *Login* na Plataforma Digital.
- *Login* no SEI!MG.
- *Download* do Parecer Final, disponível no SEI!MG.
- Busca dos endereços de e-mail cadastrados na Plataforma Digital.
- Elaboração e envio da notificação aos beneficiários e/ou representantes legais, via e-mail.
- *Upload* do Parecer Final para a Plataforma Digital.

## 2. Passo a passo explicado do Automate

### 2.1. *"Main"*
Executa os subfluxos na seguinte ordem: `planilha_excel`, `login_sei`, `trocar_unidade_sei`, `login_plataforma` e `inserir_parecer_plataforma`.

### 2.2. *"planilha_excel"*
Este subfluxo faz a leitura dos dados da planilha de controle.

### 2.3. *"login_sei"*
Este subfluxo realiza o *login* no SEI!MG.

### 2.4. *"trocar_unidade_sei"*
Este subfluxo realiza a troca da unidade do SEI!MG.

### 2.5. *"login_plataforma"*
Este subfluxo realiza o *login* na Plataforma Digital da Secretaria de Estado de Cultura e Turismo - Secult.

### 2.6. *"inserir_parecer_plataforma"*
- Busca as linhas da planilha controle que contém o texto `NÃO ENVIADA`, na coluna `NOTIFICAÇÃO`;
- Acessa o respectivo Processo SEI!;
- Para readequação aprovada:
  - Localiza o último Parecer Final e faz o *download* do mesmo;
  - Faz a leitura do Parecer Final;
  - Busca o endereço de e-mail do beneficiário e/ou representante legal (subfluxo 'buscar_email').
  - Elabora e envia um e-mail, via SEI!MG, notificando o beneficiário e/ou representante legal (subfluxo 'enviar_email').
  - Assume a análise do projeto;
  - Faz o *upload* do Parecer Final na Plataforma Digital;
  - Revoga a análise do projeto.

- Para readequação reprovada:
  - Busca o projeto, na Plataforma Digital, por meio do número do protocolo;
  - Busca o endereço de e-mail do beneficiário e/ou representante legal.
  - Elabora e envia um e-mail, via SEI!MG, notificando o beneficiário e/ou representante legal.

## 3. Utilização do robô
- Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:
- [x]  `cpf`: inserir o número do CPF do usuário do SEI!MG e da Plataforma Digital.
- [x]  `senha_plataforma`: inserir a senha utilizada para acessar a Plataforma Digital.
- [x]  `senha_sei`: inserir a senha utilizada para acessar o SEI!MG.
- [x]  `orgao_sei`: inserir o órgão utilizado para acessar o SEI!MG.
- [x]  `unidade_sei`: inserir a unidade utilizada para acessar o SEI!MG.
- [x]  `pasta_planilha`: inserir o caminho da pasta que contém a planilha de controle.
- [x]  `pasta_download`: inserir o caminho de armazenamento dos arquivos baixados no computador.
- O robô abrirá todos os arquivos necessários e páginas da Web, assim, **certifique-se que nenhum arquivo Excel e/ou o navegador estejam abertos**.
- A pasta de armazenamento dos arquivos baixados no computador deve estar *vazia*.
- Faça o *download* e ative a extensão Power Automate do navegador.

## 4. Resultados
- Processo manual: em média 5 min.
- Processo automatizado: 2,5 min.

## 5. Códigos
- ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_main.txt)
- Subfluxo ['planilha_excel'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_planilha_excel.txt)
- Subfluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_login_sei.txt)
- Subfluxo ['trocar_unidade_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_trocar_unidade_sei.txt)
- Subfluxo ['login_plataforma'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_login_plataforma.txt)
- Subfluxo ['inserir_parecer_plataforma'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_inserir_parecer_plataforma.txt)
- Subfluxo ['buscar_email'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_buscar_email.txt)
- Subfluxo ['enviar_email'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/2_enviar_email.txt)