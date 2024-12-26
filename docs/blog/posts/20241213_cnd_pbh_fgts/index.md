---
date: 2024-12-13
draft: true
authors: [leidisalves]
comments: true
categories:
  - Power Automate
  - Compras
---

# Certidão de Débitos de BH e Certidão do FGTS

Na instrução de processos de compra, pode ser necessário atualizar certidões do prossível fornecedor: junto à prefeitura de Belo Horizonte (se empresa sediada neste município); e/ou junto ao FGTS (Caixa Econômica Federal). Há dois subfluxos elaborados para atender a essa necessidade, e este post explica alguns detalhes desses subfluxos, que estão na [página do robô elaborado para captar algumas dessas certidões](https://automatiza-mg.github.io/automatizacoes/robos/emiss%C3%A3o_de_certid%C3%B5es_de_fornecedores/#montando-o-seu-robo).  

<!-- more -->

## Certidão da Prefeitura de Belo Horizonte

Esse robô automatiza a consulta no site da Prefeitura de Belo Horizonte (PBH) para verificar a situação cadastral de fornecedores. Ele acessa o site, realiza as interações necessárias para buscar as informações cadastrais e analisa o resultado da consulta. Com base no que é encontrado, o robô identifica se o CPF/CNPJ é inexistente, se há débitos com a Fazenda Pública ou se a Certidão Negativa de Débitos (CND) está válida.

Após essa verificação, o robô registra a situação cadastral de cada fornecedor em uma tabela no Excel, garantindo a organização das informações. Além disso, ele salva as certidões geradas no computador do solicitante, seguindo o caminho e o nome de arquivo definidos pelo fluxo. Com isso, o robô automatiza todo o processo de consulta e armazenamento, otimizando o trabalho.

#### Fluxo
![PBH_MERMAID](https://github.com/user-attachments/assets/6f87b181-f3c4-413b-9d66-634a356b1104)


### **Passo a Passo**
Imagem 1: Site PBH  

![image](https://github.com/user-attachments/assets/9a8f931e-7eee-4c2d-92e5-a1a343b902f9)

Fonte: https://cnd.pbh.gov.br/CNDOnline/

A página inicial do processo é apresentada na **Imagem 1** acima. O detalhamento do fluxo pode ser descrito a seguir:

O fluxo do robô da PBH inicia com a injeção e execução de uma função JavaScript na página para superar limitações na navegação automatizada. Essa função identifica e clica em elementos HTML específicos, permitindo que o fluxo avance sem a necessidade de interações manuais. Após esse clique, o sistema aguarda o carregamento completo da página, verificando a presença do texto "CNPJ:". Quando identificado, o robô insere o CNPJ no campo de busca utilizando o valor armazenado na variável cnpjatual e, em seguida, aciona o botão "Pesquisar" para realizar a consulta cadastral.

Após executar a pesquisa, o robô monitora a abertura de uma nova janela ou atualização da página, confirmando o carregamento do resultado. Com a página carregada, ele foca na nova janela, seleciona todo o texto exibido e copia o conteúdo para a área de transferência. Esse texto é armazenado na variável Situacao, que será utilizada nas próximas etapas para análise e registro das informações. O robô, então, segue para o salvamento automático da certidão, simulando o comando Ctrl+P para abrir a interface de impressão, inserindo o nome do arquivo e o local de destino e confirmando a operação.

Na etapa final, o robô analisa a variável Situacao para determinar a situação cadastral do fornecedor. Caso identifique "CPF/CNPJ INEXISTENTE", ele registra essa informação na coluna J da tabela Excel. Se o texto indicar débitos com a Fazenda Pública, o robô registra a mensagem "Verificar os débitos com a Fazenda Pública Municipal". Por outro lado, se a certidão for válida, o registro será "CND Válida". Após registrar essas informações, o robô limpa a área de transferência, fecha o navegador e finaliza o fluxo, garantindo que os dados sejam organizados e prontos para análise na tabela.

## FGTS

