graph TD
    A("[`**Início**`]") --> B{Verificar se a página não contém 'Trocar Unidade'}
    B --> |Sim| C{Enviar teclas de atalho}
    C --> D{Esperar pela página de 'Trocar Unidade'}
    D --> E{Clicar em 'Trocar Unidade'}
    E --> F{Selecionar nova unidade}
    F --> G{Confirmar a troca}
    G --> H{Registrar a ocorrência}
    H --> I("[`**Fim**`]")
    B --> |Não| I("[`**Fim**`]")


