# **Automação da instrução processual de valores de compensação previdenciária**

Através do Sistema de Compensação Previdenciária (Comprev), que permite o acerto financeiro entre os regimes previdenciários, o setor de Compensação Previdnciária do Ipsemg - MG processa **valores a receber** e **valores a pagar** referente aos demais entes federados e seus respectivos regimes. 

Esta informação é coletada no sistema do Comprev, sendo necessária a instrução de um processo sei para cada ente federado e a inclusão dos documentos a cada mês informando os valores, prazos, informações bancárias e outos. Devido à padronização das tarefas e à sua natureza repetitiva, foi desenvolvida a seguinte automação para apoiar as atividades do setor.

## 1. O que o robô faz 
- [x] Acessa o site do Comprev e realiza o download de arquivo `.csv` com informações do mês de competência;
- [x] Para cada item/ente, verifica se já há processo Sei instruído ou se é necessário a criação de novo processo;
- [x] Cria processo Sei;
- [x] Inclui despacho para setor financeiro com informações de compensação previdenciária;
- [x] Inclui documentos em bloco de assinatura.


## 2. Subfluxos e suas funcionalidade no robô 

1. **Main**:  
  Fluxo principal no qual é realizada a seleção do mês de competência e do tipo de processo que se busca realizar, podendo ser referente aos **valores a receber** e **valores a pagar**. Identifica se já existe processo Sei para cada ente listado no `.csv` e, em seguida,  direciona para os subfluxos adequados para cada caso.
2. **extrai_dados_comprev**:
  Acessa o site do Comprev e realiza o download de arquivo `.csv` com informações do mês de competência e tipo de processo;
3. **gera_lista**:  
  Gera listas a partir do arquivo coletado no site do Comprev e lista de processos Sei já existentes. 
4. **login_sei**:   
  Realiza login no sistema Sei e direciona para a caixa adequada. 
5. **inclui_despacho**:
  Adiciona documento despacho em processo Sei com as informações de compensação previdenciária para ser encaminhada ao setor financeiro. Inclui este despacho em bloco de assinatura. 
6. **novo_processo_sei**:
  Instrui processo Sei com despacho incial indicando à qual ente federado o processo se refere e o inclui em bloco interno. Grava informação do número do processo, CNPJ e nome identificado do ente em planilha excel. 

## 3. Pré-requisitos para o funcionamento do robô 

### 3.1. Inserção de variáveis de entrada:

  - :material-application-variable: **`login_sei`**: login para entrar no Sei. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
  - :material-application-variable: **`orgao_sei`**: órgão de login no Sei. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
  - :material-application-variable: **`senha_sei`**: senha para login no Sei. Recomenda-se incluir variável como confidencial.
  - :material-application-variable: **`unidade_sei`**: sigla da unidade a qual caixa deseja ter acesso. O valor cadastrado para variável deverá ser exatamente igual ao existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas, se for o caso.
  - :material-application-variable: **`linha`**: variável de loop. O valor deve ser igual a 2.

### 3.2. Configurar o navegador Google Chrome: 

  - Desbloquear Pop-up do Sei. 
  - Extensão **Power Automate** deverá ser instalada e habilitada.
  - **Configurações de download** deverão estar programadas para “Perguntar onde salvar cada arquivo antes de fazer download”. 

### 3.3. Salvar arquivo excel: 

  - A planilha nomeada “Lista de SEIs de Pagamento” deve estar salva em pasta no computador local. Certifique-se que o cabeçalho da planilha corresponde está organizado da seguinte forma: `Número do SEI(A1)`, `RPPS e RGPS (B1)`, `CNPJ (C1)`. O caminho do arquivo deverá ser incluído na terceira ação do subfluxo “gerar_listas”, qual seja, `Iniciar o Excel`.

### 3.4 Configurar caixa de download - navegação 

  - Neste processo, as ações de download e upload de documentos ocorrem na caixa de navegação do próprio Windows. A navegação nessa janela é sensível a alteração de visualização dos ícones. A configuração programada é lista detalhada.

### 3.5. Editar subfluxos: 
  - `gerar_listas`: a ação **Ler do arquivo CSV** deve ser editada para que o caminho do arquivo seja correspondente à `[CAMINHO_PASTA]%mes_competencia%%processo%.csv`.
  - `gerar_listas`: a ação **Iniciar o Excel** deve ser editada para que o caminho do arquivo seja correspondente à `[CAMINHO_PASTA]\Lista de SEIs de Pagamento.xlsx`.
  - `extrai_dados_comprev`: ação 23, **enviar teclas**, deve ser editada para que o caminho da pasta esteja indicado, correspondendo à `{Control}({L})[CAMINHO_PASTA]{Enter}{Tab}{Tab}{Tab}{Tab}{Tab}{Tab}{Tab}{Tab}{Tab}{Enter}`

## 4. Resultados da execução do robô

Após a execução do robô, o bloco de assinatura deve estar com todos os despachos do mês de competência, conforme informações do Comprev. Ainda, se for o caso, a planilha “Lista de SEIs de Pagamento” deverá estar atualizada com os novos processos criados. 

É possível que o robô pare inesperadamente, seja por problemas na conexão com a internet, queda de energia, dentre outros. Nestes caso, verifique qual foi o último despacho incluido no bloco e em qual estágio o robô parou. 

- Caso o robô tenha parado no meio da inclusão de um novo processo ou documento, apague o processo ou documento. Em seguida, exclua do `.csv` as linhas até o ente que teve o último despacho criado e incluido no bloco de assinaturas, mantendo o cabeçalho. 

Ainda, é importante lembrar de salvar e fechar a planilha de excel e o `.csv` antes de rodar o robô novamente.

## 5. Métricas alcançadas


## 6. Códigos 
- [x] Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/ipsemg_comprev/valores_receber_pagar_main.txt)
- [x] Subfluxo ['extrai_dados_comprev'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/ipsemg_comprev/valores_receber_pagar_extrai_dados.txt)
- [x] Subfluxo ['gera_listas'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/ipsemg_comprev/valores_receber_pagar_gera_listas.txt)
- [x] Subfluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/ipsemg_comprev/valores_receber_pagar_login_sei.txt)
- [x] Subfluxo ['inclui_despacho'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/ipsemg_comprev/valores_receber_pagar_inclui_despacho.txt)
- [x] Subfluxo ['novo_processo_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/ipsemg_comprev/valores_receber_pagar_novo_processo.txt)


Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).
