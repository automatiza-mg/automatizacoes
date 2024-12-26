graph TD
    subgraph Início
        A(Início) --> B{Obtém hora inicial}
    end

    B --> C{Executa terminal Prodemge}
    C --> D{Acesso ao Sisap}
    D --> E{Preenche usuário/senha}
    E --> F{Acesso à rotina Faltas}
    F --> G{Acesso à opção 1}
    G --> H{Abre planilha}

    subgraph Loop
        H --> I{Primeiro dado}
        I --> J{Processa dado}
        J --> K{Próximo dado}
        K --> I
    end

    K --> L{Retorna ao menu inicial}
    L --> M{Salva planilha}
    M --> N{Fecha planilha}
    N --> O{Logoff Sisap}
    O --> P{Obtém hora final}
    P --> Q{Calcula tempo}
    Q --> R{Exibe tempo}
    R --> S{Fecha terminal}
    S --> T{Abre planilha para conferência}