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

<img width="1909" height="1024" alt="Captura de tela 2025-08-07 094833" src="https://github.com/user-attachments/assets/0a50e2f8-12ae-4730-88f8-b96b05df7d7d" />


Esta é a tela do Automate com um robô qualquer. o recomendado é que quem compartilhará este robô usando o código dele clique na primeira ação, pressione ++ctrl+shift++ e clique na última ação para selecionar todo o código daquele subfluxo. Ou, então, clique em qualquer ação dele, pressione ++ctrl+a++ para selecionar todo o código e depois ++ctrl+c++.

No entanto, por descuido ou hábito, pode ser que ela tenha copiado o subfluxo inteiro, clicando no nome dele e depois em 'Copiar', desta forma:

<img width="454" height="328" alt="Captura de tela 2025-08-07 095608" src="https://github.com/user-attachments/assets/39c17941-e405-47ce-82d5-18dff9cebf23" />


Nesse caso, já que todo o subfluxo (e não todas as ações) foi copiado, a lógica é colar neste mesmo local, ou seja, **na parte de cima das ações**, como abaixo:

<img width="1147" height="41" alt="Captura de tela 2025-08-07 095805" src="https://github.com/user-attachments/assets/0cd93d4e-2ff8-448d-a763-0ee8c869d694" />


<img width="1228" height="38" alt="Captura de tela 2025-08-07 101847" src="https://github.com/user-attachments/assets/ba583a54-c421-4a91-b67b-853d149b22fc" />

!!! Dúvida
    **Mas como saber onde devo colar? Como saber a forma como meu remetente copiou o código?**

Um indicativo está no próprio código que ele te enviou. Códigos que começam com o termo `FUNCTION` provavelmente foram copiados usando todo o subfluxo.

<img width="428" height="98" alt="Captura de tela 2025-08-07 100447" src="https://github.com/user-attachments/assets/c9309084-0c7e-4b7e-9d04-779293968f66" />

Agora, você sabe mais um jeito de possivelmente corrigir aquele erro incômodo de código que não cola no Automate! Fique atento e espalhe essa dica :rocket:
