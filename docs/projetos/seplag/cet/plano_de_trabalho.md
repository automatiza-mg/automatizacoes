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
- Análise de defesa parciialmente automatizada, com a sugestão de parecer;
- Encerramento de processo automatizada;

### **Requisitos:**
Descreve o que será necessário para o desenvolvimento do projeto e funcionamento das automações, como estrutura de hardware, chaves de acesso (cpf, masp, etc), origem dos dados, treinamento da equipe que receberá a automação, artefatos e sistemas que serão usados (planilha, terminal prodemge, sei).

### **Limites e não escopo:** 
define o que não está no escopo do projeto, bem como descreve fatores que restringem a atuação da equipe no projeto. 

### **Prazo Estimado para Entrega** 
_Deixamos esse campo?_

### **Marcos temporais importantes pro projeto**
_Deixamos esse campo? Ex: Taxação, eventos como carnaval, encerramento de exercício, etc._ 

### **Time**
| Setor | Nome | Atribuição | Contato | 
| ------------- | ------------- | ------------- | ------------- |
| Automatiza | Fulano | Responsável por desenvolver a automação | fulano@seplag.mg.gov.br |
| Diretoria X | Ciclano | Responsável infomar sobre processo X | ciclano@seplag.mg.gov.br |
| Diretoria X | Beltrano | Ponto focal do processo X,Y, Z | beltrano@seplag.mg.gov.br |

### **Etapas Planejadas** 
Marcos a serem alcançados para execução do projeto, por exemplo: redefinições do processo, estruturação de BD, alterações normativas, desenvolvimento da automação, treinamento da equipe demandantes, etc.
