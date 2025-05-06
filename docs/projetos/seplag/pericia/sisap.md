# SISAP

O servidor que passou por perícia documental envia seus documentos, como, por exemplo, atestado médico para avaliação pericial. Após processamento dessas informações, é gerado um "Boletim de Inspeção Médica (BIM)", documento no SEI que será validado e assinado pelo médico perito.

Desse modo, as informações contidas nesse documento devem ser lançadas no SISAP, de modo que antes precisam estar estruturadas, como em uma planilha:

Clique aqui para baixar a planilha modelo. { #download-button .card path="assets/modelo_pericia.csv" fileName="modelo_pericia.xlsx" }

## 1. O que a automatização faz 
- [x] Recupera a planilha gerada no robô que utiliza a [API do SEI]() para inserir esses dados no SISAP.
- [X] Identifica servidores efetivos e não-efetivos através de coluna da planilha.
- [X] Acessa o terminal PRODEMGE no sistema SISAP.
- [X] Faz a conferência do número de admissão informado pelo requerente, a partir da coluna da planilha.
- [x] Registra na planilha quando a admissão não é encontrada.
- [x] Realiza os passos para marcação de perícia médica não agendada.
- [X] Registra casos que não foram possíveis de serem concluídos na coluna de status. 
- [X] Lança no SISAP as informações de cada BIM.

## 2. Subfluxos e suas funcionalidades no robô

  2.1. **Subfluxo main**:   
  Invoca os demais subfluxos:
  
  2.2. **Subfluxo login_sisap**:   
  Loga no SISAP e acessa o menu principal
  
  2.3. **Subfluxo digitacao_efetivo**:   
  Navega pelas páginas do SISAP e digita os dados de cada coluna necessária da planilha para prosseguir com a marcação da perícia médica não-agendada, em loop, por cada linha da planilha. Invoca o subfluxo de conferencia_admissao.

  Quando for o caso de admissão não encontrada, registra essa informação na coluna de status e passa para a próxima linha do loop.
  
  2.4. **Subfluxo conferencia_admissao**:   
  Entra no menu de outra unidade (RH) para fazer a pesquisa de dados do servidor e checar se a admissão informada é válida na data do atestado médico.
  
## 3. Pré-requisitos para o funcionamento do robô 

### 3.1. Inserção de variáveis de entrada:

  - :material-application-variable: **`login_sisap`**: usuário de login no terminal Prodemge. Masp do servidor responsável pelos lançamentos.
  - :material-application-variable: **`senha_sisap`**: senha para login no terminal Prodemge. Recomenda-se incluir variável como confidencial.
  - :material-application-variable: **`caminho_excel`**: Define o caminho do arquivo excel. 
  - :material-application-variable: **`vazio`**: variavel para utilização no fluxo. Deixar o 'valor padrão' sem preenchimento.
    - **OBS.:** cadastre os caminhos da pasta com barras normais (/) e não com barras invertidas (\)!

### 3.2. Utilizar a planilha modelo
  - A planilha a ser utilizada deverá ser igual ao modelo a seguir, mantendo o nome das colunas, ordem das colunas e o nome da aba como 'processos'.

Clique aqui para baixar a planilha modelo. { #download-button .card path="assets/modelo_pericia.csv" fileName="modelo_pericia.xlsx" }

**OBS.: - REGRA DE NEGÓCIO A SER DEFINIDA**: Preencher a coluna A com a listagem dos processos do SEI a serem utilizados


## 4. Resultados da execução do robô

Após a execução do robô, a planilha estará preenchida com as informações referentes aos resultados das conferências e lançamentos de cada linha na coluna final 'status'. Quando concluída com êxito, será digitado o número da 'Portaria' ou 'Comunicação', que é um número de referência na publicação do Diário Oficial. Quando a conferência aponta alguma inconsistência de dados informados pelo requerente, ou pendência no sistema SISAP, haverá digitação dessas situações na mesma coluna status.

## 5. Códigos

- [x] 5.1 Subfluxo ['main'](https://github.com/automatiza-mg/biblioteca-de-robos/blob/main/robos/seplag_pericia/SISAP/main.txt)
- [x] 5.2 Subfluxo ['login_sisap'](https://github.com/automatiza-mg/biblioteca-de-robos/blob/main/robos/seplag_pericia/SISAP/login_sisap.txt)
- [x] 5.3 Subfluxo ['digitacao_efetivo'](https://github.com/automatiza-mg/biblioteca-de-robos/blob/main/robos/seplag_pericia/SISAP/digitacao_efetivo.txt)
- [x] 5.4 Subfluxo ['conferencia_admissao'](https://github.com/automatiza-mg/biblioteca-de-robos/blob/main/robos/seplag_pericia/SISAP/conferencia_admissao.txt)


Ao abrir o link dos fluxos acima, você deve selecionar todo o conteúdo (ctrl + a), copiar (ctrl +c) e colar (ctrl+v) em um novo fluxo Power Automate Desktop. Caso o seu robô tenha subfluxos, veja os cuidados ao copiar [códigos de subfluxo](https://automatiza-mg.github.io/automatizacoes/blog/copiando-c%C3%B3digo-de-subfluxos-de-um-rob%C3%B4/).