graph TD;
    1((Início))-->2;
    2[Acesso ao SEI!MG]-->3;
    3[Login do Administrador do Órgão/Entidade]-->4;
    4[Acesso ao menu Usuários]-->5;
    5[Acesso ao menu Novo]-->6;
    6[Preenchimento de informações: Órgão/Entidade Logado, Sigla, Nome]-->7;
    7[Loop a partir do menu Novo* até o último usuário informado na planilha.]-->8;
    8((Fim))
