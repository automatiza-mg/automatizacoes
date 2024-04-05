graph TD
A("`**Início**`") --> B{Verificar CPF}
B --> C{CPF válido?}
C --> |Sim| D{Verificar órgão}
C --> |Não| E{Erro: CPF inválido}
D --> F{Órgão disponível?}
F --> |Sim| G{Abrir Chrome}
F --> |Não| H{Erro: Órgão inexistente}
G --> I{Aguardar página inicial}
I --> J{Selecionar órgão}
J --> K{Inserir login}
K --> L{Inserir senha}
L --> M{Aguardar página inicial do SEI}
M --> N{Fechar mensagens}
N --> O("`**Login realizado com sucesso**`")
O --> P{Necessário troca unidade?}
P --> |Sim| Q{Troca unidade}
P --> |Não| R{Realiza próxima ação}
Q --> R
R --> S
S("`**Fim**`")
E[Erro: CPF inválido] --> A
H[Erro: Órgão indisponível] --> A
