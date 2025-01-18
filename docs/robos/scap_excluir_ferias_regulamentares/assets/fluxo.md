graph TD;
    1((Início))-->2;
    2[Obtém hora inicial]-->3;
    3[Executa o terminal Prodemge]-->4;
    4[Acesso a aplicação Sisap]-->5;
    5[Preenchimento do usuário e senha]-->6;
    6[Acesso a rotina Férias Regulamentares]-->7;
    7[Acesso a opção 3 – Excluir Férias Regulamentares]-->8;
    8[Abertura da planilha com os dados preenchidos]-->9;
    9[Loop do primeiro dado até o último dado da planilha]-->10;
    10[Retorna ao menu inicial do Sisap]-->11;
    11[Salva a planilha]-->12;
    12[Fecha a planilha]-->13;
    13[Faz o logoff no Sisap]-->14;
    14[Obtém a hora final]-->15;
    15[Subtrai a hora final da inicial]-->16;
    16[Exibe a mensagem do tempo gasto para inclusão dos dados]-->17;
    17[Fecha a tela do terminal Prodemge]-->18
    18[Abre a planilha com os dados para conferência e tratativa dos erros/inconsistências.]-->19
    19((Fim))