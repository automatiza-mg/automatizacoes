---
date: 2024-05-23
draft: true
authors: [gabrielbdornas]
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

## Instalação do pacote pythomate

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

Pronto pacote instalado.
Para testar você precisará apenas do nome do fluxo Power Automate que deseja realizar o agendamento.
No meu caso automatizarei o fluxo `teste-pythomate-sem-variavel`.

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

Caso tenha alguma dúvida sobre a instalação é só entrar em contato através do formulário abaixo ou no nosso e-mail
