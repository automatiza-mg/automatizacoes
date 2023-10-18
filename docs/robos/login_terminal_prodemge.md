---
comments: true
hide:
  - navigation
tags:
  - Ferramentas
---

# Login terminal PRODEMGE

- **Responsável pelo desenvolvimento do protótipo**: gabriel.dornas@planejamento.mg.gov.br

## Funções desenvolvidas pelo protótipo:

- Realizar login em terminal PRODEMGE.
- Consegue logar nos sistemas SIAD, SIAFI e SISAP.

??? abstract "**Fluxo do robô**"

    ```mermaid
            --8<-- "docs/fluxos/fluxo1.md"
    ```

## Robô em funcionamento

![type:video](https://cecad365.sharepoint.com/sites/LAB.mg/_layouts/15/embed.aspx?UniqueId=4a028dcd-334c-4156-b350-adaedeb4677f&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Automatização consulta empresas 1.3x.mp4)

## Montando o seu robô

Em primeiro lugar, é importante relembrar que o conteúdo desta página é um protótipo de robô. **Portanto, se você pretende utilizar este protótipo, tenha especial atenção às especificidades do problema que você quer solucionar, ajustando o código às suas necessidades.**

O arquivo contendo o código deste robô está armazenado [nesta página](https://github.com/lab-mg/automatizacoes/blob/main/robos/login_terminal_prodemge/login_terminal_prodemge.txt). Para dar vida ao seu, clique na caixa **copiar e colar** abaixo, copie e cole o código disponível em um novo fluxo Power Automate Desktop.

Não se esqueça de personalizar seu novo robô, conforme orientado abaixo.


??? note "**Login terminal PRODEMGE**"

        --8<-- "robos/login_terminal_prodemge/login_terminal_prodemge.txt"

**Importante**

Este protótipo necessita da criação de três variáveis de entrada:

- `login`: Login do usuário no sistema desejado. Em geral é o próprio masp do servidor[^1].
- `senha`: Senha do usuário no sistema desejado[^1].
- `sistema`: Sistema para qual se deseja realizar o login. Valor padrão deverá ser, obrigatoriamente,  uma das opções: `sisap`, `siad`, `siafi`[^2].

Sugerimos cadastrar um subfluxo durante a utilização deste robô.


!!! question "Precisando de ajuda?"

    Algum erro está ocorrendo em uma das fases de criação de seu robô?
    Não tem problema.
    Abaixo temos um espaço para perguntas e respostas.
    Dá uma olhadinha lá.
    Quem sabe alguém já não fez uma pergunta com o mesmo problema que você está enfrentando.
    Caso prefira mande um e-mail para [escolher-email@dominio.com]().

    Ótimo trabalho!

[^1]: Lembrar de marcar a variável de entrada criada como confidencial.
[^2]: Valores deverão ser cadastrados com letras minúsculas.
