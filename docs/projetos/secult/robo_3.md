# Automatização da elaboração do Parecer Final

O desafio em questão consiste em automatizar a tarefa de elaborar o Parecer Final de Readequação da Secult. 

Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O robô faz o *login* no SEI!MG e realiza a leitura dos dados da planilha controle. Para cada processo SEI!MG o robô busca a última análise, faz a leitura das informações e elabora o Parecer Final.

## 1. O que o robô faz
- Leitura dos dados da planilha de controle.
- *Login* no SEI!MG.
- Leitura da última análise.
- Elabora o Parecer Final.

## 2. Passo a passo explicado do Automate

### 2.1. *"Main"*
Executa os subfluxos na seguinte ordem: `login_sei`, `trocar_unidade_sei`, `planilha_excel`, `elaborar_parecer`.

### 2.2. *"login_sei"*
Este subfluxo realiza o *login* no SEI!MG.

### 2.3. *"trocar_unidade_sei"*
Este subfluxo realiza a troca da unidade do SEI!MG.

### 2.4. *"planilha_excel"*
Este subfluxo faz a leitura dos dados da planilha de controle.

### 2.5. *"elaborar_parecer"*
- Busca as linhas da planilha controle que contém o número do processo SEI!;
- Acessa o respectivo processo;
- Busca a última análise do pedido;
- Faz a leitura das informações presentes na análise (subfluxo 'ler_analise');
- Elabora o Parecer Final.

## 3. Utilização do robô
- Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:
- [x] `cpf`: inserir o número do CPF do usuário do SEI!MG.
- [x]  `senha_sei`: inserir a senha utilizada para acessar o SEI!MG.
- [x] `orgao_sei`: inserir o órgão utilizado para acessar o SEI!MG.
- [x]  `unidade_sei`: inserir a unidade utilizada para acessar o SEI!MG.
- [x]  `pasta_planilha`: inserir o caminho da pasta que contém a planilha de controle.
- O robô abrirá todos os arquivos necessários e páginas da Web, assim, **certifique-se que nenhum arquivo Excel e/ou o navegador estejam abertos**.
- Faça o *download* e ative a extensão Power Automate do navegador.

## 4. Resultados
- Processo manual: em média 4 min.
- Processo automatizado: 1,5 min.

## 5. Códigos
- ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/3_main.txt)
- Subfluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/3_login_sei.txt)
- Subfluxo ['trocar_unidade_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/3_trocar_unidade_sei.txt)
- Subfluxo ['planilha_excel'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/3_planilha_excel.txt)
- Subfluxo ['elaborar_parecer'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/3_elaborar_parecer.txt)
- Subfluxo ['ler_analise'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/secult/3_ler_analise.txt)