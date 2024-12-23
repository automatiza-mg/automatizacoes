# Automatização de Notas Técnicas de Afastamento para Aperfeiçoamento Profissional

_[Este post ainda será atualizado. A segunda fase do projeto ainda está em execução.]_

Dentre as subsecretarias da Secretaria de Estado de Planejamento e Gestão (Seplag), a equipe de Afastamento da Subsecretaria de Gestão de Pessoas (Sugesp) atua como elemento central no gerenciamento e regulamentação dos afastamentos para aperfeiçoamento profissional.

O projeto nasceu da necessidade de otimizar o trabalho dessa equipe, especialmente diante do elevado volume de solicitações de afastamentos que exigem um controle rigoroso. A centralização e organização deste processo permitem que o foco dos servidores seja direcionado à análise de mérito das solicitações, deixando para o robô as tarefas operacionais e repetitivas. Com a utilização do Power Automate, a proposta é simplificar o fluxo de trabalho, garantindo maior eficiência e precisão.

## 1. O que o robô faz

O robô está programado para partir de uma planilha com os pedidos de afastamento. Em seguida, ele cria um processo, uma nota técnica e realiza o preenchimento dessa nota de acordo com as informações do servidor. Por ser programado com *loop*, esse procedimento se repete para os demais servidores presentes na planilha.

- [x] Login no SEI;
- [x] Seleciona unidade correta no SEI;

- **A partir daqui, para cada pedido planilhado:**

- [x] Cria novo processo SEI;
- [x] Cria nova Nota Técnica dentro do respectivo processo;
- [x] Edita a Nota Técnica com as respectivas informaçoes de cada pedido.

## 2. Premissas

- As solicitações devem ser inseridas na [planilha-modelo]()
- O fluxo atende aos modelos de solicitações previamente mapeados;
- É necessário treinamento adicional para atender especificidades de outros tipos de afastamento;
- A comunicação com a equipe de afastamentos é essencial para garantir a padronização dos procedimentos.

## 3. Resultados esperados

- Redução do tempo gasto para criação de cada nota técnica;
- Padronização e maior precisão nas informações registradas nas notas técnicas;
- Ganho de tempo para as equipes executarem atividades mais estratégicas.

## 4. Códigos

1. [Main]()
2. Subfluxo [criar_planilha]()[^1]
3. Subfluxo [login_sei](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/login_sei.txt)
4. Subfluxo [troca_unidade](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/troca_unidade_sei.txt)
5. Subfluxo [cria_processo]()
6. Subfluxo [criar_nota_tecnica]()
7. Subfluxo [editar_nota_tecnica]()

[^1]: Essa planilha pode ser online (Drive, SharePoint, etc) ou offline (salva no próprio computador do usuário). As ações desse subfluxo serão configuradas de acordo com a planilha.