---
comments: true
hide:
  - navigation
tags:
  - Modular
  - SEI
---

# Login no SEI

<video width="640"  controls>
    <source src="#" type="video/mp4">
</video>

## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô dedicado a facilitar o acesso ao SEI.
- [x] Automatiza todo o processo de login SEI, verificando, antes de iniciar, se login(CPF) e órgão informados estão no padrão corretos.
- [x] Aguarda o carregamento das páginas para garantir que tudo esteja certo.
- [x] Economiza tempo e evita erros.

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
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
    E[Erro: CPF inválido] --> A
    H[Erro: Órgão indisponível] --> A
    ```

--8<-- "docs/partials/modelo_robo/montando_seu_proprio_robo.md"

??? copy "**Clique para copiar e colar**"

    === ":material-file-code: main"

        ```yaml
        --8<-- "docs/robos/login_sei/assets/main.txt"
        ```

- Crie **variável de entrada** para:
    - **`login_sei`**: Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
    - **`senha_sei`**: Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
    - **`orgao_sei`**: Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.

## Pré-requisitos

<div class="grid" markdown>

:simple-powerautomate: __Power Automate__ na [versão correta](#informacoes-gerais)
{ .card }

:fontawesome-brands-chrome: __Chrome__ como navegador
{ .card }

:simple-gitextensions:  __Extensão Chrome__ para [Power Automate](https://chromewebstore.google.com/detail/microsoft-power-automate/ljglajjnnkapghbckkcmodicjhacbfhk)
{ .card }

</div>


--8<-- "docs/partials/modelo_robo/ajuda.md"
