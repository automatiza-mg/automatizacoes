---
date: 2023-12-29
draft: false
authors: [lucasfainblat]
comments: true
categories:
  - metricas
  - power automate
---

# O projeto em números - como calculamos nossos indicadores?

## Introdução

No coração de Minas Gerais, o projeto Automatiza.MG está escrevendo uma nova narrativa para o serviço público. Mas por que você deveria se importar com os números por trás desse projeto? Vamos desvendar os motivos!

- **Transparência e Prestação de Contas**: ao compartilhar os resultados, estamos abrindo as cortinas para que todos vejam o impacto real que o Automatiza.MG está tendo.
- **Eficiência em Números**: cada número representa uma pequena vitória na jornada para tornar os processos públicos mais eficientes, verificando se o Automatiza.MG está mesmo fazendo a diferença. Afinal, quem não quer um governo que entrega mais com menos?
- **Impacto na Vida Real**: ao compartilhar os resultados do Automatiza.MG, estamos construindo a confiança do cidadão, mostrando que o governo está comprometido em entregar resultados reais e mensuráveis.

Ou seja, não se trata apenas de estatística. Nosso projeto em números é a tradução objetiva do compromisso do governo em transformar Minas Gerais, um passo de cada vez, em direção a futuro mais eficiente, transparente e confiável para todos. É o Governo de Minas se esforçando para ser **mais rápido, mais inteligente, mais eficiente!**

<!-- more -->

## Explicando como calculamos nossos números

### Nº de Robôs Criados 🤖

O indicador é calculado a partir da **somatória de robôs desenvolvidos** no âmbito das imersões[^1] do projeto **Automatiza.MG** e **em exercício ativo** nos órgãos e entidades do Estado.

A fonte da informação é a SIGES/SEPLAG - Subsecretaria de Inovação e Gestão Estratégica da Secretaria de Estado de Planejamento e Gestão de Minas Gerais. Isso porque seus servidores conformam a equipe responsável pelo **Automatiza.MG**.

Para calcular o somatório de robôs criados, a fórmula seria uma soma simples dos robôs criados nas diferentes imersões. Supondo que existam \( n \) imersões, a fórmula pode ser expressa da seguinte maneira:

$[ R_{somatorio} = R_1 + R_2 + \ldots + R_n ]$

onde:
- $R_{somatorio}$ é o total de robôs criados.
- $R_1, R_2, \ldots, R_n$)$ representam a quantidade de robôs criados em cada imersão específica.

Essa fórmula realiza a soma do número de robôs criados em cada imersão, proporcionando o somatório total de robôs gerados ao longo de todas as imersões do projeto Automatiza.MG.

[^1]: Imersão é uma jornada colaborativa que visa criar soluções inovadoras durante períodos de cooperação entre as equipes do **Automatiza.MG** e de outros órgãos e entidades do Estado. Resultam na troca de conhecimentos e no desenvolvimento de robôs que passam a fazer parte do cotidiano de trabalho.

### R$ Arrecadados 💰

O indicador é calculado a partir do **somatório de reais arrecadados** em função da operação dos robôs desenvolvidos no âmbito das imersões do projeto **Automatiza.MG** e **em exercício ativo** nos órgãos e entidades do Estado.

Isso porque alguns robôs expandem a capacidade de arrecadação pública ao possibilitarem o processamento de ocorrências que não caberiam na carga horária de servidores humanos.

A fonte da informação é a SIGES/SEPLAG, que por sua vez levanta os dados relevantes junto às equipes que já participaram de imersões.

A fórmula matemática para o somatório de valores reais arrecadados pode ser expressa da seguinte maneira:

$R_{\text{somatório}} = R_1 + R_2 + \ldots + R_n$

onde:
- $R_{\text{somatório}}$ é o total de valores reais arrecadados.
- $R_1, R_2, \ldots, R_n$ representam os valores individuais arrecadados em cada instância ou evento.

Essa fórmula realiza a soma dos valores reais arrecadados em diferentes instâncias, proporcionando o somatório total dos recursos financeiros obtidos ao longo do tempo ou de diferentes fontes.

### Nº de Horas Economizadas ⏳

O indicador é obtido da seguinte maneira: para uma mesma tarefa, o **número de horas economizadas** será a subtração entre o tempo gasto pelo humano e o tempo gasto pelo robô, considerando somente robôs desenvolvidos no âmbito das imersões do projeto **Automatiza.MG** e **em exercício ativo** nos órgãos e entidades do Estado.

A fonte da informação é a SIGES/SEPLAG, que promove o cadastramento dos robôs junto às equipes que já participaram de imersões. Para tanto, compara-se o número de ocorrências de uma mesma tarefa que um robô e um humano conseguem concluir durante um período igual de tempo.

Por exemplo: se um humano conclui 10 ocorrências de uma tarefa em 8 horas, e um robô conclui 100 ocorrências, então fazer 100 tarefas gastariam 80 horas humanas, mas gastam apenas 8 horas robóticas: são, portanto, 72 horas economizadas. O total de horas economizadas resulta da soma da apuração do indicador para todos os robôs decorrentes do Automatiza.MG em funcionamento no Estado.

O objetivo é calcular o somatório total de horas economizadas considerando várias atividades e tarefas que agora são desempenhadas por robôs. Por isso, a fórmula é a seguinte:

$H_{\text{total\_economizadas}} = \sum_{j=1}^{m} \left( \sum_{i=1}^{n_j} (H_{\text{humano}, i, j} - H_{\text{robô}, i, j}) \right)$

onde:
- $H_{\text{total\_economizadas}}$ é o número total de horas economizadas.
- $m$ é o número total de robôs em funcionamento.
- $n_j$ é o número total de atividades executadas pelo robô $j$.
- $H_{\text{humano}, i, j}$ é o tempo gasto pelo humano na atividade $i$ realizada pelo robô $j$.
- $H_{\text{robô}, i, j}$ é o tempo gasto pelo robô na mesma atividade $i$ realizada pelo robô $j$.

Essa fórmula considera a soma das horas economizadas para cada atividade $i$ de cada robô $j$, e em seguida, realiza a soma dessas economias para todos os robôs em funcionamento $m$. Isso proporciona o total de horas economizadas pelo conjunto de robôs do projeto **Automatiza.MG** em todo o Estado.

### Nº de Servidores Capacitados 🎓

O indicador é calculado a partir do **número acumulado de servidores capacitados nos cursos em Power Automate** oferecidos pela equipe do **Automatiza.MG**. A fonte da informação é a SIGES/SEPLAG - Subsecretaria de Inovação e Gestão Estratégica da Secretaria de Estado de Planejamento e Gestão de Minas Gerais.

A fórmula para calcular o número acumulado de servidores capacitados nos cursos de Power Automate pode ser expressa da seguinte forma:

$S_{acumulado} = S_{inicial} + S_{novos} - S_{exclusivos}$

onde:
- $S_{acumulado}$ é o número acumulado de servidores capacitados em Power Automate.
- $S_{inicial}$ é o número inicial de servidores capacitados.
- $S_{novos}$ é o número de novos servidores capacitados adicionados.
- $S_{exclusivos}$ é o número de servidores que foram excluídos ou desconsiderados (se houver).

Essa fórmula segue a mesma lógica anterior, onde o número acumulado é obtido somando o número inicial de servidores capacitados, adicionando os novos servidores capacitados e, se necessário, subtraindo os servidores exclusivos para evitar contagem duplicada.

### Nº de Cursos Oferecidos 🎒

O indicador é calculado a partir do **número acumulado de capacitações em Power Automate** oferecidas pela equipe do **Automatiza.MG**. A fonte da informação é a SIGES/SEPLAG - Subsecretaria de Inovação e Gestão Estratégica da Secretaria de Estado de Planejamento e Gestão de Minas Gerais.

A fórmula matemática para calcular o **número acumulado de capacitações em Power Automate** pode ser representada da seguinte forma:

$N_{acumulado} = N_{inicial} + N_{novas} - N_{exclusivas}$

onde:
- $N_{acumulado}$ é o número acumulado de capacitações em Power Automate.
- $N_{inicial}$ é o número inicial de capacitações.
- $N_{novas}$ é o número de novas capacitações adicionadas.
- $N_{exclusivas}$ é o número de capacitações que foram excluídas ou desconsideradas (se houver).

Essa fórmula representa a ideia de que o número acumulado é a soma do número inicial, das novas capacitações adicionadas e, se necessário, subtraindo as capacitações exclusivas para garantir que não haja contagem duplicada ou indevida.

### Nº de Servidores Reposicionados 🏋️

Uma das grandes vantagens da automatização de processos é o **reposicionamento da força de trabalho onde ela é mais requerida**. Em outras palavras, **retirar servidores de tarefas repetitivas** para **priorizá-los onde atuam no seu *ponto forte***.

Este indicador é calculado comparando a projeção semanal das horas economizadas com o número de horas semanais produtivas de um servidor (24h/semana, conforme [metodologia utilizada pelo projeto MAP](https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2023/gestao-de-pessoas/gestao-da-forca-de-trabalho/guia-map-2022.pdf "https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2023/gestao-de-pessoas/gestao-da-forca-de-trabalho/guia-map-2022.pdf")).

É como se os robôs atuassem como novos colegas de trabalho das equipes humanas. Por exemplo: se um robô economizou 72h, isto equivale a 3 "novos" servidores contratados, ou seja, 72h/24h. Isso quer dizer, no fim das contas, que **3 servidores foram reposicionados, deixando atividades repetitivas em favor de atividades mais importantes**. O total de servidores reposicionados resulta do somatório da apuração do indicador para todos os robôs decorrentes de imersões do **Automatiza.MG** em funcionamento no Estado.

A fórmula matemática para calcular o número total de servidores reposicionados, com base na projeção semanal das horas economizadas, pode ser expressa da seguinte maneira:

$S_{\text{reposicionados}} = \sum_{j=1}^{m} \left( \frac{H_{\text{economizadas}, j}}{H_{\text{semanais\_produtivas}}} \right)$

onde:
- $S_{\text{reposicionados}}$ é o número total de servidores reposicionados.
- $m$ é o número total de robôs em funcionamento.
- $H_{\text{economizadas}, j}$ é o número total de horas economizadas pelo robô $j$.
- $H_{\text{semanais\_produtivas}}$ é o número de horas semanais produtivas de um servidor humano (24 horas/semana, conforme a metodologia utilizada pelo projeto MAP).

Essa fórmula considera que as horas economizadas por cada robô são convertidas em equivalentes de horas de trabalho humano, com base nas horas semanais produtivas. O resultado final é a soma dessas projeções para todos os robôs em funcionamento, representando o total de servidores reposicionados devido à automatização de tarefas.