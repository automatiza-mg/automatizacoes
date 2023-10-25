graph TD;
    1((Início))-->2;
    2[Abrir planilha do excel _Iniciar excel_]-->3;
    3[Iniciar terminal PRODEMGE _Executar aplicativo_]-->4;
    4[Logar no SISAP _Enviar teclas_]-->5;
    5[Voltar _Rótulo voltar_]-->6;
    6[Aguardar]-->7;
    7[Selecionar texto SISAP _Enviar teclas + Obter texto da área de transferência_]-->8;
    8[Checar se login foi efetuado com sucesso (`If` + enviar teclas ou else + enviar teclas + acessar)]-->9;
    9[Avançar na página do SISAP (Enviar teclas)]-->10;
    10[Reservar linhas livres na planilha (Obter 1ª linha livre na coluna da planilha do excel)]-->11;
    11[Ler e gravar `MASP` (Ler da planilha do excel e armazenar em varia´vel `MASP`]-->12;
    12[Ler e gravar `Admissao` (Ler da planilha do excel e armazenar em varia´vel `Admissao`]-->13;  
    13[Ler e gravar `Evolucao` (Ler da planilha do excel e armazenar em varia´vel `Evolucao`]-->14;
    14[Ler e gravar `Publicacao` (Ler da planilha do excel e armazenar em varia´vel `Publicacao`]-->15;
    15[Ler e gravar `Inicio` (Ler da planilha do excel e armazenar em varia´vel `Inicio`]-->16;
    16[Avançar na página do SISAP (Enviar teclas contendo `MASP` e `Admissao` + Aguardar)]-->17;
    17[Selecionar texto SISAP (Enviar teclas + Obter texto da área de transferência)]-->18;
    18[Checar se Admissao inexistente ou Progressao (If else)]-->19;
    19[Gravar na planilha se admissao inexistente (Enviar teclas + gravar na planilha + aumentar variável)]-->20;
    20[Gravar na planilha se Progressao (Enviar teclas + gravar na planilha + aumentar variável) - fim If]-->21;
    21[Fechar terminal PRODEMGE (Enviar teclas)]-->22;
    22[Fechar excel]-->23
    23((Fim))