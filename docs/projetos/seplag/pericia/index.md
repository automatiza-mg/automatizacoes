# **Robôs de leitura de BIMs e publicação no SISAP**

O servidor que passou por perícia documental envia seus documentos, como, por exemplo, atestado médico para avaliação pericial. Após processamento dessas informações, é gerado um "Boletim de Inspeção Médica (BIM)", documento no SEI que será validado e assinado pelo médico perito.

Desse modo, as informações contidas nesse documento devem ser lançadas no SISAP, de modo que antes precisam estar estruturadas, como em uma planilha.

## 1. O que a automatização faz 
- [x] Realiza uma chamada na [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar cada um dos processos indicados em uma planilha pré estabelecida.
- [X] Identifica a quantidade de BIMs existentes naquele processo, prosseguindo com a leitura apenas para os processos com apenas 1 BIM.
- [X] Lê o PDF com as informações do BIM de cada processo SEI com apenas 1 BIM.
- [X] Obtém as variáveis a partir do texto lido
- [x] Registra na planilha as variáveis do interessado e da inspeção médica.
- [x] Para os processos com mais de um BIM, registra cada as informações de cada BIM em uma nova planilha.
- [X] Lança no SISAP as informações de cada BIM. 

## 2. Fluxos, subfluxos e suas funcionalidades no robô

Essa automatização é constituída por 2 robôs no Power Automate Desktop.

1. **Robô de registro dos processos com apenas 1 BIM**:  
Fluxo do Power Automate Desktop qual é realizado o download do PDF dos processos SEI com os BIMs.
  1.1. **Subfluxo main**:   
  Invoca os demais subfluxos.
  1.2. **Subfluxo leitura_planilha**:   
  Lê as informações com o n° de processos na planilha de Input.
  1.3. **Subfluxo API**:   
  O subfluxo utiliza a [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar o PDF dos processos anteriormente listados. Em seguida chama o subfluxo seguinte.
  1.4. **Subfluxo registro_planilha**:   
  Registra as informações obtidas de cada PDF na planilha.
  1.5. **Subfluxo login_sisap**:   
  Realiza o login no SISAP.
  1.6. **Subfluxo Digitação**:   
  Digita as informações da planilha no Sisap.

2. **Robô de registro dos processos com apenas 1 BIM**:  
Fluxo do Power Automate Desktop qual é realizado o download do PDF dos processos SEI com os BIMs.
  2.1. **Subfluxo main**:   
  Invoca os demais subfluxos.
  2.2. **Subfluxo leitura_planilha**:   
  Lê as informações com o n° de processos na planilha de Input.
  2.3. **Subfluxo API**:   
  O subfluxo utiliza a [API do SEI](https://automatiza-mg.github.io/automatizacoes/robos/consulta_procedimento_sei/) para baixar o PDF dos processos anteriormente listados. Em seguida chama o subfluxo seguinte.
  2.4. **Subfluxo registro_planilha**:   
  Registra as informações obtidas de cada PDF na planilha.
  2.5. **Subfluxo login_sisap**:   
  Realiza o login no SISAP.
  2.6. **Subfluxo Digitação**:   
  Digita as informações da planilha no Sisap.

!!! Atenção
  O que diferencia os dois robôs é que o primeiro deles faz a leitura e registro apenas dos processos que têm somente 1 BIM. O segundo robô foi construído para atuar em cima de processos que possuem mais de 1 BIM. Como sugestão de fluxo, é interessante rodar o primeiro robô em cima da lista total de processos, assim, ele irá catalogar a quantidade de BIMs para cada processo. A partir daí, é interessante uma intervenção manual, separando os processos com mais de um BIM e rodando apenas estes no segundo robô.

## 3. Pré-requisitos para o funcionamento do robô 

### 3.1. Inserção de variáveis de entrada:

  - :material-application-variable: **`login_sei`**: login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
  - :material-application-variable: **`orgao_sei`**: órgão de login no SEI. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`senha_sei`**: senha para login no SEI. Recomenda-se incluir variável como confidencial.
  - :material-application-variable: **`unidade_sei`**: sigla da unidade a qual caixa deseja ter acesso. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`api_sei_sistema`**: variável a ser criada junto aos Administradores do SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/).
  - :material-application-variable: **`api_sei_token`**: variável a ser criada junto aos Administradores do SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/criando-sistema-e-token-no-sei-para-utilizar-o-rob%C3%B4-de-api-do-sei/). 
  - :material-application-variable: **`api_sei_unidade`**: variável a ser criada a partir de busca no SEI. [Ver post](https://automatiza-mg.github.io/automatizacoes/blog/buscando-c%C3%B3digo-da-unidade-no-sei/).
  - :material-application-variable: **`login_sisap`**: usuário de login no terminal Prodemge. Masp do servidor responsável pelos lançamentos.
  - :material-application-variable: **`senha_sisap`**: senha para login no terminal Prodemge. Recomenda-se incluir variável como confidencial.
  - :material-application-variable: **`caminho_excel`**: Define o caminho do arquivo excel. 
  - :material-application-variable: **`vazio`**: variavel para utilização no fluxo. Deixar o 'valor padrão' sem preenchimento.


### 3.2. Configurar o navegador Google Chrome: 

  - 
  - 

### 3.3. Configurar parâmetros da API do SEI: 

  - .

### 3.4. Habilitar a sincronização do OneDrive na máquina: 

  - 


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
