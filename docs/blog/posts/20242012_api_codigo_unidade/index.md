---
date: 2024-12-20
draft: false
authors: [henriquesiqr]
comments: true
categories:
  - Power Automate
---

# Buscando código da unidade no SEI

Para utilização do robô de baixar processos e documentos no SEI, presente na biblioteca de robôs do Automatiza, é necessário ter o código da unidade no SEI. Cada unidade existente no SEI possui um código específico, que é possível de ser obtido utilizando JavaScript.

<!-- more -->

!!! Info
    Não é necessário ter conhecimento na linguagem de programação Java para realizar esse procedimento, basta seguir o passo a passo descrito nesse post.

## Passo 1: Navegação no SEI
O primeiro passo para encontrar o código da unidade SEI é entrar no sistema e clicar no botão de troca de unidade:

![pag_inicial_sei](https://github.com/user-attachments/assets/4d80cc92-b328-4eaf-8476-937f5150fc79)

Depois, já com a página da troca de unidade aberta, clique com o botão direito em qualquer lugar na tela e selecione a opção "Inspecionar":

![inspecionar](https://github.com/user-attachments/assets/3c4d1fcf-5992-4bf8-a380-37ab30d53c85)


## Passo 2: Inspecionando a página
Nesse momento, é como se você estivesse verificando "por debaixo do capô" de um carro. Ou seja, você está vendo como essa página da Web foi construída, com todos os seus códigos em cada elemento da página. A tela ficará dividida, com a página em si do lado esquerdo e, do lado direito, os códigos e um terminal:

![tela_inspecionada](https://github.com/user-attachments/assets/491700fe-654a-4eee-8419-80385976fd31)


Para buscar o ID da sua unidade, você irá clicar no botão destacado abaixo, que é uma seta na diagonal em uma retângulo pontilhado:

![clique_tela_inspecionada](https://github.com/user-attachments/assets/0d5e87a2-74b6-4c87-a26e-604717ddbe0a)


A partir desse clique, ao passar o mouse sobre cada espaço da página do SEI, ele ficará destacado e no lado direito será possível ver seu código. Com isto, basta clicar na unidade SEI que deseja obter o código:

![clique_unidade](https://github.com/user-attachments/assets/4cb700aa-fb7b-40d9-8ec6-4ded90a91e1c)


Com isso, você já está próximo de descobrir o ID da unidade SEI. No lado direito, você já está vendo o código desse elemento da página da Web. Observe que já é possível ver o nome da unidade no conteúdo do elemento. Entretanto, o ID fica "escondido", portanto, você terá que clicar nessa setinha que irá abrir outra linha de código:

![clique_seta](https://github.com/user-attachments/assets/306bfb23-d84e-493c-88af-58689b586216)


Assim, após o clique, o ID irá aparecer nas linhas de código:

![id_visivel](https://github.com/user-attachments/assets/62032b15-24ac-4319-be73-f1d48b4045f4)


Agora basta você copiá-lo para utilizar no seu fluxo que utiliza a API do SEI.

Caso prefira, as instruções estão detalhadas no vídeo abaixo:

![type:video](https://www.youtube.com/embed/09ceWwO6Xx0)