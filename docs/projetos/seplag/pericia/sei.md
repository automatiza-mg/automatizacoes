# SEI

O servidor que passou por perícia documental envia seus documentos, como, por exemplo, atestado médico para avaliação pericial. Após processamento dessas informações, é gerado um "Boletim de Inspeção Médica (BIM)", documento no SEI que será validado e assinado pelo médico perito.

Desse modo, as informações contidas nesse documento devem ser lançadas no SISAP, de modo que antes precisam estar estruturadas, como em uma planilha:

Clique aqui para baixar a planilha modelo. { #download-button .card path="assets/modelo_pericia.csv" fileName="modelo_pericia.xlsx" }

## 1. O que a automatização faz 
- [x] Realiza uma chamada na [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar cada um dos processos listados na planilha-modelo.
- [X] Identifica a quantidade de BIMs existentes naquele processo, separando os processos que não possuem BIM nativo do SEI ou preenchimento no campo 'Observações' e prosseguindo com a leitura dos BIMs de cada processo apto.
- [X] Lê o PDF com as informações do BIM de cada processo SEI elegível.
- [X] Obtém as variáveis a partir do texto lido.
- [x] Registra na planilha as variáveis do interessado e da inspeção médica (Nome; MASP; CPF; Cargo; Regional; CRM Perito; CRM Atestado; Data Início Afastamento; Data Emissão Atestado; Data Revisão Atestado; Dias solicitados; CID).
- [x] Para os processos com mais de um BIM, adiciona uma linha para cada BIM e os preenche, em caso de não conter "observações".
- [X] Filtra a planilha excluindo os processos sem BIM nativo do SEI ou com "Observações" existetentes. 
- [X] Lança no SISAP as informações de cada BIM.

## 2. Subfluxos e suas funcionalidades no robô

  2.1. **Subfluxo main**:   
  Invoca os demais subfluxos:
  
  2.2. **Subfluxo leitura_planilha**:   
  Lê as informações com o n° de processos na planilha de Input.
  
  2.3. **Subfluxo API**:   
  O subfluxo utiliza a [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar o PDF dos processos anteriormente listados. Em seguida chama o subfluxo seguinte.

  - OBS.: Caso retorno da API seja diferente de 200 significa que algo deu errado. Nesta situação é aconselhável incluir o registro disso em uma planilha de controle.
  
  2.4. **Subfluxo registro_planilha**:   
  Registra as informações obtidas de cada PDF na planilha.
  
  2.5. **Subfluxo formulas_filtros**:   
  Filtra os processos que possuem apenas BIMs nativos e não contêm 'Observações'.
  
  2.6. **Subfluxo login_sisap**:   
  Realiza o login no SISAP.
  
  2.7. **Subfluxo digitacao**:   
  Digita as informações da planilha no Sisap.


## 3. Pré-requisitos para o funcionamento do robô 

### 3.1. Inserção de variáveis de entrada:

  - :material-application-variable: **`api_sei_sistema`**: variável a ser criada junto aos Administradores do SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/).
  - :material-application-variable: **`api_sei_token`**: variável a ser criada junto aos Administradores do SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/). 
  - :material-application-variable: **`api_sei_unidade`**: variável a ser criada a partir de busca no SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/buscando-c%C3%B3digo-da-unidade-no-sei/).
  - :material-application-variable: **`caminho_excel`**: Define o caminho do arquivo excel. 
  - :material-application-variable: **`pasta_SEI`**: Define o caminho dos arquivos dos BIM a serem salvos do SEI.
  - :material-application-variable: **`vazio`**: variavel para utilização no fluxo. Deixar o 'valor padrão' sem preenchimento.
    - **OBS.:** cadastre os caminhos da pasta com barras normais (/) e não com barras invertidas (\)!

### 3.2. Configurar o navegador Google Chrome: 

  - Extensão **Power Automate** deverá ser instalada e habilitada.
    - Conferir se existe outra extensão ativa que possa interferir no funcionamento da extensão do Power Automate (caso isso aconteça, os documentos do processo não serão baixados) 
  - Não perguntar onde salvar arquivos, salvar automaticamente em Downloads:
  - ![image](https://github.com/user-attachments/assets/cee51b8f-73d2-4586-9dca-c062b19f2e26)


### 3.3. Configurar parâmetros da API do SEI: 

  - Para criar as variáveis relativas à API do SEI, é necessário seguir o passo a passo destacados nos posts a seguir: [1](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/) e [2](https://automatiza-mg.github.io/automatizacoes/blog/buscando-c%C3%B3digo-da-unidade-no-sei/).

### 3.4. Desmarcar a opção 'Abrir arquivo após publicação' no Word: 

  -  Em um dado momento do robô 2, é criado um arquivo PDF em branco a partir do Word. Isso ocorre para que as páginas de cada BIM recortadas do PDF do processo sejam anexadas a outro PDF. Dessa forma, o robô cria um arquivo em branco no Word, utilizando o seguinte caminho: 'Arquivo' -> 'Exportar' -> 'Criar um documento PDF/XPS' (ou, em atalhos: Alt + A + E + A), abrindo uma nova janela de 'Salvar Como'. Nessa janela, basta desmarcar uma vez a opção 'Abrir arquivo após publicação' que essa configuração será mantida no computador.

### 3.5 Definir uma pasta para os arquivos PDF de cada BIM serem salvos
  - Durante a execução do robô, os BIMs de um processo são apartados em um novo PDF. Para definir a pasta, basta salvar um documento antes de iniciar o processo, seguindo o passo a passo acima. Dessa forma, o computador irá salvar os seguintes na mesma pasta.

### 3.6 Utilizar a planilha modelo
  - A planilha a ser utilizada deverá ser igual ao modelo a seguir, mantendo o nome das colunas, ordem das colunas e o nome da aba como 'processos'.

Clique aqui para baixar a planilha modelo. { #download-button .card path="assets/modelo_pericia.csv" fileName="modelo_pericia.xlsx" }

**OBS.: - REGRA DE NEGÓCIO A SER DEFINIDA**: Preencher a coluna A com a listagem dos processos do SEI a serem utilizados


## 4. Resultados da execução do robô

Após a execução do robô, a planilha estará preenchida com as informações referentes aos BIMs de cada processo e esses processos estarão incluídos no SISAP. Além disso, a planilha terá sido separada com a quantidade de BIMs em cada processo. Dessa forma, aqueles que só contêm anexos poderão ser tratados de forma manual enquanto os demais podem ser processados pelo robô, já excetuando aqueles que possuem 'Observações'.

## 5. Códigos
- [x] 5.1 Subfluxo ['main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_pericia/SEI/main.txt)
- [x] 5.2 Subfluxo ['leitura_planilha'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_pericia/SEI/leitura_planilha.txt)
- [x] 5.3 Subfluxo ['API'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_pericia/SEI/API.txt)
- [x] 5.4 Subfluxo ['registro_planilha'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_pericia/SEI/registro_planilha.txt)
- [x] 5.5 Subfluxo ['formulas_filtros'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_pericia/SEI/formulas_filtros.txt)


Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).
