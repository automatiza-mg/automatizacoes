graph TD
    subgraph Início
        A(Início) --> B{Obtém hora inicial}
    end

    B --> C{Executa terminal Prodemge}
    C --> D{Acesso ao Sisap}
    D --> E{Preenche usuário/senha}
    E --> F{Acesso à rotina Histórico Servidor}
    F --> G{Acesso à opção 21 - Faltas}
    G --> H{Acesso à opção 1 – Incluir Histórico Faltas}
    H --> I{Abre planilha}

    subgraph Loop
        I --> J{Primeiro dado}
        J --> K{Incluir histórico de faltas}
        K --> L{Lançamento da verba 7506}
        L --> M{Próximo dado}
        M --> J
    end

    M --> N{Retorna ao menu inicial}
    N --> O{Salva planilha}
    O --> P{Fecha planilha}
    P --> Q{Logoff Sisap}
    Q --> R{Obtém hora final}
    R --> S{Calcula tempo}
    S --> T{Exibe tempo}
    T --> U{Fecha terminal}
    U --> V{Abre planilha para conferência}