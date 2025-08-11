# Respostas às demandas do Cofin - Secretaria de Estado de Planejamento e Gestão
 
Na mentoria "respostas às demandas do Cofin" na Secretaria de Estado de Planejamento e Gestão (SEPLAG), o objetivo foi a automatização das respostas às demandas dos orgãos ao Comitê de Orçamento e Finanças (Cofin). Importante contextualizar que, a cada reunião do Cofin, centenas de demandas dos mais diversos órgãos do estado são deliberadas pelo Comitê, que seguindo os trâmites internos estabelecidos, devem ser respondidas através do SEI! aos respectivos órgãos demandantes.
<!-- more -->
 
Este post tem como objetivo explicar de forma geral como funciona o robô, algumas especificidades do processo e os seus resultados.
 
 
## 1. Premissas
- Acesso à planilha de controle das demandas do Cofin;<br>
- Planilhas de apoio: "Mundo" - com informações atualizadas relativas aos órgãos do estado de Minas Gerais, e "Modelos" - apresenta todas as combinações de classificação (passíveis de automatização) atreladas a um código de documento modelo Ofício Cofin, armazenado em processo SEI dedicado;<br>
- Documentos modelo criados no SEI.


## 2. Como funciona? Passo a passo explicado do Automate
#### 2.1. **Subfluxo "Main":**
Este fluxo funciona como um controlador do robô, solicitando informações primordiais para o seu fucionamento, e ainda acionando os demais subfluxos:  
 
- Executa os demais subfluxos do robô; 
- Solicita ao usuário:  
    - *identificação da Reunião Cofin*;  
    - *data da reunião realizada*;
- Executa *loop* que identifica quais pleitos deliberados estão aptos para a elaboração do ofício.


#### 2.2. **Subfluxo "baixar_planilha":**
O fluxo se concentra no download da planilha de andamento armazenada na nuvem. Trata-se de uma planilha interna que contém as informações relativas aos pleitos que estão atualmente abertos no Cofin. Destaca-se que, dentre esses processos, nem todos estão inseridos na pauta da reunião e, consequentemente, não irão necessariamente decorrer na elaboração de um ofício.


#### 2.3. **Subfluxo "ler_planilha":**
No subfluxo em questão são abertas e incorporadas três planilhas, sendo:

- Pleitos em andamento: planilha baixada no início do fluxo que serve como base para toda a automatização, contendo informações vitais como o processo SEI do pleito, sua classificação (Tipo, Categoria e Subcategoria), órgão demandante, tipo de documento e data em que foi submetido o pleito, entre outros.

- Modelos: planilha previamente elaborada que apresenta todas as combinações de classificação (passíveis de automatização) atreladas a um código de documento modelo Ofício Cofin, armazenado em processo SEI dedicado a essa armazenagem.

- Mundo: planilha interna que contém informações relativas aos órgãos do estado de Minas Gerais, contendo informações relevantes à elaboração dos ofícios como o dirigente máximo, os pronomes de tratamento adequados, assim como a vinculação dos órgãos.

Destaca-se que o caminho para acessar as planilhas deve ser alterado de acordo com o computador que o usuário estiver rodando o robô.


#### 2.4. **Subfluxo "obter_data":**
Obtém a data atual e ajusta para o formato utilizado na elaboração do ofício.


#### 2.5. **Subfluxo "entrar_sei":**
Entra no SEI com o *login*, senha e unidade informados como variáveis de entrada. Esse subfluxo pode ser facilmente obtido na [biblioteca de robôs](https://automatiza-mg.github.io/automatizacoes/robos/) do Automatiza.MG.

O envio da tecla "Esc" após o subfluxo serve para fechar eventuais avisos e informativos que possam atrapalhar a automação.


#### 2.6. ***Loop* na "Main":**
Tendo como base a planilha "Pleitos em Andamento", cria-se um *loop* para analisar cada linha, identificando quais pleitos estão aptos para a elaboração do ofício ou não.

Para fins da automação deste robô, consideram-se "Aptos" os pleitos que apresentam o campo de decisão preenchido, não contêm a decisão "Arquivado ou Devolvido" e não apresentam o campo "Resumo Deliberação" preenchido.

Assim, se o pleito não é considerado apto, aumenta-se a variável da linha em 1, efetivamente pulando para a próxima.


#### 2.7. **Subfluxo "negado":**
No caso dos pleitos negados, o texto do ofício é em geral mais simples, tendo um modelo comum aplicável a todos os processos independente de sua classificação. Dessa forma, ocorre procedimento semelhante ao que será descrito adiante, mas com menor complexidade.


#### 2.8. **Filtragem das variáveis:**
De forma a obter o código do documento a ser utilizado como modelo ao inserir o Ofício Cofin no processo SEI da linha em análise, utilizam-se as informações adquiridas na tabela "Pleitos em Andamento" referentes à classificação para filtrar a tabela "Modelos”.

Em seguida, com o intuito de obter informações adicionais sobre o órgão, necessárias para a elaboração do Ofício, utiliza-se a informação do órgão demandante para filtrar a tabela "Mundo".


#### 2.9. **Subfluxo "pesquisa_inserir_doc":**
Na página do SEI, que já foi aberta anteriormente, é realizada a pesquisa do processo analisado na linha em questão. Aberto o processo, é inserido o documento utilizando o código do modelo filtrado obtido na filtragem.


#### 2.10. **Subfluxo "cabeçalho_ref":**
Utiliza informações das planilhas e a data adquirida anteriormente para preencher o cabeçalho, assim como o campo de Ref: do Ofício.


#### 2.11. **Subfluxo "corpo_texto":**
Utiliza o comando Ctrl+F+(texto)+Esc para localizar e substituir as informações personalizáveis no corpo do texto utilizando como base as informações de data de reunião, número da reunião (caixa de texto), pronomes de tratatamento, dirigente máximo, órgão por extenso (Tabela Mundo) e a decisão obtida na reunião (Pleitos em andamento).


#### 2.12. **Subfluxo "encaminhamentos":**
Identifica e insere os encaminhamentos a serem feitos no Ofício. Se o pleito é de um órgão vinculado, encaminha também para a respectiva Secretaria (utilizando a planilha Mundo). Além disso, se existe algum parecer técnico, encaminha para a área técnica competente.


#### 2.13. **Final do *Loop*":**
Salva, fecha o documento no SEI, preenche com um "ok" na linha da planilha de andamento para facilitar a conferência final e aumenta a variável em 1, reiniciando o *loop* até que todas as linhas da planilha sejam analisadas.


#### 2.14. **Encerramento do fluxo:**
Após o fim do *loop*, fecha todas as planilhas utilizadas, mas antes de fechar a planilha de andamento questiona se ela já foi conferida com uma caixa de texto.

Após a confirmação de conferência, exclui a planilha ao final do processo para não gerar duplicidade, considerando que a planilha deve ser baixada toda vez que o robô é ativado.


## 3. Utilização do robô
 
- [x] Conferir se as planilhas estão com os nomes e caminhos corretos;
- [x] Criar as variáveis login_sei, orgao_sei, senha_sei e unidade_sei;
- [x] Documentos modelo criados no SEI de acordo com a classificação/tipo e catalogados numa planilha de apoio;
- [x] Planilha com informações dos órgãos e suas respectivas chefias;
- [x] É importante assegurar que o Excel esteja fechado antes da execução do robô.
 
 
## 4. Resultados
 
Ao final, o robô terá lido toda a planilha com as deliberações da reunião do Cofin, e criado os respectivos Ofícios de resposta aos órgãos para os pleitos considerados "Aptos" ou "Negados, conforme descrito nos itens 2.6 e 2.7.<br>
É importante ressaltar que esse robô foi criado para um processo exclusivo do setor (Cofin), e passível de evolução, principalmente com relação ao uso das planilhas online. 

 
## 5. Códigos
 
1. ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/main.txt)
2. Subfluxo ['baixar_planilha'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/baixar_planilha.txt)
3. Subfluxo ['ler_planilhas'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/ler_planilhas.txt)
4. Subfluxo ['obter_data'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/obter_data.txt)
5. Subfluxo ['entrar_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/entrar_sei.txt)
6. Subfluxo ['negado'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/negado.txt)
7. Subfluxo ['Pesquisar_inserir_doc'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/pesquisar_inserir_doc.txt)
8. Subfluxo ['cabeçalho_ref'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/cabe%C3%A7alho_ref.txt)
9. Subfluxo ['corpo_texto'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/corpo_texto.txt)
10. Subfluxo ['encaminhamentos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/seplag_cofin_mentoria/encaminhamentos.txt)