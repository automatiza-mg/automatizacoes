---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Prestação de contas de transporte por aplicativo - viagens a serviço

## Informações gerais

| **Desenvolvedor**| Leyverson Teodoro  |
| ----------- | ------------------------------------ |
| **E-mail**       | leyversontss@gmail.com |
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.50.125.24304 |

Este robô automatiza o registro e a prestação de contas de viagens no Sistema Eletrônico de Informações (SEI). 

Ele é capaz de processar informações fornecidas pelo usuário necessárias para o preenchimento de formulário SEI,  ler os comprovantes de transporte por aplicativo (que devem estar em PDFs de texto), calcular o valor total advindo do somatório das viagens e montar o processo SEI correspondente (com formulário de prestação de contas, PDFs dos comprovantes e documento de ateste). 


- [x] **Entrada de Informações**: 
  1. Solicita dados essenciais ao usuário, como nome da pessoa para quem a prestação será feita, MASP, diretório (caminho da pasta) onde estão salvos os comprovantes de viagem, dentre outras informações necessárias para preenchimento dos documentos.

- [x] **Processamento de PDFs**:  
  1. Busca os arquivos PDF na pasta informada.
  2. Extrai e processa textos dos comprovantes para identificar valores de transporte.
  3. Utiliza ChatGPT para extrair o valor da viagem.
  4. Calcula o valor total das viagens realizadas.

- [x] **Automatização no SEI**:
  1. Realiza login no SEI com as credenciais fornecidas.
  2. Cria novos processos para "Viagem a Serviço".
  3. Preenche automaticamente os campos necessários do formulário SEI, incluindo valores calculados.
  4. Inclui documentos relacionados, como prestações de contas e comprovantes, no processo criado.


## Pré-requisitos

<div class="grid" markdown>

:material-play-circle: __Power Automate__ [na versão correta.](#informacoes-gerais)
{ .card }

:octicons-file-directory-16: __Diretório (caminho da pasta)__ onde estão os comprovantes em PDF da pessoa para quem a prestação de contas será feita.
{ .card }

:octicons-key-16: __Dados do usuário__ para acesso e preenchimento de formulário SEI.
{ .card }

:page_facing_up: __Comprovantes__ de viagens em formato PDF nato digital (não podem ser PDFs digitalizados).
{ .card }

:octicons-discussion-closed-16: __Usuário já logado no Chat GPT__ antes da rodagem do robô.
{ .card }

:octicons-gear-16: __Subfluxos__ criados com os mesmos nomes indicados na seção [Montando o seu robô](#montando-o-seu-robo).
{ .card }

</div>

## Montando o seu robô

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô - Main__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_main.txt)[^1] e cole em um novo fluxo Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô - `entrada_variaveis`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_entrada_variaveis.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô - `chat_gpt`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_chat_gpt.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô subfluxo - `login_sei`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/login_sei.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô subfluxo `cria_processo`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_cria_processo.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-6: :octicons-copy-16: __Copie o código do robô subfluxo `insere_prestacao`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_prestacao.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-7: :octicons-copy-16: __Copie o código do robô subfluxo `insere_PDFs`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_PDFs.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

[:fontawesome-solid-8: :octicons-copy-16: __Copie o código do robô subfluxo `insere_ateste`__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_ateste.txt)[^1] e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
{ .card }

:fontawesome-solid-9: :material-application-variable: __Crie as variáveis de entrada__ `acesso_processo`[^2], `especificacao`[^3], `hipotese_restricao_ateste`[^4], `hipotese_restricao_prestacao`[^4], `hipotese_restricao_processo`[^4], `login_sei`[^5], `orgao_sei`[^6], `senha_sei`[^7] e `tipo_do_processo_criar`[^8].
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.
[^2]: Nível do acesso ("Público" ou "Restrito"). Recomendamos a modalidade restrita.
[^3]: Um texto a ser inserido no campo aberto do SEI que descreve sumariamente o processo a ser criado, como um título.
[^4]: Incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deverá ser criada mesmo assim, e o seu Valor ficar em branco.
[^5]: Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
[^6]: Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
[^7]: Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
[^8]: É uma palavra-chave que localiza o tipo do processo na lista predefinida de criação de processos do SEI: `Memorando` ou `Comunicação: Interna`, por exemplo.
