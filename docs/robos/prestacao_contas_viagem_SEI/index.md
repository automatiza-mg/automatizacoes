---
comments: true
hide:
  - navigation
tags:
  - Prestação de contas viagens a trabalho
---

# Faz prestação de contas de viagem no SEI

## Informações gerais

| **Desenvolvedor**| Leyverson Teodoro  |
| ----------- | ------------------------------------ |
| **E-mail**       | leyversontss@gmail.com |
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.50.125.24304 |

Este robô automatiza o registro e a prestação de contas de viagens no Sistema Eletrônico de Informações (SEI). Ele é capaz de processar informações fornecidas pelo usuário necessárias para o preenchimento de formulário SEI,  extrair valor da viagem realizada por meio dos comprovantes PDF nato digital (ele não processa comprovantes digitalizados) que o usuário fornecer e interagir diretamente com o SEI para registrar e documentar as viagens realizadas.


- [x] **Entrada de Informações**: 
  - Solicita dados essenciais ao usuário, como nome, CPF, senha, MASP, órgão no SEI, e o diretório onde estão salvos os comprovantes de viagem.

- [x] **Processamento de PDFs**:
  - Busca os arquivos PDF na pasta informada.
  - Extrai e processa textos dos comprovantes para identificar valores de transporte.
  - Utiliza ChatGPT para extrair o valor da viagem.
  - Calcula o valor total das viagens realizadas.

- [x] **Automação no SEI**:
  - Realiza login no SEI com as credenciais fornecidas.
  - Cria novos processos para "Viagem a Serviço".
  - Preenche automaticamente os campos necessários do formulário SEI, incluindo valores calculados.
  - Inclui documentos relacionados, como prestações de contas e comprovantes, no processo criado.


## Pré-requisitos

<div class="grid" markdown>

:simple-powerautomate: __Power Automate__ na versão correta](#informacoes-gerais)
{ .card }

:octicons-file-directory-16: __Diretório__ onde estão os comprovantes informado pelo usuário
{ .card }

:octicons-file-text-16: __Dados do usuário__ para acesso e preenchimento de formulário SEI
{ .card }

:octicons-file-pdf-16: __Comprovantes__ de vigens em formato nato digital (não podem estar digitalizadas)
{ .card }

:octicons-gear-16: __Subfluxo__ criado com o mesmo nome indicado na seção ## Montando o seu robô
{ .card }

</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô Main 1__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/api_sei.txt)[^1] e cole no fluxo Main do Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô subfluxo 1__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/api_sei.txt)[^1] e cole no subfluxo  __chat_gpt__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô subfluxo 2__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/api_sei.txt)[^1] e cole no subfluxo  __entrada_variaveis__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô subfluxo 3__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/api_sei.txt)[^1] e cole no subfluxo  __sei__ do Power Automate Desktop.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"


[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.

