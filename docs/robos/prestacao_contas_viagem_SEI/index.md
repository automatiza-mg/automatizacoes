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
  1. Solicita dados essenciais ao usuário, como nome, CPF, senha, MASP, órgão no SEI, e o diretório onde estão salvos os comprovantes de viagem.

- [x] **Processamento de PDFs**:  
  1. Busca os arquivos PDF na pasta informada.
  2. Extrai e processa textos dos comprovantes para identificar valores de transporte.
  3. Utiliza ChatGPT para extrair o valor da viagem.
  4. Calcula o valor total das viagens realizadas.

- [x] **Automação no SEI**:
  1. Realiza login no SEI com as credenciais fornecidas.
  2. Cria novos processos para "Viagem a Serviço".
  3. Preenche automaticamente os campos necessários do formulário SEI, incluindo valores calculados.
  4. Inclui documentos relacionados, como prestações de contas e comprovantes, no processo criado.


## Pré-requisitos

<div class="grid" markdown>

:simple-powerautomate: __Power Automate__ [na versão correta.](#informacoes-gerais)
{ .card }

:octicons-file-directory-16: __Diretório__ onde estão os comprovantes informado pelo usuário.
{ .card }

:octicons-key-16: __Dados do usuário__ para acesso e preenchimento de formulário SEI.
{ .card }

:page_facing_up: __Comprovantes__ de vigens em formato nato digital (não podem estar digitalizadas)
{ .card }

:octicons-gear-16: __Subfluxo__ criado com o mesmo nome indicado na seção [Montanto o seu robô.](#montando-o-seu-robo)
{ .card }

</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô Main 1__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/extencaoFJP_UBER_main.txt)[^1] e cole no fluxo __Main__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô subfluxo chat_gpt__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/extencaoFJP_UBER_chatGPT.txt)[^1] e cole no subfluxo  __chat_gpt__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô subfluxo entrada_variaveis__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/extencaoFJP_UBER_entrada_variaveis.txt)[^1] e cole no subfluxo  __entrada_variaveis__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô subfluxo sei__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/extencaoFJP_UBER_sei.txt)[^1] e cole no subfluxo  __sei__ do Power Automate Desktop.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"


[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.

