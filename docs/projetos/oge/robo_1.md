# Automatização do *upload* da Declaração de Incentivo e envio de notificação

O desafio em questão consiste em automatizar a tarefa de inserir as Declarações de Incentivo (DI), após a sua homologação, na Plataforma Digital da Secretaria de Estado de Cultura e Turismo - Secult. 

Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O robô realiza a leitura dos dados da planilha de controle e, quando o texto `INSERIR DI NA PLATAFORMA` está presente, o *download* da respectiva DI e anexos - disponíveis no Sistema Eletrônico de Informações (SEI!MG) - é iniciado. Posteriormente, o robô faz o *upload* desses documentos na Plataforma Digital, envia um e-mail notificando o beneficiário e/ou representante legal e, ao final, substitui a planilha de controle pela versão atualizada.

## 1. O que o robô faz
- Leitura dos dados da planilha de controle.
- *Login* na Plataforma Digital.
- *Login* no SEI!MG.
- *Download* da DI e anexos, disponíveis no SEI!MG.
- *Upload* da DI e anexos para a Plataforma Digital.
- Elabora e envia a notificação aos beneficiários e/ou representantes legais, via e-mail.

## 2. Como funciona? Passo a passo explicado do Automate
### 2.1. *"Main"*
Executa os subfluxos na seguinte ordem: `planilha_excel`, `login_sei`, `trocar_unidade_sei`, `login_plataforma` e `inserir_di_plataforma`.

### 2.2. *"planilha_excel"*
Este subfluxo faz a leitura dos dados da planilha de controle e define a página a ser utilizada.

### 2.3. *"login_sei"*
Este subfluxo realiza o *login* no SEI!MG.

### 2.4. *"trocar_unidade_sei"*
Este subfluxo realiza a troca da unidade do SEI!MG.

### 2.5. *"login_plataforma"*
Este subfluxo realiza o *login* na Plataforma Digital da Secretaria de Estado de Cultura e Turismo - Secult.

### 2.6. *"inserir_di_plataforma"*
- Para cada linha da planilha de controle que contém o texto `INSERIR DI NA PLATAFORMA`, o robô realiza as seguintes ações:
  - Acessa o Processo SEI!;
  - Localiza todas as DI e anexos no processo, realizando o *download* desses documentos;
  - Faz a leitura da DI;
  - Busca o projeto, na Plataforma Digital, por meio do número do protocolo;
  - Assume a análise do projeto;
  - Faz o *upload* da DI e anexos;
  - Insere as devidas informações no campo `detalhamento`.
  - Revoga a análise do projeto.
  - Busca o endereço de e-mail do beneficiário e/ou representante legal.
  - Envia um e-mail, via SEI!MG, notificando o beneficiário e/ou representante legal.

## 3. Utilização do robô
- Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:
    - [x] `cpf`: inserir o número do CPF do usuário do SEI!MG e da Plataforma Digital.
    - [x] `senha_plataforma`: inserir a senha utilizada para acessar a Plataforma Digital.
    - [x] `senha_sei`: inserir a senha utilizada para acessar o SEI!MG.
    - [x] `orgao_sei`: inserir o órgão utilizado para acessar o SEI!MG.
    - [x] `unidade_sei`: inserir a unidade utilizada para acessar o SEI!MG.
    - [x] `pasta_planilha`: inserir o caminho da pasta que contém a planilha de controle.
    - [x] `pasta_download`: inserir o caminho de armazenamento dos arquivos baixados no computador.
    - [x] `anexo_email`: inserir o caminho do arquivo `.pdf` que orienta os próximos passos.
- O robô abrirá todos os arquivos necessários e páginas da Web, assim, **certifique-se que nenhum arquivo Excel e/ou o navegador estejam abertos**.
- A pasta de armazenamento dos arquivos baixados no computador deve estar **vazia**.
- Certifique-se de que a extensão Power Automate do navegador esteja habilitada.

## 4. Resultados
- Processo manual: em média 5,5 min.
- Processo automatizado: 3 min.

## 5. Códigos
- ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/1_main.txt)
- Subfluxo ['planilha_excel'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/1_planilha_excel.txt)
- Subfluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/1_login_sei.txt)
- Subfluxo ['trocar_unidade_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/1_trocar_unidade_sei.txt)
- Subfluxo ['login_plataforma'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/1_login_plataforma.txt)
- Subfluxo ['inserir_di_plataforma'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/1_inserir_di_plataforma.txt)