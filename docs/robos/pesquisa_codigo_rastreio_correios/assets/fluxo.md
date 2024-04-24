graph TD
A[Início] --> B[Constroi link para chamada da API]
B --> C[Chama API]
C --> D{Resposta bem sucedida?}
D --> |Sim 200| G[Converte JSON em objeto]
D --> |Não | H[Mensagem de erro]
G --> I[Busca informações no JSON]
I --> J[Armazena informações em variáveis]
J --> L[Aguarda 1 segundo]
L --> M[Fim]
H --> M
