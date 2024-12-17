# Automatização de Notas Técnicas de Afastamento para Aperfeiçoamento Profissional

O desafio em questão consiste em automatizar o processo de criação e preenchimento dos processos SEI e das notas técnicas para afastamentos de servidores públicos do Estado de Minas Gerais, otimizando a gestão administrativa e reduzindo o tempo gasto pelos servidores responsáveis presentes na SUGESP. [Este post explica como utilizar o robô para as tarefas desse processo](../../../robos/afastamento_aperfeicoamento_profissional/index.md).  


## 1. Sobre o projeto

Dentre as subsecretarias da Secretaria de Estado de Planejamento e Gestão (Seplag), a equipe de Afastamento da Sugesp atua como elemento central no gerenciamento e regulamentação dos afastamentos para aperfeiçoamento profissional. 

O presente projeto de automatização nasceu da necessidade de otimizar o trabalho dessa equipe, especialmente diante do elevado volume de solicitações de afastamentos que exigem um controle rigoroso. A centralização e organização deste processo permitem que o foco seja direcionado à análise de mérito das solicitações, deixando para o robô as tarefas operacionais e repetitivas. Com a utilização do Power Automate, a proposta é simplificar o fluxo de trabalho, garantindo maior eficiência e precisão.

## 2. Como funciona o robô

O robô está programado para ler a planilha com os pedidos de afastamento, em seguida ele cria um processo, uma nota técnica e realiza o preenchimento dessa nota de acordo com as informações do servidor. Por ser programado com *loop*, esse procedimento se repete para os demais servidores presentes na planilha.

## 3. O que o robô faz

- [x] Cria processos no SEI para as solicitações de afastamento;
- [x] Cria a nota técnica de afastamento dentro do processo;
- [x] Edita a nota técnica com as informações de cada servidor.

Através do *loop*, realiza o processo para as diversas solicitações de forma automática.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/projetos/extensao/afastamento_aperfeicoamento_profissional/assets/fluxo_afastamento_aperfeicoamento.md"
    ```

## 4. Premissas

- O fluxo atende aos modelos de solicitações previamente mapeados;
- É necessário treinamento adicional para atender especificidades de outros tipos de afastamento;
- A comunicação com a equipe de afastamentos é essencial para garantir a padronização dos procedimentos.

## 5. Utilização do robô

O fluxo do Power Automate foi feito diretamente na conta SEI dos alunos extensionistas que passaram a ter acesso à planilha na nuvem da unidade de Afastamentos da Seplag para validar que ele funcionaria corretamente com a equipe responsável.

Para usar o robô, devem ser inseridas as informações dos pedidos de afastamento na planilha designada para tal. Essa planilha será lida pelo robô que assim dará sequência a seu fluxo.

## 6. Resultados esperados

- Redução do tempo gasto para criação de cada nota técnica;
- Padronização e maior precisão nas informações registradas nas notas técnicas;
- Ganho de tempo para as equipes executarem atividades mais estratégicas.

