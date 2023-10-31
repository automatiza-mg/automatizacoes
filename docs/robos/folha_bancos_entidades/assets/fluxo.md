graph TD;
    1((Início))-->2;
    2[Abrir planilha do excel = Iniciar excel]-->3;
    3[Definir planilha ativa]-->4;
    4[Iniciar terminal PRODEMGE = Executar aplicativo]-->5;
    5[Logar no SIAFI = Enviar teclas]-->6;
    6[Voltar = Rótulo voltar]-->7;
    7[Aguardar]-->8;
    8[Selecionar texto SISAP = Enviar teclas + Obter texto da área de transferência]-->9;
    9[Checar se login foi efetuado com sucesso =`If` + enviar teclas ou else + enviar teclas + acessar]-->10;
    10[Avançar na página do SISAP =Enviar teclas]-->11;
    11[Reservar linhas livres na planilha =Obter 1ª linha livre na coluna da planilha do excel a ser preenchida pelo robô]-->12;
    12[Reservar linhas livres na planilha =Obter 1ª linha livre na coluna da planilha do excel a ser verificada se está preenchida]-->13;
    13[Comparar se coluna a ser preenchida corresponde à linha preenchida da primeira coluna = Condição de loop while K menor que A]-->14;
    14[Passar página do SIAFI = Enviar teclas]-->15;
    15[Ler e gravar `UO` =Ler da planilha do excel e armazenar em variável `UO`]-->16;
    16[Ler e gravar `Ano` =Ler da planilha do excel e armazenar em variável `Ano`]-->17;  
    17[Ler e gravar `GMFIP` =Ler da planilha do excel e armazenar em variável `GMFIP`]-->18;
    18[Ler e gravar `Mudafonte` =Ler da planilha do excel e armazenar em variável `Mudafonte`]-->19;
    19[Diferenciar operações no SIAFI segundo 3 últimos algarismos da FONTE GMFIP = If variável `Mudafonte`]-->20;
    20[Buscar o CNPJ do credor na planilha e armazenar variável `CNPJ`= Ler da planilha do Excel]-->21;
    21[Rótulo `VOLTACNPJ` + Aguardar]-->22;
    22[Checar CNPJ = Enviar teclas + obter texto da área de transferência + If else]-->23;
    23[Gravar na planilha se `PagamentoEfetuado` = gravar na planilha + aumentar variável]-->24;
    24[Salvar e fechar excel]-->25;
    25[Fechar terminal PRODEMGE = Enviar teclas Alt F4]-->26;
    26((Fim))    

