---
date: 2024-05-23
draft: false
authors: [dcd-github-admin]
comments: true
categories:
  - Power Automate
---

# Criando agendamentos Power Automate

Segundo a [documentação do Power Automate](https://learn.microsoft.com/en-us/power-automate/desktop-flows/run-desktop-flows-url-shortcuts#prerequisites) é possível criar agendamento de tarefas, mas para tal seria necessário uma licença Premium.
Como esta não é a realidade da maiorida dos usuário a equipe Automatiza.MG resolveu criar a ferramenta [pythomate](https://github.com/automatiza-mg/pythomate), ainda em fase de desenvolvimento e testes, para auxiliar nesta demanda.

<!-- more -->

Mas o que seria então esta ferramenta?
Ela é um conjunto de scripts Python que, segundo sua documentação:

> Pacote pythomate inicia fluxo(s) e rotina(s) de ferramentas Microsoft (como Power Automate e Power Bi) via linha de comando.
> Aliado ao agendador de tarefas Windows cria-se gatilho(s).

Neste sentido o pythomate será capaz, juntamente com o agendador de tarefas Windows, de criar gatilhos de horários para qualquer fluxo Power Automate Desktop.
Ela foi criada com o intuito de ser simples de configurar e utilizar.

Você vai precisar ter o Python instalado em sua máquina, o que pode ser realizado fazendo o download da ferramenta na [página oficial da linguagem](https://www.python.org/downloads/).
Não se esqueça de selecionar a opção para incluir a instalação no PATH do Windows.
Sugiro baixar também a ferramenta [Git for Windows](https://git-scm.com/download/win), ela auxiliará bastante o processo de configuração do nosso pacote [pythomate](https://github.com/automatiza-mg/pythomate).

Nossa ferramenta ganhou uma página de destaque em nossa [Biblioteca de robôs](../../../robos/pythomate/).
Todos os passos tratados neste post também foram detalhados no vídeo abaixo, caso prefira:

![type:video](https://www.youtube.com/embed/09ceWwO6Xx0)

## Instalação do pacote pythomate

Antes de tudo, certifique-se de ler a [documentação da ferramenta](https://github.com/automatiza-mg/pythomate?tab=readme-ov-file#instala%C3%A7%C3%A3o) para se certificar que:

- Caminho de instalação do Power Automate foi adicionado ao PATH do Windows[^1].
- A opção de configuração "Ao fechar, manter aplicativo em execução" do Power Automate está desmarcada.

Abra o aplicativo Git Bash e selecione a pasta onde você irá instalar o pacote.
A criação desta pasta poderá ser feita, sem maiores problemas, via interface gráfica do Windows, como você já está acostumado a fazer.
No meu caso realizarei a instalação na pasta `Documents/code/teste-pytomate/`.
Lembrando que, ao abrir o aplicativo Git Bash você será direcionado para sua pasta de usuário da máquina.
Em caso de dúvidas basta rodar o comando  `pwd` para conferência.
O comando `ls -la` te ajuda a visualizar todas as pastas para as quais você poderá navegar.

```
# Conferindo local ao abrir Git Bash
$ pwd

# Navegando para pasta onde instalarei o pacote
$ cd Documents/code/teste-pytomate/

# Criando ambiente virtual python
$ python -m venv venv

# Ativando ambiente virtual python
$ source venv/Scripts/activate

# Instalando pacote pythomate
$ pip install pythomate
```

Pronto, pacote instalado.
Para testar você precisará apenas do nome do fluxo Power Automate que deseja realizar o agendamento.
No meu caso automatizarei o fluxo [`teste-pythomate-sem-variavel`](https://github.com/automatiza-mg/biblioteca-de-robos/blob/main/robos/teste_pythomate.txt)[^2].

```
# Testando a execução do fluxo via pythomate
$ pythomate run automate teste-pythomate-sem-variavel
```

Caso seu fluxo seja executado com sucesso você estará pronto para seguir.
Agora bastará criar uma rotina para rodar o comando acima via agendador de tarefa no Windows.
Neste ponto vale uma ressalva.
Como dito no início deste post o pythomate ainda está em fase de desenvolvimento e testes.
Uma série de erros ainda poderão ocorrer durante a execução do comando mostrado acima.
Os erros já identificados podem ser observados [nos Issues do repositório GitHub](https://github.com/automatiza-mg/pythomate/issues).
Neste momento, talvez, o erro mais grave diz respeito a dificuldade de inicialização de fluxos que contenham variáveis de entrada cadastradas.
[Este Issue](https://github.com/automatiza-mg/pythomate/issues/12) relata o problema.
O erro pode acontecer ou não.
Caso encontre algum erro ainda não listado [nos Issues do repositório GitHub](https://github.com/automatiza-mg/pythomate/issues) seria um prazer se você pudesse nos relatar com a abertura de mais um Issue.

## Agendamento de tarefas no Windows

Como foi a primeira vez que realizei algum agendamento tive algumas dificuldades.
Todas elas foram relatadas [neste Issue](https://github.com/automatiza-mg/pythomate/issues/16).
Case encontre alguma, quem sabe ele não poderá te ajudar.
[Este video](https://www.youtube.com/watch?v=Gq-2tAQP_hE) me ajudou a iniciar o processo.
Recomendo desmarcar a opção "Executar estando o usuário conectado ou não" (conforme sugerido pelo vídeo) caso encontre algum erro, o meu foi relatado no Issue citado acima.

Vamos aos passos:

  - Digite `Executar` na barra de pesquisa inicial do Windows.
  - Na janela que será aberta digite `taskschd.msc` para inciar o painel de configuração do agendamento:

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/387f596b-f253-4b97-86f5-b209093c8430)

  - Clique com o botão direito do mouse em `Biblioteca do Agendador de Tarefas` e selecione a opção  `Criar Tarefa`:

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/cc61285f-fb7b-493f-acf9-29873e2ab0a3)

  - Dê um nome para sua tarefa e vá para a aba `Disparadores` para cadastrar o horário desejado para a nova tarefa:

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/348f1cbd-b8fb-49c3-81fb-d5f6070ce845)

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/348168bb-244d-43f7-b94d-c8e74d8b0263)

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/7cb056a1-6d24-4956-a6ca-5910c92a1566)

  - Vá para a aba `Ações` para cadastrar a chamada do pythomate.
  - Clique em `Novo` e digite `powershell.exe` na opção "Programa/Script"

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/35a10713-3ae9-426e-af8f-a02737d2c050)

  - Na opção "Adicione argumentos (opcional)" inclua os comandos responsáveis por chamar o pythomate:
    - Meu exemplo foi `-noexit cd C:\Users\<usuario>\Documents\code\teste-pytomate ; .\venv\Scripts\activate ; pythomate run automate teste-pythomate-sem-variavel ; exit`
    - Se você reparar bem são praticamentes os mesmos utilizados na [instalação e teste do pacote](#instalacao-do-pacote-pythomate).
    - [Este comentário](https://github.com/automatiza-mg/pythomate/issues/16#issuecomment-2127188908) explica tudo sobre a construção do comando.
  - Para testar se o agendamento foi criado basta clicar com o botão direito e pedir para executar

![image](https://github.com/automatiza-mg/automatizacoes/assets/49699290/4109056f-e1af-4be2-85e4-89a22f3f4864)

## Considerações finais

Bom, apesar de ainda estar em fase de testes, acredito que o [pythomate](https://github.com/automatiza-mg/pythomate) pode ser uma boa opção para criar fluxos 100% autônomos.
O repositório do projeto está sendo recheado com o máximo de informações possível sobre sua utilização.
Caso tenha alguma dúvida sobre qualquer ponto abordado aqui, da instalação dos programas necessários ao agendamento em si, é só entrar em contato através do formulário abaixo ou no nosso e-mail [simplificacao@planejamento.mg.gov.br](mailto:simplificacao@planejamento.mg.gov.br).

[^1]: Caso encontre algum problema durante este processo, [este Issue](https://github.com/automatiza-mg/pythomate/issues/18) poderá te auxiliar.
[^2]: Fluxo de teste precisa [desta planilha excel](javascript:void(0);){ path="assets/teste_pythomate.csv" fileName="teste_pythomate.xlsx" }.
