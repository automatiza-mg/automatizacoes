# CertiBot – Robô de Emissão de Certidões

O desafio em questão consiste em automatizar a emissão de certidões e/ou consulta de informações a fim de subsidiar as atividades realizadas pelas diretorias da Superintendência Central de Licitações e Contratações.

Para isso, foi criado um fluxo automatizado utilizando a ferramenta Power Automate Desktop. Antes de iniciar, é necessário preencher uma tabela de controle, que será utilizada não só como base de dados mas também como local de retorno das informações do robô.

Após iniciado, o robô disponibiliza um formulário para que o usuário selecione as certidões e consultas de interesse. Para cada informação disponível na base de dados, o robô realiza a emissão e o *download* da certidão e/ou resultado da consulta, renomeia o(s) arquivo(s) e, por fim, retorna a informação presente na certidão/consulta na planilha de controle.

<!-- more -->
## 1. O que o robô faz
- [x] Permite que o usuário escolha quais certidões ou consultas realizar;
- [x] Realiza a leitura da planilha de controle;
- [x] Acessa os respectivos sites para emissão das certidões e consultas;
- [x] Realiza o *download* da certidão ou do resultado da consulta;
- [x] Renomeia o(s) arquivo(s) baixado(s);
- [x] Grava, na planilha de controle, a informação presente na certidão/consulta;
- [x] Grava, na planilha de controle, o dia e hora da emissão e/ou consulta.

## 2. Como funciona? Passo a passo explicado do Automate

### 2.1. *"Main"*
Executa os demais subfluxos em uma ordem já estabelecida e, considerando a solicitação do usuário.

### 2.2. *Demais subfluxos*
Os demais subfluxos são executados quando o usuário solicita a emissão de determinada certidão ou consulta de informações. Ao final, retorna na planilha de controle o dia e hora da emissão e/ou consulta.

## 3. Utilização do robô

Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:

- :material-application-variable: **`pasta`**: inserir o caminho de armazenamento dos arquivos baixados no computador.
- :material-application-variable: **`planilha`**: inserir o caminho de armazenamento da planilha de controle.
- :material-application-variable: **`vazio`**: variável sem valor de texto no campo `valor padrão`.

Outras observações:

- O robô abrirá todos os arquivos necessários e páginas da web, assim, **certifique-se que nenhum arquivo Excel e/ou o navegador estejam abertos**.
- Ative a extensão Power Automate do navegador utilizado.
- Habilite a seguinte opção do navegador: `perguntar onde salvar cada arquivo antes de fazer download`
  - Escolha a opção `Salvar como PDF` na página de impressão do navegador.
  - Ative a opção `mostrar pop-ups e redirecionamentos do navegador`.

## 4. Resultados
 - Processo manual: em média 1min30seg por certidão/consulta.
 - Processo automatizado: em média 30 segundos por certidão/consulta.

## 5. Códigos
- ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/main.txt)
- ['fgts'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/fgts.txt)
- ['justica_trabalho'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/justica_trabalho.txt)
- ['cdt'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cdt.txt)
- ['cnd_federal'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cnd_federal.txt)
- ['cnpj'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cnpj.txt)
- ['crc'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/crc.txt)
- ['cnd_pbh'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cnd_pbh.txt)
- ['tcu'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/tcu.txt)
- ['cadin'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cadin.txt)
- ['endereco_cnd_mg'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/endereco_cnd_mg.txt)
- ['cafimp'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cafimp.txt)
- ['cnia'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/subcomp_certidoes/cnia.txt)