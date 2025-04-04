# Automatização do pagamento do trabalho de IPLs​

O desafio em questão consiste em automatizar a emissão de ordens de pagamento referentes às atividades laborais de privados de liberdade, exercidas em empresas parceiras do Sistema Prisional e/ou Organizações da Sociedade Civil (OSCs).

Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate. O robô faz o *login* no Sistema Integrado de Gestão Prisional (SIGPRI) e gera uma planilha com todas as ordens de pagamento a serem executadas. Após realizar o devido tratamento dos dados obtidos, para cada relação de trabalho são gerados os arquivos que serão encaminhados para a instituição financeira. Nesse processo, o *download* dos respectivos relatórios financeiros também é realizado.

Ao final, o robô faz login no Sistema Eletrônico de Informações (SEI!MG), cria um novo processo, elabora o Memorando que será encaminhado para a Diretoria de Controle e Finanças e, anexa o arquivo `zip` com todos os relatórios financeiros.


<!-- more -->
## 1. O que o robô faz
- Permite que o usuário escolha entre gerar um novo relatório ou continuar a partir de um já existente.
- *Login* no SIGPRI.
- Tabulação das ordens de pagamento a serem executadas.
- Tratamento dos dados obtidos.
- *Download* dos arquivos a serem encaminhados para a instituição financeira.
- *Download* dos relatórios financeiros.
- *Login* no SEI!MG.
- Cria um novo processo no SEI!MG.
- Elabora um Memorando no processo gerado.
- Anexa um arquivo `zip` ao processo, contendo os relatórios financeiros.

## 2. Como funciona? Passo a passo explicado do Automate

### 2.1. *"Main"*
Executa os demais subfluxos em uma ordem já estabelecida e, considerando a geração de um novo relatório ou a continuação de um já existente.

### 2.2. *"login_sigpri"*
Este subfluxo realiza o *login* no SIGPRI.

### 2.3. *"extrair_planilha"*
Este subfluxo é executado quando o usuário solicita a geração de um novo relatório. Ao final das ações, é elaborada uma planilha com todas as ordens de pagamento a serem executadas.

### 2.4. *"preparar_planilha_excel"*
Este subfluxo é executado quando o usuário solicita a geração de um novo relatório. As ações são responsáveis pelo tratamento e a leitura dos dados obtidos no relatório.

### 2.5. *"emitir_txt_pdf"*
Este subfluxo realiza o *download* dos arquivos `.txt` e dos relatórios financeiros.

### 2.6. *"login_sei"*
Este subfluxo realiza o *login* no SEI!MG.

### 2.7. *"trocar_unidade_sei"*
Este subfluxo realiza a troca da unidade do SEI!MG.

### 2.8. *"cria_processo_sei"*
Este subfluxo cria um novo processo no SEI!MG.

### 2.9. *"cria_memorando_sei"*
Este subfluxo elabora um novo Memorando no SEI!MG.

## 3. Utilização do robô
- Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:
    - `cpf`: inserir o número do CPF do usuário do SEI!MG.
    - `senha_sei`: inserir a senha utilizada para acessar o SEI!MG.
    - `senha_sigpri`: inserir a senha utilizada para acessar o SIGPRI.
    - `orgao_sei`: inserir o órgão utilizado para acessar o SEI!MG.
    - `unidade_sei`: inserir a unidade utilizada para acessar o SEI!MG.
    - `caminho_download`: inserir o caminho de armazenamento dos arquivos baixados no computador.
    - `tipo_processo`: inserir o tipo do processo a ser criado.
    - `hipotese_restricao`: inserir a hipótese de restrição.
    - `nome_destinatario`: inserir o nome do(a) responsável pela Diretoria de Contabilidade e Finanças.
    - `cargo_destinatário`: inserir o cargo do(a) responsável pela Diretoria de Contabilidade e Finanças.
    - `assunto_memo`: inserir o assunto do Memorando.
- O robô abrirá todos os arquivos necessários e páginas da Web, assim, **certifique-se que nenhum arquivo Excel e/ou o navegador estejam abertos**.
- A pasta de armazenamento dos arquivos baixados no computador deve estar *vazia* ou com apenas a planilha a ser utilizada, caso o relatório já tenho sido gerado.
- Faça o *download* e ative a extensão Power Automate do navegador utilizado.
- Recomenda-se a utilização de um navegador exclusivamente para a execução do robô, uma vez que é necessário realizar as seguintes configurações:
    - Escolha a opção `Salvar como PDF` na página de impressão do navegador.
    - Ative a opção `mostrar pop-ups e redirecionamentos do navegador`.
    - Desative a opção `mostrar os downloads quando eles forem concluídos`.

## 4. Resultados
 - Processo manual: em média 17h30min.
 - Processo automatizado: 06h46min.

## 5. Códigos
- Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/main.txt)
- Fluxo ['login_sigpri'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/login_sigpri.txt)
- Fluxo ['extrair_planilha'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/extrair_planilha.txt)
- Fluxo ['preparar_planilha_excel'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/preparar_planilha_excel.txt)
- Fluxo ['emitir_txt_pdf'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/emitir_txt_pdf.txt)
- Fluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/login_sei.txt)
- Fluxo ['trocar_unidade_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/trocar_unidade_sei.txt)
- Fluxo ['cria_processo_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/criar_processo_sei.txt)
- Fluxo ['cria_memorando_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_ipls/criar_memo_sei.txt)