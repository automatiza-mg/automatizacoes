---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Insere documento externo no SEI


## Informações gerais

| **Desenvolvedor**| Automatiza-mg  |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br|
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.39.00239.23332 |

- [x] Robô que insere documento externo em processo no SEI.
- [x] Utiliza os subfluxos de login, troca de unidade e criação de processo no SEI.
- [x] Economiza tempo e evita erros.

--8<-- "docs/overrides/partials/modelo_robo/requisitos_montando_seu_proprio_robo.md"

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-workflow-24: __Siga todos os passos do robô de criação de processos no SEI.__](../cria_processo_sei/#montando-o-seu-robo){ target="_blank" }
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô de inserção de documento externo__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/insere_documento_externo.txt){ target="_blank" }[^1] e cole em um novo subfluxo chamado `insere_documento_externo`[^1].
{ .card }

:fontawesome-solid-3: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main` e selecione o subfluxo `insere_documento_externo`.
{ .card }

[:fontawesome-solid-4: :material-application-variable: __Clique aqui para baixar a planilha modelo__](javascript:void(0);).
{ #download-button .card path="assets/documento_sei.csv" fileName="documento_sei.xlsx" }


:fontawesome-solid-5: :material-application-variable: __Crie a variável de entrada__ `caminho_excel`.
{ .card }

:fontawesome-solid-6: :material-application-variable: __Complete as colunas da planilha modelo__ com as informações do documento a ser anexado: `Tipo de Documento`[^2], `data`[^3], `número na árvore`[^4], `nome na árvore`[^5], `formato`[^6], `tipo de conferência`[^7], `nível de acesso`[^8], `tipo de restrição`[^9], `caminho do arquivo`[^10], `nome do arquivo`[^11].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Tipo do documento conforme nominado na lista predefinida do SEI para anexar arquivo externo.
[^3]: Data sem barras. Exemplo: 19092024 (para 19/09/2024).
[^4]: Número do documento, de livre atribuição.
[^5]: Nome do documento, de livre atribuição.
[^6]: Valores possíveis, conforme opções do SEI: `Nato-digital` ou `Digitalizado nesta Unidade`
[^7]: Preencher conforme lista predefinida de opções no SEI. Exemplo: `Cópia Simples`
[^8]: Valores possíveis, conforme opções do SEI: `Sigiloso`, `Restrito` ou `Público`.
[^9]: Apenas se o documento for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deixar a célula correspondente em branco.
[^10]: Copiar e colar o endereço da pasta onde se localiza o arquivo a ser anexado, sem o nome do próprio arquivo. Exemplo: `C\Usuários\m123456\Documentos\`
[^11]: Copiar e colar o nome do arquivo a ser anexado, com a extensão. Exemplo: `planilha.xlsx`