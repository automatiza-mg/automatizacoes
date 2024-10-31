# **Robô de pesquisa e inclusão do auto de infração de trânsito em processos SEI**

O desafio consiste em Automatizar o processo de pesquisa e inserção do auto de infração de trânsito (AIT) em processos SEI! da Coordenadoria Estadual de Trânsito - CET.

## 1. Sobre o Projeto
A CET possui um grande passivo de processos de defesa de autuações de trânsito sem a inserção do respectivo Auto de Infração de Trânsito. O processo de busca e inserção do documento era realizado manualmente por servidores da Coordenadoria, que faziam a conferência diária da disponibilização do documento, bem como o tratamento de erros de inserção e remanejamentos de processos intempestivos para as caixas competentes. 

O volume de processos não é compatível com o número de servidores disponíveis para essa atividade, o que acarretou um aumento exponencial do passivo mencionado. A equipe enfrenta dificuldades para acompanhar a demanda, resultando em um acúmulo de processos que não são devidamente instruídos no tempo necessário. 

O projeto surgiu da necessidade de otimização desse processo por meio da automatização, visando reduzir os casos de recursos expirados pela ausência de retorno do Estado dentro dos prazos legais preestabelecidos, bem como garantir celeridade no processo de análise e retorno ao usuário final. 

## 2. O que o robô faz 
- [x] Executa login e troca unidade no SEI!;
- [x] Busca números de documentos em processo SEI! e retorna para planilha de excel correspondente;
- [x] Executa login no Siaut; 
- [x] Analisa processos que estão intempestivos e direciona para caixa SEI! destinada a essa finalidade; 
- [x] Extrai número de defesa de todos os processos SEI! pesquisados; 
- [x] Realiza pesquisa para busca de AIT no Siaut; 
- [x] Em caso de busca com retorno positivo, anexa o respectivo documento no processo SEI! e altera o marcador; 
- [x] Retorna o status de cada solicitação para a planilha enviada excel; 
- [x] Informa a finalização do fluxo e execução de todas as solicitações ao operador. 

## 3. Subfluxos e suas funcionalidade no robô 
O operador realiza a execução do robô através do power automate desktop instalado na máquina. 

1. **Main**:  
  Fluxo principal no qual é realizado o direcionamento e ordem de execução dos demais subfluxos
2. **Login_Sei**:   
  Realiza login no sistema sei e direciona para a caixa adequada. 
3. **Troca_Unidade_Sei**: 
Realiza a troca para a unidade “CET/SUICC-DEFAUT – SEMAIT” 
4. **Login_Siaut**:  
  Realiza login no sistema Siaut.
5. **Intempestivo**: 
  Realiza a pesquisa de processos que estão intempestivos; 
6. **Envio_Processo**: 
  Realiza o encaminhamento dos processos intempestivos para a caixa SEI! “CET/SUICC-DEFAUT-INTEMPESTIVO” 
7. **Extrai_Numero_Defesa**: 
Faz a extração do número de defesa nos arquivos relativos aos processos baixados do SEI! 
8. **Anexa_AIT**: 
Anexa AIT no respectivo processo SEI! 
9. **Marcador_AIT**: 
Realiza alteração do marcador do processo SEI! 

## 4. Pré-requisitos para o funcionamento do robô 

### 4.1. Inserção de variáveis de entrada:

  - **`login_sei`**: login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
  - **`orgao_sei`**: órgão de login no SEI. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - **`senha_sei`**: senha para login no SEI. Recomenda-se incluir variável como confidencial.
  - **`unidade_sei`**: sigla da unidade a qual caixa deseja ter acesso. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - **`login_siaut`**: login para entrar no Siaut. Valor cadastrado para a variável deverá conter numéricos. Favor não incluir pontos (.) ou hífen (-).
  -  **`orgao_siaut`**: órgão de login no Siaut. Valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - **`senha_siaut`**: senha para login no Siaut. Recomendamos incluir variável como confidencial.
  - **`caminho_AIT`**: Define o caminho da pasta na qual os arquivos  com o documento AIT deverão ser salvos.  
  - **`caminho_download`**: Define o caminho da pasta na qual os baixados referentes aos processos do SEI! deverão ser salvos.
  - **`caminho_processos`**: Define o caminho da pasta na qual a planilha de excel e as pastas “caminho donwload e AIT” deverão ser salvos.
  - **`caminho_excel`**: Define o caminho do arquivo em excel onde estará a listagem de processos do SEI!  

### 4.2. Configurar o navegador Google Chrome: 

  - Extensão **Power Automate** deverá ser instalada e habilitada


## 5. Resultados da execução do robô

Após a execução do robô, a planilha excel estará preenchida com as informações referentes aos processos recepcionados. 

É possível que o robô pare inesperadamente, seja por problemas na conexão com a internet, queda de energia, dentre outros. Nestes caso, a última informação gravada no excel indica em qual ponto o robô parou. 

- Caso o fluxo tenha sido interrompido durante o download dos documentos no SEI! ou SIAUT, sugere-se apagar os documentos baixados na pasta de destino e iniciar o fluxo novamente. 

Ainda, é importante lembrar de salvar e fechar as planilhas de excel antes de rodar o robô novamente. 

## 5. Métricas alcançadas
Foi mensurado que a execução manual deste processo leva cerca de 12 minutos, enquanto o robô executa em, em média, 2,5 minutos por processo. 

Considerando que são recepcionados cerca de 4 mil processo por mês, isto representa uma economia de mais de 600 horas por mês!

## 6. Códigos 
- [x] Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/main.txt)
- [x] Subfluxo ['Login_Sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/login_sei.txt)
- [x] Subfluxo ['Troca_Unidade_Sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/troca_unidade_sei.txt)
- [x] Subfluxo ['Login_Siaut'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/login_siaut.txt)
- [x] Subfluxo ['Intempestivo'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/intempestivo.txt)
- [x] Subfluxo ['Envio_Processo'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/envio_processo.txt)
- [x] Subfluxo ['Extrai_Numero_Defesa'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/extrai_numero_defesa.txt)
- [x] Subfluxo ['Anexa_AIT'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/anexa_ait.txt)
- [x] Subfluxo ['Marcador_AIT'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_procura_ait/marcador_ait.txt)

Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).
