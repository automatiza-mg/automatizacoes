graph TD;
    1((Início))-->2;
    2[Abrir planilha do excel = Iniciar excel]-->3;
    3[Reservar linhas livres na planilha =Obter 1ª linha livre na coluna da planilha do excel]-->4;
    4[Abrir navegador na URL de lista de outorgas = Iniciar novo Chrome]-->5;
    5[Ler e gravar `num_portaria` =Ler da planilha do excel e armazenar em variável `num_portaria`]-->6;
    6[Aguardar carregamento da página = Aguardar conteúdo da página da web]-->7;
    7[Inserir num_portaria na página = Preencher campo de texto na página da Web]-->8;
    8[Navegar pela página = Enviar teclas]-->9;
    9[Ler e gravar dados de vazão da planilha =Ler da planilha do excel e armazenar em variável `vazao_excel`]-->10;
    10[Captar os dados de vazão da página do IGAM = Extrair dados de página da web e armazenar em nova variável `vazao_web`]-->11;
    11[Gravar os dados de vazão da web na planilha excel = Ler da planilha do excel e armazenar em variável `vazao2`]-->12;
    12[Comparar `vazao_excel` com `vazao2` =If]-->13; 
    13[???= Enviar teclas {Alt}(LEFT)]-->14;
    14[Reservar próxima linha do excel = Aumentar variável]-->15;
    15[Fechar excel]-->16
    16[Feche navegador da web]-->17
    17((Fim))