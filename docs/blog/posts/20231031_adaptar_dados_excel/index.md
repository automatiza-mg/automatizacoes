---
date: 2023-11-14
draft: false
authors: [andrelamor]
comments: true
categories:
  - ferramentas
  - excel
---

# Modificar dados no excel

É comum usar as planilhas do excel em quase todos os processos em que se trabalha. Seja como controle de dados para alimentar (input) um sistema online ou da PRODEMGE (terminais), ou como registro de conclusões de operações nesses sistemas (outputs), as planilhas são ferramentas úteis.

Mas nem sempre se conhece todas as oções de ferramentas do excel. Afinal, são inúmeras! Então, saber utilizar um potencial maior dessas ferramentas pode facilitar, e muito, a automatização de processos!

Como exemplos:

- separar e usar partes do valor de uma célula;
- concatenar valores de duas colunas em uma nova;
- substituir partes do valor de uma célula;
- transformar formatos de valores;


Neste post algumas dessas possibilidades serão exemplificadas.

<!-- more -->

## Começar do começo - tabelas são estruturadas

A primeira questão para se fazer um uso otimizado do excel é utilizar a planilha como tabela, de fato, e não como texto corrido (word, pdf) - formas não-estruturadas de registro. Isso implica em anotar dados de um evento em cada linha, e os valores de cada uma de suas variáveis em uma coluna separada:

{{ read_csv('assets/table.csv') }}

**Valores mesclados, células coloridas, valores de linhas preenchidas em colunas a mais que o cabeçalho, linhas soltas dividindo tabelas dentro de uma mesma planilha, são usos fora do padrão tabular, estruturado, que dificultam o trabalho de automatizar** (que se constitui, na verdade, em elaborar regras para o programa Power Automate executar repetidamente no lugar de uma pessoa).

## Separar e usar partes do valor de uma célula

A função de coletar parte da cadeia de valores de uma célula:
`=direita(a2;3)`, por exemplo, vai retornar os 3 caracteres/algarismos da direita para a esquerda da célula `a2`. Ela pode ser útil em casos em que a notação de `CNPJ` ou fonte de receita `GFIMP` está com notação diferente entre a planilha e o sistema a ser utilizado.

## Concatenar valores de duas colunas em uma nova

A função `=concat(a1;a2;a3)` agrupa células de formato **texto** para escrever um valor agregado. No exemplo, ela resultaria no valor `a1a2a3`, o que pode servir para copiar uma cadeia de texto a ser lida pelo protótipo de robô e copiada para outro sistema. Uma utilidade possível é captar e juntar partes do número de processos judiciais, processos de compras, números de instrumentos normativos (resoluções, portarias e outros atos).

Caso os valores sejam algarismos, mas que não sejam números sujeitos a operações aritméticas (parte de um processso, por exemplo), será necessário transformar a formatação das células em questão para 'texto', se estiverem formatadas como 'número' no excel.

## Substituir partes do valor de uma célula

Para a tarefa de surpimir pontos e espaços de uma cadeia numérica de valores, pode-se utilizar a função `substituir`. Se estamos com um código de barras de um boleto de pagamento, para ser inserido no SIAFI, basta aplicar a fórmula pedindo para substituir espaços e pontos por valores vazios, como no caso exemplificado:

| CÓD. BOLETO | 00190.00009 02836.585014 15542.152176 6 95570000050196 |
| ----------- | ------------------------------------ |
| FÓRMULA     | = SUBSTITUIR(SUBSTITUIR(D2;".";"");" ";"")  |
| CÓD. 'LIMPO'| 00190000090283658501415542152176695570000050196 |


Num próximo post outras funções úteis serão abordadas, como:

- transpor valores;
- comparar valores e checar coincidências ou contar ocorrências

# Saiba Mais

Um guia compreensivo de erros e problemas recorrentes em planilhas está disponível [neste link](https://escoladedados.org/tutoriais/guia-quartz-para-limpeza-de-dados/).

Para aprofundar sobre formatos de arquivos estruturados, suas sintaxes e como são representados em especificações de metadados, acesse [esta página do Manual de Dados Abertos de MG](https://transparencia-mg.github.io/manual-dados-mg/0.1/2.%20Ciclo%20de%20publica%C3%A7%C3%A3o%20de%20dados/007_documentacao/#metadados-no-portal-de-dados-abertos-de-minas-gerais)
