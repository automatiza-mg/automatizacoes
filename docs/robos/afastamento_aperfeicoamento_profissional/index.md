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

</div>

## Montando o seu robô

Em construção!

Este é um **protótipo de robô**.
Entenda seu funcionamento e, caso precise, ajuste-o às suas necessidades.

Para dar vida a ele:

<div class="grid" markdown>

:fontawesome-solid-1: :octicons-workflow-24: __Crie um novo subfluxo para leitura da planilha de apoio__[^1] e nomeie como __criar_planilha__.
{ .card }

[:fontawesome-solid-2: :octicons-workflow-24: __Siga todos os passos do robô de login no SEI.__](../login_sei/#montando-o-seu-robo){ target="_blank" }[^2]
{ .card }

[:fontawesome-solid-3: :octicons-copy-16: __Copie o código do robô de troca de unidade no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/troca_unidade_sei.txt){ target="_blank" }[^3] e cole em um novo subfluxo `troca_unidade` [^4]:warning:{ title='Caso seja necessário' }.
{ .card }

[:fontawesome-solid-4: :octicons-copy-16: __Copie o código do robô de criar processo no SEI__](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/cria_processo_sei.txt)[^3] e cole em um novo subfluxo `cria_processo_sei` [^5].
{ .card }

:fontawesome-solid-5: :octicons-workflow-24: __Crie um novo subfluxo para criação da Nota Técnica__[^6] e nomeie como __criar_nota_tecnica__.
{ .card }

:fontawesome-solid-6: :octicons-workflow-24: __Crie um novo subfluxo para edição da Nota Técnica__[^7] e nomeie como __editar_nota_tecnica__.
{ .card }

:fontawesome-solid-7: :octicons-workflow-24: __Crie ações `Executar subfluxo`__ no subfluxo `Main`, para cada um dos subfluxos 1, 2 e 3.
{ .card }

:fontawesome-solid-7: :octicons-workflow-24: Ainda no subfluxo `Main` __inicie um loop usando a ação `For each`__, e dentro do loop __crie ações `Executar subfluxo`__ para cada um dos subfluxos 4, 5 e 6.
{ .card }

</div>

--8<-- "docs/overrides/partials/modelo_robo/ajuda.md"

[^1]: Essa planilha pode ser online (Drive, SharePoint, etc) ou offline (salva no próprio computador do usuário). As ações desse subfluxo serão configuradas de acordo com a planilha.

[^2]: Verifique se as variáveis de entrada descritas na página do robo para [login no sei](../login_sei/#montando-o-seu-robo) `login_sei`, `senha_sei`, `orgao_sei` ainda precisam ser criadas.

[^3]: Na nova aba que será aberta, basta apertar ++ctrl+a++ para selecionar todo código e ++ctrl+c++ para copiar.

[^4]: Verifique se a variável de entrada descrita na página do robo para [troca de unidade no SEI](../troca_unidade_sei/#montando-o-seu-robo) `unidade_sei` ainda precisa ser criada.

[^5]: Crie as variáveis de entrada `tipo_do_processo_criar`<sub>(_palavra-chave que localiza o tipo do processo na lista predefinida de criação de processos do SEI: <ins>Memorando</ins> ou <ins>Comunicação: Interna</ins>, por exemplo._)</sub>, `especificacao` <sub>(_texto a ser inserido no campo aberto do SEI que descreve sumariamente o processo a ser criado, como um título_)</sub> e `hipotese_restricao`<sub>(_apenas se o processo for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deverá ser criada mesmo assim, e o seu valor ficar em branco_)</sub>.

[^6]: Esse subfluxo é semelhante ao subfluxo de criar memorando (presenta na Biblioteca de robôs), porém alguns ajustes devem ser feitos para selecionar o documento Nota Técnica (geralmente usando um _Documento Modelo_).

[^7]: Esse subfluxo deve usar ações de _substituir texto_ para alterar as palavras chaves da Nota Técnica padrão, para os dados existentes na planilha referentes ao respectivo processo. Uma dica é usar o ++ctrl+f++ para buscar essas palavras chaves no documento padrão, evitando assim a perda da formatação do texto no SEI.