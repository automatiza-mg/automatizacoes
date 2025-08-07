---
date: 2025-08-07
draft: false
authors: [augustacora]
comments: true
categories:
  - Power Automate
---

# Seu código no Power Automate Desktop não está colando? Este pode ser o problema

Quando recebemos um código do Automate Desktop e tentamos colá-lo em nosso fluxo, o resultado ideal é que todas as ações sejam transpostas exatamente como foram enviadas, de forma a replicar o robô original. No entanto, nem sempre isso acontece. Neste post, vamos entender um dos motivos pelos quais isso pode estar acontecendo. _Spoiler: pode ser que você esteja colando no lugar errado._ 


<!-- more -->

Para além de questões de **atualização do programa** (o Power Automate em que o robô foi construído estar mais atualizado que o seu, em que o código está sendo colado), um dos motivos pelos quais as ações não estão sendo transferidas pode estar na forma como o seu remetente copiou as ações. Observe:

[imagem 1: tela do Automate toda]

Esta é a tela do Automate com um robô qualquer. o recomendado é que quem compartilhará este robô usando o código dele clique na primeira ação, pressione ++ctrl+shift++ e clique na última ação para selecionar todo o código daquele subfluxo. Ou, então, clique em qualquer ação dele, pressione ++ctrl+a++ para selecionar todo o código e depois ++ctrl+c++.

No entanto, por descuido ou hábito, pode ser que ela tenha copiado o subfluxo inteiro, clicando no nome dele e depois em 'Copiar', desta forma:

[imagem 2: tela do 'copiar' no subfluxo]

Nesse caso, já que todo o subfluxo (e não todas as ações) foi copiado, a lógica é colar neste mesmo local, ou seja, **na parte de cima das ações**, como abaixo:

[imagem 3: área de transferência nova sem o subfluxo colado]

[imagem 4: área de transferência nova com o subfluxo colado]

!!! Dúvida
    **Mas como saber onde devo colar? Como saber a forma como meu remetente copiou o código?**

Um indicativo está no próprio código que ele te enviou. Códigos que começam com o termo `FUNCTION` provavelmente foram copiados usando todo o subfluxo.

[imagem 5: código com FUNCTION]

Agora, você sabe mais um jeito de possivelmente corrigir aquele erro incômodo de código que não cola no Automate! Fique atento e espalhe essa dica :rocket:
