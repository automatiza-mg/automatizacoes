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
    13[Salvar captura tela da consulta `CNPJ`na pasta criada]-->14;
    14[Fechar navegador]-->15;
    15[Aumentar variável]-->16;
    16[Ler coluna da planilha e armazenar em `CNPJ`]-->17;
    17[Fechar excel]-->18;
    18((Fim))