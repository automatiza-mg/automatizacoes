---
comments: true
hide:
  - navigation
tags:
  - SEI
---

# Afastamento para aperfeiçoamento profissional

## Informações gerais

| **Desenvolvedor**| Extensionistas FJP (Caio Moreira, Mateus Ribeiro) e AutomatizaMG (Henrique Romano) |
| ----------- | ------------------------------------ |
| **E-mail**       | simplificacao@planejamento.mg.gov.br |
| **Ferramenta**    | Power Automate Desktop |
| **Versão Power Automate**    | 2.51.231.24333 |

Este robô automatiza a criação das Notas Técnicas de trâmites internos para os pedidos de afastamento para aperfeiçoamento profissional. 

Ele é capaz de ler todos os registros planilhados pela equipe da Sugesp ao receber os processos SEI dos pedidos dos servidores, e prosseguir com os trâmites dentro do SEI para o andamento do processo conforme fluxo definido pelo setor.

De maneira resumida o robô executa de forma automática as seguintes tarefas:


- [x] Login no SEI;
- [x] Seleciona unidade correta no SEI;

- **A partir daqui, para cada pedido planilhado:**

- [x] Cria novo processo SEI;
- [x] Cria nova Nota Técnica dentro do respectivo processo;
- [x] Edita a Nota Técnica com as respectivas informaçoes de cada pedido.


??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/projetos/extensao/afastamento_aperfeicoamento_profissional/assets/fluxo_afastamento_aperfeicoamento.md"
    ```

## Pré-requisitos

<div class="grid" markdown>

:simple-powerautomate: __Power Automate__ [na versão correta.](#informacoes-gerais)
{ .card }

:fontawesome-brands-chrome: __Chrome__ como navegador
{ .card }

:simple-gitextensions:  __Extensão Chrome__ para [Power Automate](https://chromewebstore.google.com/detail/microsoft-power-automate/ljglajjnnkapghbckkcmodicjhacbfhk) ativada.
{ .card }

:octicons-gear-16: __Subfluxos__ criados com os mesmos nomes indicados na seção [Montando o seu robô](#montando-o-seu-robo).
{ .card }

</div>

## Montando o seu robô

Em construção!
<!--
Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

[:fontawesome-solid-1: :octicons-copy-16: __Copie o código do robô Main__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_main.txt)[^1] e cole no fluxo __Main__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-2: :octicons-copy-16: __Copie o código do robô subfluxo entrada_variaveis__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_entrada_variaveis.txt)[^1] e cole no subfluxo  __entrada_variaveis__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô subfluxo chat_gpt__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_chat_gpt.txt)[^1] e cole no subfluxo  __chat_gpt__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô subfluxo login_sei__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/login_sei.txt)[^1] e cole no subfluxo  __login_sei__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-5: :octicons-copy-16: __Copie o código do robô subfluxo cria_processo__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_cria_processo.txt)[^1] e cole no subfluxo  __cria_processo__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-6: :octicons-copy-16: __Copie o código do robô subfluxo insere_prestacao__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_prestacao.txt)[^1] e cole no subfluxo  __insere_prestacao__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-7: :octicons-copy-16: __Copie o código do robô subfluxo insere_PDFs__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_PDFs.txt)[^1] e cole no subfluxo  __insere_PDFs__ do Power Automate Desktop.
{ .card }

[:fontawesome-solid-8: :octicons-copy-16: __Copie o código do robô subfluxo insere_ateste__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_ateste.txt)[^1] e cole no subfluxo  __insere_ateste__ do Power Automate Desktop.
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
-->