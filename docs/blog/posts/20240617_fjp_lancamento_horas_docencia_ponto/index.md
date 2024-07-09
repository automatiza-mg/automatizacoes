---
date: 2024-06-17
draft: false
authors: [henriquesiqr]
comments: true
categories:
  - Power Automate
tags:
  - Imersões Automatiza.MG
---

# Lançamento das horas de docência no Ponto Digital a partir de planilha de taxação - Fundação João Pinheiro

Na imersão de pagamento de professores na Fundação João Pinheiro (FJP), a primeira fase da automatização de processos consiste em realizar o lançamento das horas de docência no sistema Ponto Digital.

O lançamento é feito com base em duas planilhas: a planilha de taxação, que contém os dados dos docentes (Nome, CPF) e dados relativos às aulas que serão lançadas (data da aula, horas de docência) e; a planilha de dados cadastrais, que será importante para importar o Masp dos professores com base no seu CPF.

<!-- more -->

Este post tem como objetivo explicar o funcionamento do robô e os parâmetros que ele deve seguir para que a rodagem seja feita a cada mês.

## Premissas
**Pasta de cada mês:**

- Mensal (uma nova pasta deve ser criada a cada mês);
- Deve conter a planilha de taxação e a planilha base do SISAP.
- Nome da pasta: [Mês][Ano]. Ex: Maio 2024.

![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/6764b28d-5d04-4c89-bd72-673cf145d2c1)

**Planilha de taxação:**

<!-- more -->
- Mensal (acompanha os dados das taxações);
- Abas (nesta ordem): "lanca_pagamento" (inserida pelo último robô, o da taxação), "taxacao", "Internos", "Inss internos", "Externos", "Inss Externos" (**essencial** que sejam exatamente esses os nomes);
- Nome do arquivo: [mês]_[ano]. Ex: "maio_2024".

![image]()

**Planilha de informações-base dos professores:**

- Mensal (extraída do SISAP a cada mês);
- Aba única: "Relatório 1" (**essencial** que seja exatamente esse o nome);
- Para este robô, usa-se a versão geral (servidores internos e externos);
- Nome do arquivo: sisap_[mês]_[ano]. Ex: sisap_maio_2024.

![image](https://github.com/automatiza-mg/automatizacoes/assets/146127524/80d5cc9a-d437-455d-be77-f8b6866c5a22)

## Como funciona? Passo a passo explicado do Automate

1. **"Main"**

Este fluxo, ramo principal do robô, contempla as ações principais:

- Abrir e logar no Ponto Digital;
- Abrir a planilha “[mês]_[ano]” do Excel;
- Executar o subfluxo ‘Procv_masp’;
- Executar o subfluxo ‘soma_hora_mesmo_dia’;
- Fazer a navegação web no Ponto Digital até a página de ‘cadastro horas de docência’;
- Registrar a hora de docência para o professor por meio do Masp;
- Registrar o sucesso ou erro do lançamento na planilha;

As três últimas ações ocorrem em loop.

[Ao final]
- Salva e fecha a planilha de taxação;
- Fecha o navegador do Ponto Digital.

2. **"Subfluxo 'soma_horas_mesmo_dia'":**

Esse subfluxo é executado após a ação de abrir a planilha do excel “[mês]_[ano]”. O seu objetivo é somar as horas de docência de um mesmo dia para um mesmo professor. Exemplo: o professor João ministrou, no dia 13/06, uma aula das 08h às 10h (que totaliza 2h de docência) e uma aula das 14h às 15h (que totaliza 1h de docência). Na planilha de taxação, ficam registradas uma linha para cada aula, totalizando 2h em uma e 1h em outra. A ideia do subfluxo é que essas duas linhas sejam transformadas em apenas uma que totalize 3h.
Para isso, a automatização executa as seguintes ações principais:

- Cria uma coluna de 'Chave’ na aba ‘Internos’ da planilha de taxação;
- Adiciona nessa coluna o valor [CPF] e [Data da atividade];
- Cria uma aba na planilha;
- Exporta todos os dados da aba ‘Internos’ para a nova aba;
- Na aba ‘Internos’, remove as duplicatas com base na coluna ‘Chave’;
- Cria uma coluna de 'Horas corrigidas’ na aba ‘Internos’
- Adiciona nessa coluna a fórmula SOMASE com base na ‘Chave’ e nos dados colados na aba recém-criada

3. **"Subfluxo 'Procv_masp'":**
Esse subfluxo é executado após a execução do subfluxo anterior. O seu objetivo é colocar o Masp dos docentes na planilha de taxação. Para isso, a automatização executa as seguintes ações principais:

- Cria uma coluna de Masp na planilha de taxação;
- Abre a planilha “sisap_[mês]_[ano]”;
- Busca os valores do Masp na planilha “sisap_[mês]_[ano]” por meio da fórmula do excel “Procv” juntamente com a fórmula “SeErro”;
- Retornar na coluna “Masp” da planilha de taxação os valores de Masp com base no CPF do docente, retornando uma mensagem de erro caso o valor não seja encontrado.

## Utilização do robô

- [ ] Conferir se a pasta do mês está com o nome indicado e se estão nela a planilha de taxação e a planilha-base;
- [ ] Conferir se as planilhas de taxação e base estão com os nomes indicados;
- [ ] Alterar, primeiramente, a variável "caminho_arquivo" no formato adequado, mudando o mês e, se necessário, o ano. Depois, fazer o mesmo para as variáveis "sisap_caminho_arquivo". Elas mudam a cada mês, uma vez que os nomes dos arquivos mudarão com os novos meses e anos. Para isso:
    - Clicar com o botão direito no arquivo atualizado de cada mês e selecionar "Copiar como caminho";
    - Ir na variável de entrada em questão, na coluna à direita da tela do Automate, e selecionar os três pontinhos;
    - Alterar o campo "Valor padrão" com caminho copiado, atentando-se para que as aspas copiadas não sejam coladas;
    - Salvar a alteração.

- [ ] Conferir se as abas dessas planilhas estão com os nomes (inclusive com a grafia) indicados;
- [ ] Conferir se as abas dessas planilhas estão na ordem correta: “taxacao”; “Internos”; “Inss Internos”; “Externos” e; “Inss Externos”;
- [ ] Conferir a posição da base de dados. A aba ‘Internos’ deve iniciar na Coluna A e linha 1, na célula A1.;
- [ ] Conferir o número de colunas. A base de dados da aba ‘Internos’ deve iniciar na Coluna A e ir até a coluna O;
- [ ] É importante assegurar que o Excel esteja fechado antes da execução do robô.

## Resultados

Ao final, o robô terá executado os lançamentos no Ponto Digital e gravado o sucesso ou não da operação para cada linha da aba ‘Internos’. É importante verificar na planilha os casos de erro e realizar os lançamentos manualmente.

**Caso o robô pare no meio (por motivos de queda de luz ou outro qualquer)...**
- e os registros no Ponto Digital **NÃO** tiverem começado: fechar as planilhas abertas sem salvar e rodar o robô novamente.
- e algum registro no Ponto Digital **já tiver sido realizado**: fechar E SALVAR as planilhas. Abrir e logar o Ponto Digital e rodar o robô novamente a partir da ação 24.

## Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/fjp_pontodigital_main.txt)
2. Subfluxo ['Procv Masp'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/fjp_pontodigital_procv_masp.txt)
3. Subfluxo ['Soma horas mesmo dia'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/fjp_pontodigital_soma_horas.txt)
