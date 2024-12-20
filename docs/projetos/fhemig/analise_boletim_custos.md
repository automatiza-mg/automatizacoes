# Automação de processo: Formatação relatório de composição do custo analítico das unidades FHEMIG.
 
Mensalmente, um relatório de composição do custo analítico das unidades FHEMIG, é gerado no Sistema de Gestão Hospitalar – SIGCUSTOS. Este, por sua vez, é inserido em uma planilha consolidada de custos por unidades, resultando em demonstrativo de custos mensais. 
Partindo da geração da planilha “relatório”, foi proposto automatizar as várias etapas da formatação da planilha “BEM – 2024 - Item de custo”, preparando-a para a análise gerencial pela Coordenação de Custos da FHEMIG.

## 1. O que o robô faz
- Copia os dados da planilha "relatório" e transfere para a planilha “BEM – 2024 - Item de custo”;
- Formata e higieniza a planilha “BEM – 2024 - Item de custo”.
 
## 2. Como funciona? Passo a passo explicado do Automate
### 2.1. "Main"
Este fluxo, ramo principal do robô, contempla as ações principais:
### 2.2. subfluxo "pag_relatorio"
- Abre as planilhas “BEM – 2024 - Item de custo” e "relatorio" a partir de uma pasta especificada;
- copia os dados da planilha “relatório” na planilha “BEM – 2024 - Item de custo”;
### 2.3. subfluxo "pag_dados" 
- Padroniza a formatação da planilha “BEM – 2024 - Item de custo”;
- Atualiza dados;
- Limpar filtros da planilha;
### 2.4. subfluxo "ajuste_pag_dados"
- Reexibe linhas ocultas em todas as abas;
- Padroniza esteticamente linha única
- Oculta linhas vazias
## 3. Utilização do robô
- Antes de executar o robô, ___o(a) usuário(a) deverá alterar a variável de entrada denominada___ `caminho_pasta`, inserindo no campo `valor padrão` o caminho onde a planilha se encontra.
- O robô abrirá todos os arquivos necessários, assim, ___certifique-se que nenhum arquivo Excel esteja aberto___.
 
## 4. Resultados
- Processo manual: 2h30m.
- Processo automatizado: 8 minutos.
 
## 5. Códigos
- Fluxo ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/relatorio_dados_main.txt)
- Subfluxo [subfluxo "pag_relatorio"](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/relatorio_dados_pagina_relatorio.txt)
- Subfluxo [subfluxo "pag_dados"](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/relatorio_dados_pag_dados.txt)
- Subfluxo [subfluxo_ajuste_pag_dados](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/fhemig/relatorio_dados_ajuste_pagina.txt)

