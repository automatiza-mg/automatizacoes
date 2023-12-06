graph TD;
    1((Início))-->2;
    2[Abrir planilha do excel]-->3;
    3[Ver listagem de documentos SEI! da planilha do Excel ]-->4;
    4[Copiar primeiro documento SEI!]-->5
    5[Fazer login no SEI!]-->6
    6[Buscar documento SEI!]-->7
    7[Baixar documento]-->8
    8[Descompactar arquivos]-->9
    9[Salvar arquivos descompactados]-->10
    10[Preencher Excel sobre documento baixado e descompactação dos arquivos]-->11
    11[Criar nova planilha Excel - Planilha Documentos]-->12
    12[Verificar se há arquivos corrompidos]-->13
    13[Preencher Planilha Documentos informando se arquivos estão corrompidos]-->14
    14[Verificar processo SEI! em busca de formatos de arquivos não aceitos]-->15
    15[Preencher Planilha Documentos informando se formatos dos arquivos é aceito]-->16
    16{Mais um processo?}
    16-->|Não|17
    16-->|Sim|3
    17((Fim))
