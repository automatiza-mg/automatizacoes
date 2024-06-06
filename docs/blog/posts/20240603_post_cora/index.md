---
date: 2024-06-03
draft: True
authors: [augustacora]
comments: true
categories:
  - Power Automate
---

# Envio de e-mail para docentes a partir de planilha de taxação - FJP

Na imersão relativa ao pagamento de professores na Fundação João Pinheiro (FJP), as automatizações de processos já existentes foram acompanhadas da ideia de se inaugurar uma nova parte do processo, que aumentaria a transparência para com os professores taxados acerca do que consistiu o pagamento feito a eles naquele mês. 

A ideia consiste em ter como base duas planilhas primordiais: a que contém os dados da taxação (aulas registradas, relativas a qual curso e o valor a ser pago, por exemplo) e a que contém o nome e e-mail dos professores em questão (retirada do SISAP). A relação entre as duas gera, a cada professor, uma planilha apenas com as próprias informações que será enviada a ele por e-mail. 

<!-- more -->

Este post tem como objetivo explicar o funcionamento do robô e os parâmetros que ele deve seguir para que a rodagem seja feita a cada mês.

## Premissas
**Pasta de cada mês:** 

- Mensal (uma nova pasta deve ser criada a cada mês);
- Deve conter, pré-rodagem, a planilha de taxação e a planilha base do SISAP. Posteriormente, conterá duas pastas criadas pelo robô ("Planilhas individuais" e "Planilhas individuais não enviadas");
- Nome da pasta: [Mês][Ano]. Ex: Maio 2024.

![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/6764b28d-5d04-4c89-bd72-673cf145d2c1)

**Planilha de taxação:**

<!-- more -->
- Mensal (acompanha os dados das taxações);
- Abas (nesta ordem): "lanca_pagamento" (inserida pelo último robô, o da taxação), "taxacao", "Internos", "Inss internos", "Externos", "Inss Externos" (**essencial** que sejam exatamente esses os nomes);
- Nome do arquivo: [mês]_[ano]. Ex: "maio_2024". 

![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/f332a68c-a7e5-40b2-ab7d-1b4254fb9895)

**Planilha de informações-base dos professores:**
- Mensal (extraída do SISAP a cada mês);
- Aba única: "Relatório 1";
- Para este robô, usa-se a geral (servidores internos e externos);
- Nome do arquivo: sisap_[mês]_[ano]. Ex: sisap_maio_2024.

![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/80d5cc9a-d437-455d-be77-f8b6866c5a22)


## Como funciona? Passo a passo explicado do Automate

1. **"Main"**

Este fluxo, ramo principal do robô, ordena os demais subfluxos. 

- Cria as pastas "Planilhas individuais" e "Planilhas individuais não enviadas" na pasta do mês. Essas pastas conterão as planilhas de cada professor (a primeira para professores cujo e-mail foi encontrado e, portanto, foi possível enviá-lo automaticamente, e a segunda para professores cujo e-mail não consta na planilha base, sendo necessário mandar o e-mail manualmente);
- Abre a planilha de taxação;
- Chama os subfluxos dos tópicos seguintes na ordem em que devem acontecer as etapas;
  
[Ao final]

- Fecha as planilhas de taxação e planilha-base;
- Orienta a pessoa usuária para enviar os e-mails da pasta "Planilhas individuais não enviadas" manualmente.


2. **"Adicionar coluna 'E-mail enviado?'":**

Subfluxo adiciona coluna de controle na planilha de taxação acerca dos e-mails já enviados aos professores, para que, caso o robô pare no meio do percurso e precise ser rodado novamente, um professor que já recebeu e-mail não receba novamente.


3. **"Filtrar lançamentos errados":**

Subfluxo filtra coluna "Lançamento ok?" da aba "taxacao" para deixar apenas aqueles lançamentos corretos (marcados com "Sim" na mencionada coluna)

- Filtra aba "taxacao" para deixar apenas as linhas em que haja "Sim" na coluna "Lançamento ok".


4. **"Montagem da aba 'Inss geral'":**

Subfluxo cria aba "Inss geral" na planilha de taxação para juntar as informações de INSS dos professores internos e externos em uma só tabela.


5. **"Montagem da lista de nomes:**

Subfluxo cria aba "Lista nomes" na planilha base do SISAP para reunir os nomes dos professores que foram taxados em uma só tabela, sem repetições. 


6. **"Envio dos e-mails:**

Subfluxo busca as informações necessárias nas diversas abas e envia planilha individual a cada professor taxado.

- Busca nome a nome da lista de nomes na planilha de taxação;
- Copia planilha exclusiva do professor e cola em um Excel individual;
- Busca nome a nome na planilha geral de INSS;
- Copia valor total e valor destinado ao INSS do professor e cola em seu Excel individual;
- Busca o e-mail do professor;
- Envia planilha individual ao professor;
- Sinaliza na coluna "E-mail enviado?" se e-mail foi enviado ao professor.

OBS: planilhas enviadas vão para a pasta "Planilhas individuais", enquanto planilhas não enviadas (em que o e-mail não consta na planilha base do SISAP) vão para a pasta "Planilhas individuais não enviadas". 
...

## Utilização do robô

- [x] Conferir se a pasta do mês está com o nome indicado e se estão nela a planilha de taxação e a planilha-base;
- [x] Conferir se as planilhas de taxação e base estão com os nomes apropriados de arquivo;
- [x] Conferir se as abas dessas planilhas estão com os nomes (inclusive com a grafia) indicados;
- [x] Antes da rodagem do robô do e-mail, criar coluna "Lançamento ok?" (com esta grafia) na planilha de taxação, aba "taxacao", como última coluna da tabela. Nela, sinalizar com "Sim" os lançamentos no Ponto Digital que estão CORRETOS. Os que não serão levados em conta podem ser deixados em branco na coluna;

![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/9c2beef3-64be-44ed-a113-0c9cbf3c9d14)

- [x] Conferir se variáveis de entrada "caminho_planilhabase" e "caminho_taxacao" estão atualizadas com o caminho dos respectivos arquivos. Ele muda a cada mês, uma vez que os nomes dos arquivos mudarão com os novos meses e anos. Para isso:
  - Clicar com o botão direito no arquivo atualizado de cada mês e selecionar "Copiar como caminho";
  - Ir na variável de entrada em questão, na coluna à direita da tela do Automate, e selecionar os três pontinhos;
  - Alterar o campo "Valor padrão" com caminho copiado, atentando-se para que as aspas copiadas não sejam coladas;
  - Salvar a alteração.

- [x] Conferir se posicionamentos das tabelas de cada aba das planilhas de taxação e planilha-base estão tal como as planilhas taxação e base de maio. Ex: tabela começando na célula A2, ou na A1. Todos os posicionamentos devem ser iguais aos das planilhas em cima das quais o robô foi feito.

## Resultados

Ao final, como explicado, a pasta "Planilhas individuais" conterá as planilhas cujo e-mail foi enviado. Aqui, deve-se atentar para, caso o e-mail retorne (SISAP desatualizado, por exemplo), a mesma planilha ser enviada manualmente ao professor cujo e-mail retornou.

A pasta "Planilhas individuais não enviadas" conterá as planilhas cujo e-mail não foi enviado porque o endereõ não constava na planilha do SISAP. Esses e-mails devem ser enviados manualmente ao professor. 

**Caso o robô pare no meio (por motivos de queda de luz ou outro qualquer)...**

**e o envio de e-mails NÃO tiver começado**: fechar as planilhas abertas sem salvar e rodar o robô novamente.
**e algum e-mail já tiver sido enviado**: fechar E SALVAR as planilhas e rodar o robô novamente.
