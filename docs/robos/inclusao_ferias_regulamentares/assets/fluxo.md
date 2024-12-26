graph TD
    Inicio["Início"]:::longbox --> HoraInicial["Obtém hora inicial"]:::longbox
    HoraInicial --> Terminal["Executa o terminal Prodemge"]:::longbox
    Terminal --> Sisap["Acesso à aplicação Sisap"]:::longbox
    Sisap --> Login["Preenchimento do usuário e senha"]:::longbox
    Login --> RotinaFeriasReg["Acesso à rotina Férias Regulamentares"]:::longbox
    RotinaFeriasReg --> Opcao01Incluir["Acesso à opção 01 - Incluir Férias Regulamentares"]:::longbox
    Opcao01Incluir --> AbrirPlanilha["Abertura da planilha com os dados preenchidos"]:::longbox
    AbrirPlanilha --> Loop["Loop do primeiro dado até o último dado da planilha"]:::longbox
    Loop --> MenuInicial["Retorna ao menu inicial do Sisap"]:::longbox
    MenuInicial --> SalvaPlanilha["Salva a planilha"]:::longbox
    SalvaPlanilha --> FechaPlanilha["Fecha a planilha"]:::longbox
    FechaPlanilha --> Logoff["Faz o logoff no Sisap"]:::longbox
    Logoff --> HoraFinal["Obtém a hora final"]:::longbox
    HoraFinal --> CalculoTempo["Subtrai a hora final da inicial"]:::longbox
    CalculoTempo --> ExibeTempo["Exibe a mensagem do tempo gasto para inclusão dos dados"]:::longbox
    ExibeTempo --> FechaTerminal["Fecha a tela do terminal Prodemge"]:::longbox
    FechaTerminal --> Conferencia["Abre a planilha com os dados para conferência e tratativa dos erros/inconsistências"]:::longbox

    classDef longbox width:600px