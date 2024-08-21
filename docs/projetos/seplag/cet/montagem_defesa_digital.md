# Montagem de defesa recebida no protocolo digital (SIAUT)

Atualmente, a CET possui um grande passivo de instrução, ou montagem, de processo de defesa de AIT. Este passive está consolidado em planilha com os dados dos processos que precisam ser montados para seguirem para análise.

Desse modo, foi feito um robô para automatizar essa etapa de montagem, acelerando o tratamento do passivo de processos.
 
<!-- more -->

Este post tem como objetivo explicar o funcionamento do robô e os parâmetros que ele deve seguir para que a rodagem seja executada enquanto houver passivo. 

## 1. O que o robô faz

- Acessa Siaut e faz download de todos os arquivos da defesa, capa, anexos e, se houver, AIT.
- Pesquisa AIT relacionada a defesa.
- Realiza a instrução de processo SEI da defesa com capa, anexos e, se houver, AIT.
- Direciona o processo para a caixa Sei correspondente. 

## 2. Como funciona: subfluxos e suas funcionalidade no robô
#### 2.1. **"Main"**
Subfluxo principal no qual é realizada a identificação da defesa que precisa ser montada.  este subfluxo direciona para os subfluxos adequados para cada um desses casos. 
#### 2.2. **"Login_Sei"**  
Realiza login no sistema sei e direciona para a caixa adequada.
#### 2.3. **"Login_Siaut"** 
Realiza login no sistema Siaut.
#### 2.4. **"Mont_Siaut_Anexos"**
Identifica se o cidadão que protocolou a defesa incluiu documentos anexos. Em caso positivo, realiza downloads dos arquivos e salva em pasta no computado. Em caso negativo, direciona para o subfluxo de Mont_Siaut_S/Anexos. 
#### 2.5. **"Mont_Siaut_S/Anexos"**
Faz captura de tela do siaut na qual consta a informação que o cidadão não anexou documentos a defesa. Em seguida salva a captura de tela em pasta no computador.
#### 2.6. **"Mont_Siaut_AIT"**
Pesquisa se há AIT, documento digital, da defesa recepcionada. Se sim, faz download do documento. Se não, registra na planilha que não foi encontrada AIT para a defesa.  
#### 2.6. **"Mont_SEI"**
Iniciar um novo processo sei para cada defesa recepcionada, incluindo os documentos capa, anexos ou captura de tela e AIT (se houver). Em seguida, encaminha o processo sei para a caixa correspondente. Registra em planilha do excel o número do processo sei e o nome do responsável pela montagem.

## 3. Pré-requisitos para o funcionamento do robô:
#### 3.1. **Inserção de variáveis de entrada** 
- "login_sei": login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
- "orgao_sei": órgão de login no SEI. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
- "senha_sei": senha para login no SEI. Recomenda-se incluir variável como confidencial.
- "unidade_sei": sigla da unidade a qual caixa deseja ter acesso. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
- "login_siaut": login para entrar no Siaut. Valor cadastrado para a variável deverá conter numéricos. Favor não incluir pontos (.) ou hífen (-).
- "orgao_siaut": órgão de login no Siaut. Valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
- "senha_siaut": senha para login no Siaut. Recomendamos incluir variável como confidencial.
- "p": variável de loop. O valor deve ser 1. 
- "caminho_pasta": Define o caminho da pasta na qual os arquivos deverão ser salvos. Esta pasta deve ser de uso exclusivo do robô, uma vez que o robô irá esvaziar a pasta em durante sua execução.
#### 3.2. **Configurar o navegador Google Chrome** 
- Extensão Sei ++ deverá ser instalada e habilitada.
- Extensão Power Automate deverá ser instalada e habilitada.
- Configurações de download deverão estar programadas para “Perguntar onde salvar cada arquivo antes de fazer download”.
#### 3.3. **Configurar arquivo em Excel (base)**
- É necessário realizar o download da planilha excel na qual estão listados os processos que foram recepcionados, mas ainda não foram montados. Esta planilha deve ser salva na pasta "Controle".
- Esta planilha deverá conter uma tabela, com o seguinte cabeçalho - n. defesa (A1), data (B1), placa (C1), processamento (D1), recepcionado (E1), montagem (F1), status AIT (G1), sei (H1). **Inserir imagem** 
  - Dica 1: Confira se a formatação do número de defesa não foi alterada ao fazer download da planilha. O campo deve estar marcado como tipo texto.
  - Dica 2: Confira se as datas estão no formato DD/MM/AAAA. 
- Em seguida, o caminho para esta planilha deve ser inserido no fluxo. Mas especificamente, no subfluxo "main", na ação "Iniciar o Excel". **Inserir imagem**
#### 3.4. **Configurar caixa de download - navegação**
- Neste processo, as ações de download e upload de documentos ocorrem na caixa de navegação do próprio Windows. A navegação nessa janela é sensível a alteração de visualização dos ícones. A configuração programada é lista detalhada. **Inserir imagem** 

## 3. Utilização do robô

## 4. Resultados da execução do fluxo
- Após a execução do robô, a planilha excel estará preenchida com as informações referentes aos processos montados. É possível que o robô pare inesperadamente, seja por problemas na conexão com a internet, queda de energia, dentre outros, a última informação gravada no excel indica em qual ponto o robô parou.
- Para do fluxo parar na etapa de montagem no SEI, sugere-se apagar o processo criado, apagar os documentos baixados na pasta de destino e iniciar o fluxo novamente. Importante lembrar de salvar e fechar as planilhas de excel antes de rodar o robô novamente. 

## 5. Resultados do robô
Atualmente, o volume de processos para serem montados é de XX processos. O robô está executando, em média, 06 minutos para cada processo **completar**.


## 5. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/fjp_pontodigital_main.txt)
2. Subfluxo ['Procv Masp'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/fjp_pontodigital_procv_masp.txt)
3. Subfluxo ['Soma horas mesmo dia'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/fjp_pontodigital_soma_horas.txt)
