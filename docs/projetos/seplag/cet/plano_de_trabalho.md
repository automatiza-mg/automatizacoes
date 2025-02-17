# Plano de Trabalho

## **Automação da Coordenadoria Estadual de Trânsito** 

### **Descrição do Projeto**
A CET é responsável pelas atividades de trânsito no estado, incluindo a fiscalização de trânsito e os controles relacionados ao condutor de veículos. O processo de fiscalização estabelece que, quando constatado por um agente governamental o descumprimento das regras de trânsito por um condutor, deve ser gerado o Auto de Infração de Trânsito - AIT. Este documento registra a infração cometida, os dados do condutor e veículo, e dá início ao processo administrativo para a aplicação de uma penalidade.  

O condutor ou proprietário do veículo autuado pode apresentar uma defesa, contestando a infração. Esse processo pode ser feito pela internet, via Uai Virtual, ou pelo envio físico da defesa, via correios, resultando em processos distintos de tramitação dos processos. Estes recursos são instruídos em um processo SEI para que sejam analisados e retornado o resultado ao cidadão. Atualmente, a CET recebe, no mês, cerca de 4 mil defesas de AIT pela via digital e 6 mil pela via física, totalizando 10 mil/mês. E, há um passivo de mais de 20 mil defesas sem instrução.  

Frisa-se que o AIT é essencial na análise das defesas, porém, este só é acessado se o responsável pela autuação o disponibilizar digitalizado.  Assim, muitas das defesas recebidas não possuem o AIT, suspendendo o processo até que este esteja disponível. A equipe da CET pesquisa constantemente se o auto está disponível, pois não há um sistema de notificações. Atualmente, há cerca 25 mil processos sem o AIT localizado.

### **Demandante e unidade administrativa**
- Rita de Cássia Alanna Pereira Ribeiro 
    - Cargo: Superintendente de Infrações e Controle do Condutor
- Henrique Ribeiro da Glória Antunes
    - Cargo: Diretor de Infrações - Ponto focal do Projeto

### **Proposta de trabalho - escopo**

Foi definida a estratégia de construção de 05 robôs:  

- **A recepção de defesa física de autuação**: Este robô automatiza a identificação dos processos físicos digitalizados no Sei e das informações de protocolo nos documentos anexados, utilizando inteligência artificial. Realiza cadastro dos processos no sistema Siaut e verificação da presença do AIT.
- **A recepção de defesa digital de autuação**: Este robô automatiza a recepção as defesas no sistema Siaut, pesquisa a disponibilidade do AIT e instruir o processo no Sei.
- **A pesquisa e adição do AIT nos processos já instruídos no Sei**: O robô verifica para cada processo que não possui AIT se este já se encontra disponibilizado. Em caso positivo, o robô o adiciona ao processo. 
- **Análise de defesa de auto de infração**: com o auxílio da inteligência artificial – IA, este robô irá analisar o mérito da defesa apresentada pelo condutor em face da legislação vigente. Como produto desta análise, o robô já sugere a decisão do processo. 
- **O encerramento das análises de defesa de autos de infração**: Este robô verifica se os processos já instruídos já foram analisados e se já há decisão no processo. Em caso positivo, o robô faz a conferência do processo e o encerra no Sei e Siaut.

### **Resultados esperados**
- Processo de recepção de defesa de autuação de trânsito completamente automatizado; 
- Pesquisa e inserção de AIT automatizada;
- Análise de defesa parcialmente automatizada, com a sugestão de parecer;
- Encerramento de processo automatizada;

### **Requisitos:**
- 05 máquinas com Power Automate Instalado; 
- 01 servidor treinado para executar as automações;
- Acesso aos seguintes sistemas: 
    - SIAUT 
    - SDAK 
    - SEI, nas seguintes caixas: CET/...
    - Licença Premium Power Automate
    - Saldo no contrato de IA 

### **Limites e não escopo:** 
- Não serão analisados processos que a IA não conseguir identificar os dados devido à qualidade da digitalização dos documentos;
- A decisão final do recurso da autuação permanece com o assessor. Desse modo, a análise automatizada apenas indicará sugestão de parecer;
- As automações desenvolvidas se limitam às defesas em primeira instância, não contemplando defesas em segunda instância (JARI). 

### **Prazo estimado para entrega** 
06 meses.

### **Marcos temporais importantes pro projeto**
Não há.

### **Time**
| Setor | Nome | Atribuição | Contato | 
| ------------- | ------------- | ------------- | ------------- |
| Automatiza | Augusta Cora | Responsável por desenvolver a automação | augusta.lamas@planejamento.mg.gov.br |
| Automatiza | Raiane Souza | Responsável por desenvolver a automação | raiane.souza@planejamento.mg.gov.br |
| Automatiza | Yan | Responsável por desenvolver a automação | yan.carmo@planejamento.mg.gov.br |
| Diretoria de Infrações | Henrique | Responsável infomar sobre processo de autuações | henrique.ribeiro@planejamento.mg.gov.br |
| Diretoria de Infrações | Gislene Rodrigues| Ponto focal do processo de recepção de defesa | gislene.rodrigues@planejamento.mg.gov.br |

### **Etapas Planejadas** 
1. **Desenvolvimento da Automação;**
    - **Recepção de defesa física de autuação**: 
        - Acesso à API dos Correios;
        - Treinamento de IA;
    - **Recepção de defesa digital de autuação**:
    - **Pesquisa e adição do AIT nos processos já instruídos no Sei**: 
    - **Análise de defesa de auto de infração**:
        - Alterações de normativa;
        - Treinamento de IA;
    - **Encerramento das análises de defesa de autos de infração**:
2. **Treinamento da Equipe**
3. **Transição assistida das automações**
