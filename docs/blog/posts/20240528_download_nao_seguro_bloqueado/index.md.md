---
date: 2024-05-28
authors: [Isabelle-Fernandes]
comments: true
categories:
  - Tira dúvidas
---

# Fazer download bloqueado de documento em sites classificados como não seguros

Na seção de **Tira-Dúvidas**, foi colocada a situação de realizar download de documento no site classificado como não seguro. Quando o robô era executado para realizar essa tarefa, não conseguia. O motivo era pelo site ser não seguro, abria um pop-up que perguntava ao usuário, confirmando se ele gostaria de realizar o download do documento. Essa dificuldade pode ser comum, pois a tarefa de baixar arquivos de sites não seguros e salvá-los localmente é muito praticada entre os servidores.

<!-- more -->

O seguinte pop-up é aberto, impedindo que o download seja concluído:

![](https://github.com/automatiza-mg/handbook/assets/65547646/6bf72ffa-8423-4df6-a932-01c4af3200ad)


A solução apresentada na reunião é simples e funciona.

Basta ir em configurações do site. Para isso, é preciso clicar com o botão esquerdo do mouse na imagem `Não seguro`, que fica ao lado esquerdo do endereço do site.

![](https://github.com/automatiza-mg/handbook/assets/65547646/5ffa16fd-f3ab-471a-8575-93c3c0a700bb)

E em seguida, clicar em `Configurações do site`. Quando a guia de configurações for aberta, será necessário configurar dois campos do site não seguro:

- Download automático: colocar como `Permitir`.

![](https://github.com/automatiza-mg/handbook/assets/65547646/8cae4017-83bb-4b87-9251-e7bd3835bcc7)

- Conteúdo não seguro: colocar como `Permitir`.

![](https://github.com/automatiza-mg/handbook/assets/65547646/333d2ed0-9ab2-4944-97bc-7cb2d1559991)

Com essas modificações, será possível realizar os downloads, automaticamente, pelo robô 👍.
