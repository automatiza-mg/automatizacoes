# Automação da consulta a situação do CAGEC das OSC's


<!-- more -->
A SEJUSP possui Termos de Colaboração ativos com as Organizações da Sociedade Civil (OSCs), que são entidades privadas, sem fins lucrativos e atuam em atividades de interesse público. Atualmente, são 49 com Associações de Proteção e Assistência aos Condenados (APACs) e 01 com a Fraternidade Brasileira de Assistência aos Condenados (FBAC).

A Diretoria de Custódias Complementares (DCS) realiza a gestão das 50 parcerias mencionadas. Uma das tarefas repetitivas necessária nessa gestão é a consulta da situação do Cadastro Geral de Convenentes do Estado de Minas Gerais (CAGEC), que é um certificado necessário na celebração das parcerias com o Estado de Minas Gerais. O CAGEC é composto por uma série de documentos com datas de validade distintas e, caso algum esteja vencido, o status se torna **IRREGULAR**, impossibilitando a realização de repasses ou formalização de termos aditivos. Neste sentido a DCS realiza a consulta do CAGEC de forma ordinária a fim de averiguar a situação e notificar as OSCs para sanar eventual inconsistência.

Face ao exposto, criamos um fluxo automatizado utilizando a ferramenta Power Automate. O robô utiliza uma planilha de dados estruturada, que possui as colunas:

- Coluna A - **ID** (numeração das linhas) - pré-preenchida;
- Coluna B - **PARCERIAS** (nome da OSC sem acentuação) - pré-preenchida; 
- Coluna C - **CNPJ** - pré-preenchida; 
- Coluna D - **PROCESSO SEI (referente à OSC)** - pré-preenchida; 
- Coluna E - **Situação MROSC** - a ser preenchida pelo robô; 
- Coluna F - **Situação do CAGEC** - a ser preenchida pelo robô; 
- Coluna G - **DATA CONSULTA** - a ser preenchida pelo robô; 
- Coluna H - **CAMINHO DO ARQUIVO** - a ser preenchida pelo robô; 
- Coluna I - **Presidente** - a ser preenchida pelo robô; 
- Coluna J - **Nome Fantasia** (nome da OSC com acentuação) - pré-preenchida; 
- Coluna K - **Número CRC SEI** - a ser preenchida pelo robô; 
- Coluna L - **Número Notificação SEI** - a ser preenchida pelo robô. 

## 1. O que o robô faz

Ele entra no [Portal CAGEC](https://www.cagec.mg.gov.br/convenente-web/publico/index.zul) consulta e baixa o Certificado de Registro Cadastral (CRC) de cada parceria e preenche as colunas E, F, G, H e I da base de dados. Logo após,  faz o *login* no SEI!MG e, toda OSC que estiver com a Situação CAGEC **IRREGULAR**, ele entra no Processo correspondente a parceria, anexa o PDF do CRC baixado anteriormente, planilha o número SEI deste PDF na coluna K, gera uma notificação e edita o documento a partir de um texto padrão já cadastrado, planilha o número SEI desta notificação e a coloca no Bloco para Assinatura da Chefia Imediata.

## 2. Como funciona? Passo a passo explicado do Automate

### 2.1. *"Main"*
Extrai a data do dia que o fluxo está sendo executado, cria uma pasta para salvar os CRCs e executa os demais subfluxos em uma ordem já estabelecida.

### 2.2. *"leitura_base_de_dados"*
Este subfluxo abre a planilha estruturada e verifica qual será a linha de ação.

### 2.3. *"portal_cagec"*
Este subfluxo é entra no [Portal CAGEC](https://www.cagec.mg.gov.br/convenente-web/publico/index.zul) consulta e baixa o Certificado de Registro Cadastral (CRC) de cada parceria, nomeando o arquivo com o nome fantasia presente na base de dados, preenche as colunas E, F, G, H e I e salva a base nomeando-a com a data da realização da consulta.

### 2.4. *"login_sei"*
Este subfluxo realiza o *login* no SEI!MG.

### 2.5. *"insere_anexo_e_gera_notificacao"*
Este subfluxo lê a coluna F da base de dados e, em caso de situação **IRREGULAR** do CAGEC, entra no Processo SEI correspondente a parceria, anexa o PDF do CRC baixado anteriormente, planilha o número SEI deste PDF na coluna K, gera uma notificação e edita o documento a partir de um texto padrão já cadastrado, planilha o número SEI desta notificação na coluna L e a coloca no Bloco para Assinatura da Chefia Imediata.

## 3. Utilização do robô
- Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:
 `caminho_excel`: inserir o caminho do arquivo da base de dados.
 `caminho_pasta`: inserir o caminho da pasta onde o robô deverá organizar os documentos baixados.
 `login_sei`: inserir o login utilizado para o SEI!MG.
 `orgao_sei`: inserir o órgão utilizado para acessar o SEI!MG.
 `senha_sei`: inserir a senha utilizada para acessar o SEI!MG.
 `tipo_documento`: inserir o tipo de documento externo a ser anexado.
 `unidade_sei`: inserir a unidade utilizada para acessar o SEI!MG.
 `vazio`: inserir variável sem valor padrão.
- O robô abrirá todos os arquivos necessários e páginas da Web, assim, **certifique-se que nenhum arquivo Excel e/ou o navegador estejam abertos**.
- Como informado no início do post, o robô utiliza uma base de dados estruturada, que você pode baixar [aqui](inserir planilha).
- Faça o *download* e ative a extensão Power Automate do navegador utilizado.
- Caso o navegador utilizado seja o Google Chrome, desative o Google Lens do navegador:
  - Digite chrome://flags ​na barra de pesquisas.
  - Utilize o atalho de pesquisa Ctrl + F.
  - Digite *Lens* e desative as opções exibidas na página.
 
## 4. Resultados
Processo manual: 01 a 02 dias de trabalho, dependendo do número de OSCs com CAGEC **IRREGULAR**. <br>
Processo automatizado: 01 hora.

## 5. Códigos
- Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_consulta_cagec/main.txt)
- Fluxo ['leitura_base_de_dados'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_consulta_cagec/leitura_base_de_dados.txt)
- Fluxo ['portal_cagec'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_consulta_cagec/portal_cagec.txt)
- Fluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_consulta_cagec/login_sei.txt)
- Fluxo ['insere_anexo_e_gera_notificacao'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/sejusp_depen_consulta_cagec/insere_anexo_e_gera_notificacao.txt)
