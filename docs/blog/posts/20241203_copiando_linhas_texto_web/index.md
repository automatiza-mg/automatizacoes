---
date: 2024-12-03
draft: true
authors: [andrelamor]
comments: true
categories:
  - Ferramentas
  - Power Automate
---

# Retirada de linhas adicionais (escaping) em textos copiados da Web

Um dos riscsos que podemos correr na operação de robôs, ao copiar dados ou textos diretamente na Web, é trazer linhas ocultas ao olhar humano, junto da variável que capturou o texto. Este post contém uma dica para contornar essa armadilha e seguir em frente com o fluxo no Power Automate, usando apenas a linha desejada.  

<!-- more -->

O caso prático em questão é como retirar uma linha 'indesejável' de um texto capturado como variável. O exemplo genérico para a situação seria:

- variável capturada
````
<Texto linha desejada> \r
<Linha vazia indesejável>
````
- variável desejada
````
<Texto linha desejada>
````

Ações `Extrair dados da página da WEB` e `Cortar texto` podem apresentar problemas, como variável copiada com linha adicional. Isso ocorre pela estrutura da página da Web, ou se não especificamos bem o que copiar da página.
Talvez haja uma linha adicional que pode ser verificada clicando duas vezes na variável criada, como na figura 
exemplo:

![](assets/linhas-ocultas.png)

Caso essa linha adicional passe desapercebida, se parte desse texto for usado como variável para dar nome a um arquivo, provavalmente vai gerar um erro no momento da ação de _salvar como_, na interface gráfica do Windows.

## Alternativa

Em textos ou tabelas, as linhas podem sofrer quebras, ter espaços, dentre outros, que são identificados por alguns sinais convencionais:

````
\r (return)
\n (new line)
\t (tab)
\s (space)
````
Tendo isso em vista, foram adicionadas duas ações (10 e 11) para suprimir a linha adicional mostrada na figura anterior:

![](assets/ações-alternativas.png)

Após a ação da linha 11 acima, o texto passa a exibir somente a primeira linha.

# Saiba Mais

Explore canais e materiais de referência para aprofundar seus conhecimentos sobre o **Power Automate**:

- [Documentação Oficial](https://docs.microsoft.com/pt-br/power-automate/)
- [Canal do Power Automate no YouTube](https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA)
- [Comunidade Power Automate](https://powerusers.microsoft.com/t5/Power-Automate-Community/ct-p/MPACommunity)
