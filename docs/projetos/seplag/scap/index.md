# Agilizando a Emissão de Certidões INSS na Superintendência Central de Administração de Pessoal - SCAP

O desafio em questão consistia em automatizar o fluxo de destribuição, entre os servidores da Diretoria Central de Contagem de Tempo e Aposentadoria - DCCTA, dos pedidos relacionados a INSS.
Com o fluxo atual, manual, a equipe se via sobrecarregada, acumulando um passivo de mais de 900 pedidos aguardando distribuição.

<!-- more -->

Diante dessa situação, criamos um fluxo automatizado utilizando a ferramenta Power Automate.
Essa iniciativa, implementada com sucesso, representa um grande passo para a eficiência do setor.
O novo "robozinho" distribui automaticamente os pedidos de certidões aos servidores designados, tendo a necessidade de intervenção humana apenas para iniciar o processo.

O fluxo inicialmente pensado busca os pedidos mais antigos para distribuição, podendo o próximo passo ser, inclusive, a elaboração de um parecer preliminar para auxiliar o servidor designado na respota.
A chefia responsável agora tem mais tempo para se dedicar a tarefas mais estratégicas, e/ou até mesmo, para implementação de outras automatizações.

## 1. Premissas

- Utilização de scripts Javascript para facilitar o trabalho.
- Distribuição inicial de pedidos mais antigos.
- Varredura dos processos SEI da unidade em busca de processos sem marcadores.
- Os servidores designados são identificados no processos via marcadores.
- Processos sem marcadores serão alvo da distribuição[^1].
- Criação de variável de ambiente para incluir ou retirar servidores designados (atualmente dois).
- Criação de variável de ambiente para determinar a quantidade de processos por servidor designado (atualmente 50).
- Caso número de processos a serem distribuídos seja maior que o a força total de trabalho (número de servidores * número de processos por servidor) fluxo solicita ajuste nas variáveis de entrada `processos_por_marcador` e ou `nome_marcadores`.
- Testes deverão ser feitos utilizando a variável de entrada `processos_por_marcador` igual a `2`, reduzindo assim o tempo gasto para verificar o processo todo rodando.



## 2. Utilização do robô

- [x] [Copiar o código do primeiro robô](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/scap_inclusao_marcadores_main.txt) em um novo fluxo Power Automate Desktop[^2].
- [x] [Copiar o código do segundo robô](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/scap_inclusao_marcadores_incluindo_marcadores.txt) em um novo subfluxo chamado `incluindo_marcadores`[^2].
- [x]  [Utilizar o robô de login no SEI](../../../robos/login_sei/index.md#montando-o-seu-robo) em um novo subfluxo chamado `login_sei`[^3].
- [x]  [Utilizar o robô troca de unidade no SEI](../../../robos/troca_unidade_sei/index.md#montando-o-seu-robo) em um novo subfluxo chamado `troca_unidade_sei`[^3].
- [x] Criar a variável de entrada `nome_marcadores` para incluir servidores designados[^4].
- [x] Criar a variável de entrada `processos_por_marcador` para incluir a quantidade de processos que será distribuida para cada servidor.



## 3. Resultados

Processo manual levava, em média, uma hora por mês (60 minutos), passou a ser realizado com 15 minutos.

[^1]: O fluxo ideal previa a entrada em cada processo da unidade para verificar se o pedido, de fato, referia-se a assuntos relacionados a INSS.
Tendo em vista a complexidade desta ação resolvemos apenas verificar se o processo tem ou não algum marcador anteriormente incluído.
Caso o servidor designado constate que aquele pedido não se refere a assuntos relacionados a INSS ele poderá combinar com a chefia qual marcação deverá ser feita no processo, podendo, inclusive, retirar seu marcador do mesmo.
[^2]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^3]: Não se esqueça que as variáveis de entrada descritas na página do robo também deverão ser criadas.
[^4]: A inclusão de servidor(es) designado(s) deverá ser feita por marcador. Sendo assim, o mesmo nome dado ao marcador deverá ser utilizado.
Caso seja mais de um servidor/marcador, os mesmos deverão ser separados por ponto e vírgula (`;`).
