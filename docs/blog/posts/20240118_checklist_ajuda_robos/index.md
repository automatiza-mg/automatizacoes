---
date: 2024-01-18
draft: false
authors: [andrelamor]
comments: true
categories:
  - Ferramentas
  - Power Automate
---

# Causas comuns de erros na montagem dos fluxos dos robôs 

Algumas ações pensadas para montagem de um fluxo no Power Automate podem não funcionar como planejamos inicialmente. Paradas na execução dos fluxo podem acontecer e, eventualmente, desistimos de continuar.

Para compreender como fazer o robô executar as tarefas que desejamos, pode ser útil ter em mãos uma listinha de causas comuns de problemas. Acreditamos que a maior parte dessas causas estará aqui. 

<!-- more -->

## sobre o software
- a versão do Power Automate é Web ou Desktop (funcionalidades diferem)?
- a versão do Power Automate instalada sofreu atualização, ou está defasada?

## sobre as ações do robô: verificar se...
- ...**variáveis** foram inseridas, modificadas, atualizadas, como por exemplo: 
    - logins: SEI ou outros sites podem estar com _autocomplete_ ativado no navegador Chrome
    - senhas: podem ter sido atualizadas no aplicativo, mas não no Power Automate
    - caminhos de arquivos: é comum esquecer de atualizar nas **Variáveis de Entrada** quando se compartilha código dos robôs entre computadores diferentes
    - Dica! Veja uma pouco mais sobre as variáveis [neste post](../20231019_variaveis/index.md)

- ... nos **loops**:
    - o loop está rodando indefinidamente? Veja se foi colocada _aumentar variável_ ao final das ações de loop;
    - faltou colocar _End_ ao final das ações de loop? 

- ... nas ações de **If**:
    - falta Else?
    - ou falta End?
     
## se o robô tiver ações no browser da web:
- A extensão está instalada e ativada?
- As ações estão ocorrendo na aba/janela desejada? Talvez necessite fechar a aba atual e retornar para a aba inicial que ficou salva como variável
- É para capturar texto em vez de imagem?
- Caso seja para capturar a posição na tela com o _mouse_, os 'pixels' são os mesmos (em caso de rodar em monitor diferente)?

-  **enviar teclas**:
    - Os comandos estão nos locais corretos (tabs, return, setas, etc)?
    - As teclas especiais estão com formação correta (ex.: {Control}({A}){Control}({C})?
    
    - PARA TERMINAIS PRODEMGE: Os comandos foram incluídos como chave de hardware?

# Saiba Mais

Explore canais e materiais de referência para aprofundar seus conhecimentos sobre o **Power Automate**:

- [Documentação Oficial](https://docs.microsoft.com/pt-br/power-automate/)
- [Canal do Power Automate no YouTube](https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA)
- [Comunidade Power Automate](https://powerusers.microsoft.com/t5/Power-Automate-Community/ct-p/MPACommunity)
