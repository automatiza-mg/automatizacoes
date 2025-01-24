# **Robôs de recepção física de defesas de auto de infração de trânsito**

A pessoa condutora ou proprietária do veículo autuado pela Coordenadoria Estadual de Gestão de Trânsito (CET-MG) pode apresentar defesa da autuação de forma física, seja entregando presencialmente na CET-MG ou enviando pelos Correios.

Desse modo, a CET recebe diversas defesas de autuações via SEI com os documentos escaneados. Estas defesas precisam ser recepcionadas, de forma a inserir as informações do demandante e da infração no SIAUT para que, posteriormente, sejam apreciadas. Diante disto, foi criado um robô para apoiar nesse processo e trazer mais agilidade e eficiência para equipe responsável por esta atividade.

## 1. O que a automatização faz 
- [x] Realiza o download de uma planilha do SEI com os processos a serem trabalhados.
- [x] Realiza uma chamada na [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar cada um desses processos.
- [X] Lê, por meio de uma IA, as informações dos documentos de cada processo SEI.
- [x] Registra na planilha as informações do demandante, do veículo e da infração.
- [x] Realiza uma chamada na API do Correios para buscar a data de envio dos documentos de cada um dos processos.
- [X] Busca no SDAK informações adicionais do veículo envolvido na infração.
- [X] Registra a infração no SIAUT. 

## 2. Fluxos, subfluxos e suas funcionalidades no robô

Essa automatização é constituída por 3 robôs, sendo dois robôs no Power Automate Desktop e um no Power Automate Web.

1. **Robô de download dos arquivos do SEI**:  
Fluxo inicial no qual é realizado o download dos processos SEI com as defesas a serem recepcionadas.
  1.1. **Subfluxo main**:   
  Invoca os demais subfluxos.
  1.2. **Subfluxo login_sei**:   
  Realiza login no sistema sei.
  1.3. **Subfluxo troca_unidade_sei**:   
  Direciona o SEI para a caixa adequada.
  1.4. **Subfluxo listagem_processos**:   
  Seleciona uma etiqueta do SEI para filtrar apenas os processos pertinentes. Depois disso, realiza o download de uma planilha com o n° desses processos e cria uma lista dentro do Power Automate.
  1.5. **Subfluxo api_sei**:   
  O subfluxo utiliza a [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar o PDF dos processos anteriormente listados.
  1.6. **Subfluxo mover_arquivo**:   
  Move os arquivos PDF dos processos para uma pasta do Sharepoint, sendo este o gatilho do próximo robô.

2. **Robô de leitura dos arquivos PDFs com IA**:
Fluxo no Power Automate Web que lê as informações de cada um dos processos e registra na planilha de controle. Esse robô não possui subfluxos, porque não há essa divisão no Power Automate Web. Entretanto, pode-se dizer que ele é dividido em três partes.
   2.1. **Leitura das informações**:
   O robô é iniciado a partir de um gatilho, que é a inserção de um arquivo numa pasta específica. Quando isso ocorre, uma IA transforma as informações do PDF em texto e outa IA, por meio de uma API, é utilizada para identificar as informações necessárias.
   2.2. **Registro na planilha**:
   Com as informações coletadas, o robô insere-as na planilha de controle.
   2.3. **Data de envio no correios**:
   Por fim, o robô utiliza a [API dos Correios](https://automatiza-mg.github.io/automatizacoes/robos/pesquisa_codigo_rastreio_correios/?h=correios), desenvolvida pela Link&Track, para identificar quando aquela correspondência foi enviada, pois essa é uma informação crucial para os prazos do processo.
3. **SDAK**:
  XX.
4. **SIAUT**:
  XX. 

## 3. Pré-requisitos para o funcionamento do robô 

### 3.1. Inserção de variáveis de entrada:

  - :material-application-variable: **`login_sei`**: login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
  - :material-application-variable: **`orgao_sei`**: órgão de login no SEI. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`senha_sei`**: senha para login no SEI. Recomenda-se incluir variável como confidencial.
  - :material-application-variable: **`unidade_sei`**: sigla da unidade a qual caixa deseja ter acesso. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`api_sei_sistema`**: variável a ser criada junto aos Administradores do SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/).
  - :material-application-variable: **`api_sei_token`**: variável a ser criada junto aos Administradores do SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/). 
  - :material-application-variable: **`api_sei_unidade`**: variável a ser criada a partir de busca no SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/buscando-c%C3%B3digo-da-unidade-no-sei/).
  - :material-application-variable: **`pasta_downloads`**: Define o caminho da pasta na qual os arquivos serão salvos. Por padrão, é a pasta de downloads. Ao fim do robô, todos os arquivos serão movidos e ela ficará vazia.
  - :material-application-variable: **`pasta_onedrive`**: Define o caminho da pasta na qual os arquivos serão recepcionados no OneDrive. É necessário habilitar a conexão do OneDrive na máquina. Ver post. 
  - :material-application-variable: **`login_siaut`**: login para entrar no Siaut. Valor cadastrado para a variável deverá conter numéricos. Favor não incluir pontos (.) ou hífen (-).
  - :material-application-variable: **`orgao_siaut`**: órgão de login no Siaut. Valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`senha_siaut`**: senha para login no Siaut. Recomendamos incluir variável como confidencial.


### 3.2. Configurar o navegador Google Chrome: 

  - Extensão **Sei ++** deverá ser instalada e habilitada.
  - Extensão **Power Automate** deverá ser instalada e habilitada

### 3.3. Configurar parâmetros da API do SEI: 

  - Para criar as variáveis relativas à API do SEI, é necessário seguir o passo a passo destacados nos posts a seguir: [1](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/) e [2](https://automatiza-mg.github.io/automatizacoes/blog/buscando-c%C3%B3digo-da-unidade-no-sei/).

### 3.4. Habilitar a sincronização do OneDrive na máquina: 

  - Conectar-se ao OneDrive na máquina que o robô será utilizado, seguindo as instruções desse [post]()https://automatiza-mg.github.io/handbook/blog/utilizando-a-aplica%C3%A7%C3%A3o-do-one-drive-para-trabalhar-com-arquivos-do-sharepoint-na-vers%C3%A3o-desktop/


## 4. Resultados da execução do robô

Após a execução do robô, a planilha “Listagem Recepção Física” estará preenchida com as informações referentes aos processos recepcionados e esses processos estarão cadastrados no SIAUT. Na coluna 'Status' é possível verificar os que foram incluídos com sucesso e os que não foram por alguma regra já estabelecida, como aqueles sem 'AIT'. Assim, é possíver dar o prosseguimento de forma manual nesses casos.

## 5. Códigos
1. **Robô de download dos arquivos do SEI**:
- [x] 1.1 Subfluxo ['main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_fisica/main.txt)
- [x] 1.2 Subfluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_fisica/login_sei.txt)
- [x] 1.3 Subfluxo ['troca_unidade'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_fisica/troca_unidade.txt)
- [x] 1.4 Subfluxo ['listagem_processos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_fisica/listagem_processos.txt)
- [x] 1.5 Subfluxo ['api_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_fisica/api_sei.txt)
- [x] 1.6 Subfluxo ['mover_arquivo'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_fisica/mover_arquivo.txt)
3. **xx**:
- [x] 3.1 Subfluxo ['']()
- [x] 3.2 Subfluxo ['']()
- [x] 3.3 Subfluxo ['']()

Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).
