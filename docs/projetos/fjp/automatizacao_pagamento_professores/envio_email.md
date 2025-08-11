# Envio de e-mail para docentes a partir de planilha de taxação - Fundação João Pinheiro

Na imersão relativa ao pagamento de professores na Fundação João Pinheiro (FJP), as automatizações de processos já existentes foram acompanhadas da ideia de se inaugurar uma nova parte do processo, que aumentaria a transparência para com os professores taxados acerca do que consistiu o pagamento feito a eles na última taxação. 

A ideia consiste em ter como base duas planilhas primordiais: a que contém os dados da taxação (aulas registradas, relativas a qual curso e o valor a ser pago, por exemplo) e a que contém o nome e e-mail dos professores em questão (retirada do BO). A relação entre as duas gera, a cada professor, uma planilha apenas com as próprias informações que será enviada a ele por e-mail. 

<!-- more -->

Este post tem como objetivo explicar o funcionamento do robô e os parâmetros que ele deve seguir para que a rodagem seja feita a cada mês.

## 1. Premissas
**`Pasta de cada mês:`**

- Mensal (uma nova pasta deve ser criada a cada mês); 
- Deve conter, antes de iniciar o robô, a planilha de taxação e a planilha base do SISAP. 
- Nome da pasta: [Mês][Ano]. Ex: Maio 2024.

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/6764b28d-5d04-4c89-bd72-673cf145d2c1)
  <figcaption></figcaption>
</figure>


**`Planilha de taxação:`**

- Mensal (acompanha os dados das taxações).
- Abas (nesta ordem): "taxacao", "Internos", "Inss internos", "Externos", "Inss Externos" (**essencial** que sejam exatamente esses os nomes).
- Nome do arquivo: [mês]_[ano]. Ex: "maio_2024".

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/2ae333e8-beab-4efa-b98c-2a340afbf686)
  <figcaption></figcaption>
</figure>

Baixe aqui o modelo da planilha de taxação! Ela está no formato com que o robô foi construído, mas com dados fictícios.

<a href="../assets/maio_2024.xlsx" download="maio_2024.xlsx">**maio_2024**.</a>


**`Planilha de informações-base dos professores:`**

- Mensal (extraída do SISAP a cada mês);
- Aba única: "Relatório 1";
- Para este robô, usa-se a geral (servidores internos e externos);
- Nome do arquivo: sisap_[mês]_[ano]. Ex: sisap_maio_2024.

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/65547646/16578ed5-0826-4b15-a0b3-086bd2ba5a01)
  <figcaption></figcaption>
</figure>

Baixe aqui o modelo da planilha de informações-base dos professores! Ela está no formato com que o robô foi construído, mas com dados fictícios.

<a href="../assets/sisap_maio_2024.xlsx" download="sisap_maio_2024.xlsx">**sisap_maio_2024**.</a>


## 2. Como funciona? Passo a passo explicado do Automate

#### 2.1. **"Main"**

Este fluxo, ramo principal do robô, ordena os demais subfluxos. 

- Cria as pastas "Planilhas individuais" e "Planilhas individuais não enviadas" na pasta do mês. Essas pastas conterão as planilhas de cada professor (a primeira para professores cujo e-mail foi encontrado e, portanto, foi possível enviá-lo automaticamente, e a segunda para professores cujo e-mail não consta na planilha base, sendo necessário mandar o e-mail manualmente);
- Abre a planilha de taxação;
- Chama os subfluxos dos tópicos seguintes na ordem em que devem acontecer as etapas;
  
[Ao final]

- Fecha as planilhas de taxação e planilha-base;
- Orienta a pessoa usuária para enviar os e-mails da pasta "Planilhas individuais não enviadas" manualmente.


#### 2.2. **"Adicionar coluna 'E-mail enviado?'":**

Subfluxo adiciona coluna de controle na planilha de taxação acerca dos e-mails já enviados aos professores, para que, caso o robô pare no meio do percurso e precise ser rodado novamente, um professor que já recebeu e-mail não receba novamente.

#### 2.3. **"Filtrar lançamentos errados":**

Subfluxo filtra coluna "Lançamento ok?" da aba "taxacao" para deixar apenas aqueles lançamentos incorretos (não marcados com "Não" na mencionada coluna)

- Filtra aba "taxacao" para deixar apenas as linhas em que haja "Sim" na coluna "Lançamento ok".

#### 2.4. **"Montagem da aba 'Inss geral'":**

Subfluxo cria aba "Inss geral" na planilha de taxação para juntar as informações de INSS dos professores internos e externos em uma só tabela.

#### 2.5. **"Montagem da lista de nomes:**

Subfluxo cria aba "Lista nomes" na planilha base do SISAP para reunir os nomes dos professores que foram taxados em uma só tabela, sem repetições. 

#### 2.6. **"Envio dos e-mails:**

Subfluxo busca as informações necessárias nas diversas abas e envia planilha individual a cada professor taxado.

- Busca nome a nome da lista de nomes na planilha de taxação;
- Copia planilha exclusiva do professor e cola em um Excel individual;
- Busca nome a nome na planilha geral de INSS;
- Copia valor total e valor destinado ao INSS do professor e cola em seu Excel individual;
- Busca o e-mail do professor;
- Envia planilha individual ao professor;
- Sinaliza na coluna "E-mail enviado?" se e-mail foi enviado ao professor.

OBS: planilhas enviadas vão para a pasta "Planilhas individuais", enquanto planilhas não enviadas (em que o e-mail não consta na planilha base do SISAP) vão para a pasta "Planilhas individuais não enviadas". 



## 3. Utilização do robô

- [ ] Conferir se a pasta do mês está com o nome indicado e se estão nela a planilha de taxação e a planilha-base;
- [ ] Conferir se as planilhas de taxação e base estão com os nomes indicados;
- [ ] Alterar as variáveis "caminho_taxacao" e "caminho_planilhabase", atualizando em cada uma o nome da pasta e o nome dos dois arquivos (taxação e BO);
    Elas mudam a cada mês, uma vez que os nomes dos arquivos mudarão com os novos meses e anos. Para isso:
    - Ir na variável de entrada em questão, na coluna à direita da tela do Automate, e selecionar os três pontinhos;
    - Alterar o campo "Valor padrão" com as atualizações de nome de pasta / arquivo taxação / arquivo BO;
    - Salvar a alteração.

- [ ] Conferir se as abas das planilhas estão com os nomes (inclusive com a grafia) indicados;
- [ ] Antes da rodagem do robô do e-mail, criar coluna "Lançamento ok?" (com esta grafia) na planilha de taxação, aba "taxacao", como última coluna da tabela. Nela, sinalizar com "Não" os lançamentos no Ponto Digital que estão INCORRETOS. Os que serão levados em conta devem ser deixados em branco na coluna;

<figure markdown="span">
![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/70a4aef6-3a02-4739-821f-da48b9f04d17)
  <figcaption></figcaption>
</figure>


- [ ] Fazer o paralelismo entre aba "taxacao" e aba "Internos", de forma que o que foi colocado como "Não" na aba "taxacao" seja excuído na aba "Internos;
- [ ] Atualizar a tabela dinâmica da aba "Inss internos";
- [ ] Buscar, na aba de "taxacao", os professores sem código e colocar "-" nas células em que ficaria o código deles; 
- [ ] Conferir se posicionamentos das tabelas de cada aba das planilhas de taxação e planilha-base estão tal como as planilhas taxação e base de maio. Ex: tabela começando na célula A2, ou na A1. Todos os posicionamentos devem ser iguais aos das planilhas em cima das quais o robô foi feito.



## 4. Resultados

Ao final, como explicado, a pasta "Planilhas individuais" conterá as planilhas cujo e-mail foi enviado. Aqui, deve-se atentar para, caso o e-mail retorne (SISAP desatualizado, por exemplo), a mesma planilha ser enviada manualmente ao professor cujo e-mail retornou.

A pasta "Planilhas individuais não enviadas" conterá as planilhas cujo e-mail não foi enviado porque o endereço não constava na planilha do SISAP. Esses e-mails devem ser enviados manualmente ao professor. 


**Caso o robô pare no meio (por motivos de queda de luz ou outro qualquer)...**

e o envio de e-mails **NÃO** tiver começado: fechar as planilhas abertas sem salvar e rodar o robô novamente.

e algum e-mail **já tiver sido enviado**: fechar E SALVAR as planilhas, "desfiltrar" planilha da aba de taxação (para todas as linhas voltarem a aparecer) e rodar o robô novamente.


## 5. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_email/fjp_email_main.txt)
2. Subfluxo ['adicionar coluna "E-mail enviado?"'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_email/fjp_email_colunaemail.txt)
3. Subfluxo ['filtrar lançamentos errados'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_email/fjp_email_lancamentook.txt)
4. Subfluxo ['montagem da aba "Inss geral"'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_email/fjp_email_inssgeral.txt)
5. Subfluxo ['montagem da lista de nomes'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_email/fjp_email_listanomes.txt)
6. Subfluxo ['envio dos e-mails'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/fjp_email/fjp_email_enviar.txt)
