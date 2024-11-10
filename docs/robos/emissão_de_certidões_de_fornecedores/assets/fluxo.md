   ```mermaid
    graph TD
    A[Início] --> B[Consulta CNPJ na planilha]
    B --> C[Pesquisa CNPJ no site do CAGEF]
    C --> D{CRC Ativo?}
    D --> |Não| G[Pesquisa existência do CNPJ]
    D --> |Sim | H[Grava resultado e salva CRC]
    G --> I[Pesquisa CND Federal]
    I --> J[Pesquisa FGTS]
    J --> L[Pesquisa Justiça do Trabalho]
    L --> M{Empresa sediada em Minas Gerais?}
    M --> |Não| N[Buscar manualmente CND do estado da sede da empresa]
    M --> |Sim| O[Pesquisa CND no SIARE-SEAFAZ/MG]
    O --> P{Empresa sediada em Belo Horizonte?}
    P --> |Não| Q[Buscar manualmente CND do município da sede da empresa]
    P --> |Sim| R[Pesquisa CND na Prefeitura de Belo Horizonte]
    H --> B
    R --> S["Registra situações na planilha e salva certidões"]
    S --> B
````