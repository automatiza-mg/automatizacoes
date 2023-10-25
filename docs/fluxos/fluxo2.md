graph TD;
    1((Início))-->2;
    2[Abrir planilha do excel]-->3;
    3[Ver listagem de CNPJ da planilha do excel ]-->4;
    4[Salvar CNPJ em variável `CNPJ`]-->5;
    5[Abrir navegador]-->6;
    6[Acessar site do CAGEC/CAFIMP]-->7;
    7[Navegar no Menu de consulta ao CAFIMP]-->8;
    8[Inserir variável `CNPJ` no menu de consulta ao CAFIMP]-->9;
    9[Capturar texto-resultado à consulta sobre `CNPJ`]-->10;
    10[Verificar qual texto'INSCRITO'ou 'NÃO INSCRITO' foi a resposta]-->11;
    11[Gravar texto na planilha]-->12;
    12[Criar pasta]-->13;  
    14 [Salvar captura tela da consulta `CNPJ`na pasta criada]-->15
    15 [Fechar navegador]-->16
    16 [Aumentar variável]-->17
    17 [Ler coluna da planilha e armazenar em `CNPJ`]-->18
    18 [Fechar excel]-->19
    19((Fim))