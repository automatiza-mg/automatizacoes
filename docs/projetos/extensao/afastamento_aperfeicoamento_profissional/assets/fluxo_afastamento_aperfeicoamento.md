graph TD
    A(Abre navegador)
    B(Login no SEI)
    A --> B
    B --> C(Troca para unidade desejada)
    C --> D(Lê a planilha de controle)
    D --> |Planilha no Drive do setor|E(Cria novo processo)
    E --> |Loop|H
    E --> F(Cria Nota Técnica)
    F --> G(Substitui informações na Nota Técnica conforme planilha)
    G --> H(Salva Nota Técnica)
    H --> |Loop|E
    H --> I(Fim)