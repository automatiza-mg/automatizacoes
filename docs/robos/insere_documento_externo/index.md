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

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô - `insere_documento_externo`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/insere_documento_externo.txt){ target="_blank" }[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop[^1].
{ .card }

:fontawesome-solid-3: :octicons-workflow-24: __Crie uma ação `Executar subfluxo`__ no subfluxo `Main` e selecione o subfluxo `insere_documento_externo`.
{ .card }

[:fontawesome-solid-4: :material-microsoft-excel: __Clique aqui para baixar a planilha modelo__](javascript:void(0);) [^2].
{ #download-button .card path="assets/documento_sei.csv" fileName="documento_sei.xlsx" }

:fontawesome-solid-5: :material-square-edit-outline: __Complete as colunas da planilha modelo__ com as informações do documento a ser anexado: `Tipo de Documento`[^3], `data`[^4], `número na árvore`[^5], `nome na árvore`[^6], `formato`[^7], `tipo de conferência`[^8], `nível de acesso`[^9], `tipo de restrição`[^10], `caminho do arquivo`[^11], `nome do arquivo`[^12].
{ .card }

:fontawesome-solid-6: :material-application-variable: __Crie a variável de entrada__ `caminho_excel`, com o caminho da pasta onde foi salvo.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.
[^3]: Tipo do documento conforme nominado na lista predefinida do SEI para anexar arquivo externo.
[^4]: Data sem barras. Exemplo: 19092024 (para 19/09/2024).
[^5]: Número do documento, de livre atribuição.
[^6]: Nome do documento, de livre atribuição.
[^7]: Valores possíveis, conforme opções do SEI: `Nato-digital` ou `Digitalizado nesta Unidade`.
[^8]: Preencher conforme lista predefinida de opções no SEI. Exemplo: `Cópia Simples`.
[^9]: Valores possíveis, conforme opções do SEI: `Sigiloso`, `Restrito` ou `Público`.
[^10]: Apenas se o documento for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deixar a célula correspondente em branco.
[^11]: Copiar e colar o endereço da pasta onde se localiza o arquivo a ser anexado, sem o nome do próprio arquivo. Exemplo: `C\Usuários\m123456\Documentos\`
[^12]: Copiar e colar o nome do arquivo a ser anexado, com a extensão. Exemplo: `planilha.xlsx`