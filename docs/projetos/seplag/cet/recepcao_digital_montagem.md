# **Robô de recepção digital de defesas de auto de infração de trânsito - montagem do passivo**

A pessoa condutora ou proprietária do veículo autuado pela Coordenadoria Estadual de Gestão de Trânsito (CET-MG), pode apresentar defesa da autuação pela internet, via UAI Virtual, sem necessidade de comparecer presencialmente à uma unidade de atendimento.

Desse modo, a CET recebe, em média, 4 mil defesas de autuações por mês no sistema Siaut. Estas defesas precisam ser recepcionadas e intruídas em um processo Sei para que, posteriormente, sejam apreciadas. 

Entretanto, o volume de entrada de processos não é compatível com a capacidade da equipe de recepcionar e instruir os processos. Assim, considerando que há prazo para recepção destes protocolos, a equipe realiza a etapa de recepção  sem a instrução do processo. Essas defesas recebidas formam um passivo ao longo do ano. Diante disto, foi criado um robô para apoiar nesse processo e trazer mais agilidade e eficiência para equipe responsável por esta atividade.

## 1. O que o robô faz 
- [x] Pesquisa os protocolos digitais de defesa de multa já recebidos no Siaut e faz download de todos os arquivos da defesa:capa e anexos.
- [x] Pesquisa AIT relacionada à defesa.
- [x] Realiza a instrução de processo SEI da defesa com os documentos: capa, anexos eviado pelo cidadão e, se houver, AIT.
- [x] Direciona o processo para a caixa Sei correspondente. 

## 2. Subfluxos e suas funcionalidades no robô 

1. **Main**:  
  Fluxo principal no qual é realizada a identificação da defesa que precisa ser montada. Em seguida, este fluxo direciona para os subfluxos adequados para cada um desses casos.
2. **Login_Sei**:   
  Realiza login no sistema sei e direciona para a caixa adequada. 
3. **Login_Siaut**:  
  Realiza login no sistema Siaut. 
4. **Mont_Siaut_Capa**:
  Emite e realiza download do documento 'capa de defesa'.  
5. **Mont_Siaut_Anexos**:
  Identifica se o cidadão que protocolou a defesa incluiu documentos anexos. Em caso positivo, realiza downloads dos arquivos e salva em pasta no computado. Em caso negativo, direciona para o subfluxo de Mont_Siaut_S/Anexos. 
6. **Mont_Siaut_S/Anexos**:
  Faz captura de tela do siaut na qual consta a informação que o cidadão não anexou documentos a defesa. Em seguida salva a captura de tela em pasta no computador. 
7. **Mont_Siaut_AIT**:
  Pesquisa se há AIT, documento digital, da defesa recepcionada. Se sim, faz download do documento. Se não, registra na planilha que não foi encontrada AIT para a defesa.
8. **Mont_SEI**:
  Iniciar um novo processo sei para cada defesa recepcionada, incluindo os documentos capa, anexos ou captura de tela e AIT (se houver). Em seguida, encaminha o processo sei para a caixa correspondente. Registra em planilha do excel o número do processo sei e o nome do responsável pela montagem 

## 3. Pré-requisitos para o funcionamento do robô 

### 3.1. Inserção de variáveis de entrada:

  - :material-application-variable: **`login_sei`**: login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
  - :material-application-variable: **`orgao_sei`**: órgão de login no SEI. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`senha_sei`**: senha para login no SEI. Recomenda-se incluir variável como confidencial.
  - :material-application-variable: **`unidade_sei`**: sigla da unidade a qual caixa deseja ter acesso. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`login_siaut`**: login para entrar no Siaut. Valor cadastrado para a variável deverá conter numéricos. Favor não incluir pontos (.) ou hífen (-).
  - :material-application-variable: **`orgao_siaut`**: órgão de login no Siaut. Valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`senha_siaut`**: senha para login no Siaut. Recomendamos incluir variável como confidencial.
  - :material-application-variable: **`p`**: variável de loop. O valor deve ser 1. 
  - :material-application-variable: **`caminho_pasta`**: Define o caminho da pasta na qual os arquivos deverão ser salvos. Esta pasta deve ser de uso exclusivo do robô, uma vez que o robô irá esvaziar a pasta em durante sua execução 

### 3.2. Configurar o navegador Google Chrome: 

  - Extensão **Sei ++** deverá ser instalada e habilitada.
  - Extensão **Power Automate** deverá ser instalada e habilitada
  - **Configurações de download** deverão estar programadas para “Perguntar onde salvar cada arquivo antes de fazer download”.

### 3.3 Configurar caixa de download - navegação 

- Neste processo, as ações de download e upload de documentos ocorrem na caixa de navegação do próprio Windows. A navegação nessa janela é sensível a alteração de visualização dos ícones. A configuração programada é lista detalhada.

<img width="1438" alt="navega" src="https://github.com/user-attachments/assets/66064066-dd29-4f2a-9386-e435ec825c70">


### 3.4. Baixar arquivo em Excel: 

  - É necessário realizar o download da planilha excel na qual estão listados os processos que foram recepcionados, mas ainda não foram montados.
  - Esta planilha deverá conter uma tabela, com o seguinte cabeçalho - n. defesa (A1), data (B1), placa (C1), processamento (D1), recepcionado (E1), montagem (F1), status AIT (G1), sei (H1).

<img width="1077" alt="montagem" src="https://github.com/user-attachments/assets/7304493d-3a5e-48d1-8578-9e984f75921a">

<div class="grid" markdown>

:exclamation:**Dica 1**: _Confira se a formatação do número de defesa não foi alterada ao fazer download da planilha. O campo deve estar marcado como tipo texto._
{ .card }

:exclamation:**Dica 2**: _Confira se as datas estão no formato DD/MM/AAAA._
{ .card }

</div>

### 3.5. Editar subfluxos: 
  - `main`: a ação de iniciar o excel deve ser editada para que o caminho do excel seja correspondente à planilha excel na qual estão listados os processos que foram recepcionados, mas ainda não foram montados.
  - `Mont_Siaut_S/Anexos`: Neste subfluxo, há duas ações que precisam ser alteradas. 
    - A ação nomeada "Fechar o Word". Ao editar esta ação, o caminho do documento deve ser editado para ser o mesmo da variável `caminho_pasta` seguido do nome do arquivo `captura.docx`.
    - Igualmente, a ação nomeada "executar script power Shell", na qual é possível identificar o código comentado. O caminho da pasta deve ser o mesmo da variável `caminho_pasta` seguido do nome do arquivo `captura.docx`.

## 4. Resultados da execução do robô

Após a execução do robô, a planilha excel estará preenchida com as informações referentes aos processos montados. É possível que o robô pare inesperadamente, seja por problemas na conexão com a internet, queda de energia, dentre outros, a última informação gravada no excel indica em qual ponto o robô parou. 

- Caso o fluxo tenha sido interrompido durante o download dos documentos no siaut, sugere-se apagar os documentos baixados na pasta de destino e iniciar o fluxo novamente.
- Para o caso do fluxo parar na etapa de montagem no SEI, sugere-se apagar o processo criado, apagar os documentos baixados na pasta de destino e iniciar o fluxo novamente. 

Ainda, é importante lembrar de salvar e fechar as planilhas de excel antes de rodar o robô novamente.

## 5. Métricas alcançadas
Foi mensurado que a execução manual deste processo leva cerca de 12 minutos, enquanto o robô executa em, em média, 6 minutos por processo. 

Considerando que, no momento que este post está sendo escrito, o passivo é de aproximadamente 21.800 processos, espera-se alcançar a economia de cerca de 2.000 horas, além de zerar o passivo de processos.

## 6. Códigos 
- [x] Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_main.txt)
- [x] Subfluxo ['Login_Sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_login_sei.txt)
- [x] Subfluxo ['Login_Siaut'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_login_siaut.txt)
- [x] Subfluxo ['Mont_Siaut_Capa'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_siaut_capa.txt)
- [x] Subfluxo ['Mont_Siaut_Anexos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_siaut_anexos.txt)
- [x] Subfluxo ['Mont_Siaut_S/Anexos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_siaut_s_anexo.txt)
- [x] Subfluxo ['Mont_Siaut_AIT'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_siaut_ait.txt)
- [x] Subfluxo ['Mont_Sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/cet_recepcao_digital_montagem/sub_mont_sei.txt)

Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).
