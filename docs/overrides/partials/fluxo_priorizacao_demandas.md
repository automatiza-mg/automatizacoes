??? note "**Clique para ver o fluxo de uma priorização de projeto**"

    ```mermaid
    graph TD
    A("`**Início**`") --> B[Recebe pedido de apoio.]
    B --> C[Formaliza recebimento do pedido.]
    C --> D{Pedido coerente?}
    D --> |Sim| E[Envia para priorização inicial.]
    D --> |Não| F[Solicita exclarecimentos.]
    F --> G{Dúvidas esclarecidas?}
    G --> |Sim| E
    G --> |Não| F
    E --> H[Comunica resultado da priorização inicial.]
    H --> I[Gestão SIGES prioriza.]
    I --> J{Pedido priorizado?}
    J --> |Não| I
    J --> |Sim| L[Comunica resultado da priorização final.]
    L --> M[Inicia apoio automatização.]
    M --> N(Fim.)
    ```
