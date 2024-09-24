# **Robô de recepção digital de defesas de auto de infração de trânsito - novos protocolos**

A pessoa condutora ou proprietária do veículo autuado pela Coordenadoria Estadual de Gestão de Trânsito (CET-MG), pode apresentar defesa da autuação pela internet, via UAI Virtual, sem necessidade de comparecer presencialmente à uma unidade de atendimento.

Desse modo, a CET recebe, em média, 4 mil defesas de autuações por mês no sistema Siaut. Estas defesas precisam ser recepcionadas e intruídas em um processo Sei para que, posteriormente, sejam apreciadas. Diante disto, foi criado um robô para apoiar nesse processo e trazer mais agilidade e eficiência para equipe responsável por esta atividade.

## 1. O que o robô faz 
- [x] Recepciona os protocolos digitais de defesa de multa recebidos no Siaut.
- [x] Pesquisa AIT relacionada à defesa.
- [x] Realiza a instrução de processo SEI da defesa com os documentos: capa, anexos eviado pelo cidadão e, se houver, AIT.
- [x] Direciona o processo para a caixa Sei correspondente. 

## 2. Subfluxos e suas funcionalidade no robô 

1. **Main**:  
  Fluxo principal no qual é realizada a separação entre protocolos novos e aqueles que constam no protocolo digital por algum tipo de erro do sistema Siaut. Após essa separação, este fluxo direciona para os subfluxos adequados para cada um desses casos.
2. **Login_Sei**:   
  Realiza login no sistema sei e direciona para a caixa adequada. 
3. **Login_Siaut**:  
  Realiza login no sistema Siaut. 
4. **Novos_Protocolos**:
  Recepciona os novos protocolos e gera o documento capa. No caso de erros nesta etapa, redireciona para o subfluxo main, para que seja selecionado novo protocolo. 
5. **Gravar_Excel**:
  Abre, grava e salva em planilha do excel as informações de número defesa, data da defesa, placa do veículo, número de processamento de cada defesa devidamente recepcionada na etapa anterior.  
6. **Mont_Siaut_Anexos**:
  Identifica se o cidadão que protocolou a defesa incluiu documentos anexos. Em caso positivo, realiza downloads dos arquivos e salva em pasta no computado. Em caso negativo, direciona para o subfluxo de Mont_Siaut_S/Anexos. 
7. **Mont_Siaut_S/Anexos**:
  Faz captura de tela do siaut na qual consta a informação que o cidadão não anexou documentos a defesa. Em seguida salva a captura de tela em pasta no computador. 
8. **Mont_Siaut_AIT**:
  Pesquisa se há AIT, documento digital, da defesa recepcionada. Se sim, faz download do documento. Se não, registra na planilha que não foi encontrada AIT para a defesa.
9. **Mont_SEI**:
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
  - :material-application-variable: **`cont`**: variável de loop. O valor deve ser 0. 
  - :material-application-variable: **`i`**: variável de loop. O valor deve ser 0. 
  - :material-application-variable: **`j`**: variável de loop. O valor deve ser 0.
  - :material-application-variable: **`caminho_pasta`**: Define o caminho da pasta na qual os arquivos deverão ser salvos. Esta pasta deve ser de uso exclusivo do robô, uma vez que o robô irá esvaziar a pasta em durante sua execução 

### 3.2. Configurar o navegador Google Chrome: 

  - Extensão **Sei ++** deverá ser instalada e habilitada.
  - Extensão **Power Automate** deverá ser instalada e habilitada
  - **Configurações de download** deverão estar programadas para “Perguntar onde salvar cada arquivo antes de fazer download”. 

### 3.3. Criar arquivos em Excel: 

  - Planilha nomeada “protocolo”. Esta planilha deverá conter tabela, com o seguinte cabeçalho - n. defesa (A1), data (B1), placa (C1), processamento (D1), montagem (E1), sei (F1), AIT (G1). O caminho do arquivo deverá ser incluído na primeira ação do subfluxo “Gravar_excel”.

 <img width="875" alt="protocolo" src="https://github.com/user-attachments/assets/e40be813-cf8a-456e-842a-9e68d7e21d23">

  - Planilha nomeada “erro_protocolo”. Esta planilha deverá conter tabela, com o seguinte cabeçalho - Número Protocolo Digital (A1), Placa (B1), Processamento (C1), Data Cadastro (D1), Erro (E1), Tratado (F1). O caminho do arquivo deverá ser incluído na décima ação do subfluxo “Main”.

<img width="734" alt="erro_protocolo" src="https://github.com/user-attachments/assets/e9edbe70-7653-44ea-a1a6-b445d1b7403c">

### 3.4 Configurar caixa de download - navegação 

  - Neste processo, as ações de download e upload de documentos ocorrem na caixa de navegação do próprio Windows. A navegação nessa janela é sensível a alteração de visualização dos ícones. A configuração programada é lista detalhada.

<img width="1438" alt="navega" src="https://github.com/user-attachments/assets/843def40-3ffe-41b5-9387-846af0894e57">

### 3.5. Editar subfluxos: 
  - `main`: a ação de iniciar o excel deve ser editada para que o caminho do excel seja correspondente à planilha “erro_protocolo” criada.
  - `Gravar_excel`: Neste subfluxo, a primeira ação, que se refere à iniciar a o Excel, deve ser editada para que o caminho do excel seja correspondente à planilha “protocolo” criada.
  - `Mont_Siaut_S/Anexos`: Neste subfluxo, há uma ação nomeada "executar script power Shell". Ao editar esta ação, é possível identificar o código comentado. O caminho da pasta deve ser o mesmo da variável `caminho_pasta`.

## 4. Resultados da execução do robô

Após a execução do robô, a planilha “protocolo” estará preenchida com as informações referentes aos processos recepcionados. 

É possível que o robô pare inesperadamente, seja por problemas na conexão com a internet, queda de energia, dentre outros. Nestes caso, a última informação gravada no excel “protocolo” indica em qual ponto o robô parou. 

- Para o caso da última defesa registrada e montagem no Siaut parcial, sugere-se manter o registro, apagar os documentos baixados na pasta de destino e iniciar o fluxo novamente. Ao final, para estes casos, pode ser utilizado o robô de montagem para finalizar o processo.
- Já para o caso das defesas recepcionada, montagem no Siaut finalizada, mas montagem do Sei incompleta, sugere-se (i) manter o registro, (ii) apagar os documentos baixados na pasta de destino, (iii) deletar o Sei criado e (iv) executar o robô novamente. Ao final, rodar o robô de montagem para esta planilha.  

Ainda, é importante lembrar de salvar e fechar as planilhas de excel antes de rodar o robô novamente. 

## 5. Métricas alcançadas
Foi mensurado que a execução manual deste processo leva cerca de 14 minutos, enquanto o robô executa em, em média, 7 minutos por processo. 

Considerando que são recepcionados cerca de 4 mil processo por mês, isto representa uma economia de mais de 450 horas por mês!

## 6. Códigos 
- [x] Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/main.txt)
- [x] Subfluxo ['Login_Sei'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_sei.txt)
- [x] Subfluxo ['Login_Siaut'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_siaut.txt)
- [x] Subfluxo ['Novos_Protocolos'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_novos_protocolos.txt)
- [x] Subfluxo ['Gravar_Excel'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_excel.txt)
- [x] Subfluxo ['Mont_Siaut_Anexos'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_mont_siaut_anexo.txt)
- [x] Subfluxo ['Mont_Siaut_S/Anexos'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_mont_siaut_s_anexo.txt)
- [x] Subfluxo ['Mont_Siaut_AIT'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_ait.txt)
- [x] Subfluxo ['Mont_Sei'](https://raw.githubusercontent.com/automatiza-mg/automatizacoes/refs/heads/post-cet-recepcao/docs/projetos/seplag/cet/cod_recepcao_digital/sub_mont_sei.txt)

Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).
