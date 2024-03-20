??? note "**Clique para ver o fluxo do priorização**"

    ```mermaid
    graph TD
    A("`**Início**`") --> B[Recebe pedido de apoio.]
    B --> C[Formaliza recebimento via e-mail.]
    C --> D{Pedido coerente?}
    D --> |Sim| E[Envia para priorização inicial.]
    D --> |Não| F[Solicita exclarecimentos.]
    F --> G{Dúvidas esclarecidas?}
    G --> |Sim| E
    G --> |Não| F
    E --> H[Formaliza priorização inicial via e-mail.]
    H --> I[Gestão SIGES prioriza.]
    I --> J{Pedido priorizado?}
    J --> |Não| I
    J --> |Sim| L[Formaliza priorização final via e-mail.]
    L --> A
    L --> M[Inicia apoio automatização.]
    M --> N(Fim.)
    ```
