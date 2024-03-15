---
date: 2023-12-29
draft: false
authors: [lucasfainblat]
comments: true
categories:
  - Métricas
  - Power Automate
---

# Automatiza.MG em Números - Entenda os Resultados!

## Por que os Números Importam?

No coração de Minas Gerais, o projeto Automatiza.MG está revolucionando o serviço público. Mas, por que você deveria se importar com os números por trás desse projeto? Vamos simplificar!

- **Transparência e Prestação de Contas**: Ao compartilhar os resultados, mostramos o impacto real do Automatiza.MG.
- **Eficiência em Números**: Cada número é uma vitória na jornada para um governo mais eficiente.
- **Impacto na Vida Real**: Compartilhamos resultados para construir confiança, mostrando compromisso em entregar melhorias tangíveis.

Nosso projeto em números é a tradução objetiva do compromisso do governo em tornar Minas Gerais mais eficiente, transparente e confiável. É o Governo de Minas se esforçando para ser **mais rápido, mais inteligente, mais eficiente!**

<!-- more -->

## Como Calculamos Nossos Números?

A fonte da informação é a SIGES/SEPLAG - Subsecretaria de Inovação e Gestão Estratégica da Secretaria de Estado de Planejamento e Gestão de Minas Gerais. Isso porque seus servidores integram a equipe responsável pelo **Automatiza.MG**.

### 🤖 Nº de Robôs Criados

Calculamos somando os robôs desenvolvidos em imersões[^1] do projeto **Automatiza.MG** e em exercício no Estado.

A fórmula é simples:
$$R_{somatorio} = R_1 + R_2 + \ldots + R_n$$
onde:
- $R_{somatorio}$ é o total de robôs criados.
- $R_1, R_2, \ldots, R_n$ representam a quantidade de robôs criados em cada imersão específica.

[^1]: Imersão é uma jornada colaborativa que visa criar soluções inovadoras durante períodos de cooperação entre as equipes do **Automatiza.MG** e de outros órgãos e entidades do Estado. Resultam na troca de conhecimentos e no desenvolvimento de robôs que passam a fazer parte do cotidiano de trabalho.

### 💰 R$ Arrecadados

O indicador considera os recursos arrecadados[^2] em função da operação dos robôs desenvolvidos no âmbito das imersões do projeto **Automatiza.MG** e **em exercício ativo**[^3] nos órgãos e entidades do Estado.

Somamos os valores arrecadados pelos robôs em operação. A fórmula é: $$R_{\text{somatório}} = R_1 + R_2 + \ldots + R_n$$
onde:
- $R_{\text{somatório}}$ é o total de valores reais arrecadados.
- $R_1, R_2, \ldots, R_n$ representam os valores individuais arrecadados em cada instância ou evento.

[^2]: Alguns robôs expandem a capacidade de arrecadação pública ao possibilitarem, por exemplo, o processamento de ocorrências que não caberiam na carga horária de servidores humanos. Deve-se destacar, entretanto, que nem todos os robôs desenvolvidos fazem isso.
[^3]: Muitos dos robôs desenvolvidos estão em atividade nos órgãos e entidades do Governo de Minas, desempenhando tarefas e facilitando as vidas das equipes. Porém, nem todos os robôs estão. Só contabilizamos, aqui, aqueles que estão operando correntemente.

### ⏳ Nº de Horas Economizadas

Calculamos subtraindo o tempo gasto por humanos e robôs ao desempenhar a mesma tarefa.

Por exemplo: um humano conclui 10 repetições de uma tarefa em 8 horas; um robô, por sua vez, faz 100 repetições durante o mesmo período. Então, **repetir a tarefa 100 vezes gastaria 80 horas humanas, mas custa apenas 8 horas robóticas**. São, portanto, **72 horas economizadas**.

O total de horas economizadas resulta da soma da apuração do indicador para todos os robôs decorrentes do **Automatiza.MG** em funcionamento no Estado. A fórmula segue:

$$H_{\text{total\ economizadas}} = \sum_{j=1}^{m} \left( \sum_{i=1}^{n_j} (H_{\text{humano}, i, j} - H_{\text{robô}, i, j}) \right)$$

onde:
- $H_{\text{total\ economizadas}}$ é o número total de horas economizadas.
- $m$ é o número total de robôs em funcionamento.
- $n_j$ é o número total de atividades executadas pelo robô $j$.
- $H_{\text{humano}, i, j}$ é o tempo gasto pelo humano na atividade $i$ realizada pelo robô $j$.
- $H_{\text{robô}, i, j}$ é o tempo gasto pelo robô na mesma atividade $i$ realizada pelo robô $j$.

### 🎓 Nº de Servidores Capacitados

Calculamos somando servidores capacitados nos cursos em Power Automate. A fórmula é simples: $$S_{acumulado} = S_{inicial} + S_{novos} - S_{exclusivos}$$
onde:
- $S_{acumulado}$ é o número acumulado de servidores capacitados em Power Automate.
- $S_{inicial}$ é o número inicial de servidores capacitados.
- $S_{novos}$ é o número de novos servidores capacitados adicionados.
- $S_{exclusivos}$ é o número de servidores que foram excluídos ou desconsiderados (se houver).

### 🎒 Nº de Cursos Oferecidos

Calculamos o número acumulado de capacitações em Power Automate oferecidas pela equipe do **Automatiza.MG**: $$N_{acumulado} = N_{inicial} + N_{novas} - N_{exclusivas}$$
onde:
- $N_{acumulado}$ é o número acumulado de capacitações em Power Automate.
- $N_{inicial}$ é o número inicial de capacitações.
- $N_{novas}$ é o número de novas capacitações adicionadas.
- $N_{exclusivas}$ é o número de capacitações que foram excluídas ou desconsideradas (se houver).

### 🏋️ Nº de Servidores Reposicionados

Uma das grandes vantagens da automatização de processos é o **reposicionamento da força de trabalho onde ela é mais requerida**. Em outras palavras, **retirar servidores de tarefas repetitivas** para **priorizá-los onde atuam no seu *ponto forte***.

Este indicador é calculado comparando a projeção semanal das horas economizadas com o número de horas semanais produtivas de um servidor (24h/semana, conforme [metodologia utilizada pelo projeto MAP](https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2023/gestao-de-pessoas/gestao-da-forca-de-trabalho/guia-map-2022.pdf "https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2023/gestao-de-pessoas/gestao-da-forca-de-trabalho/guia-map-2022.pdf")). É como se os robôs atuassem como novos colegas de trabalho das equipes humanas.

Por exemplo: se um robô economizou 72h, isto equivale a 3 "novos" servidores contratados, ou seja, 72h/24h. Isso quer dizer, no fim das contas, que **3 servidores foram reposicionados, deixando atividades repetitivas em favor de atividades mais importantes**. A fórmula é:
$$S_{\text{reposicionados}} = \sum_{j=1}^{m} \left( \frac{H_{\text{economizadas}, j}}{H_{\text{semanais\ produtivas}}} \right)$$
onde:
- $S_{\text{reposicionados}}$ é o número total de servidores reposicionados.
- $m$ é o número total de robôs em funcionamento.
- $H_{\text{economizadas}, j}$ é o número total de horas economizadas pelo robô $j$.
- $H_{\text{semanais\ produtivas}}$ é o número de horas semanais produtivas de um servidor humano.

Esses números não são apenas estatísticas; são o compromisso do governo em transformar Minas Gerais em direção a um futuro mais eficiente, transparente e confiável.
