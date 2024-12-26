---
date: 2024-12-13
draft: true
authors: [JoaoVitorFonsseca]
comments: true
categories:
  - Power Automate
  - Compras
---

# Certificado de Registro Cadastral (CRC) Estadual e Certidão de Débitos da Receita Federal

Na instrução de processos de compra, uma das regras da nova Lei de licitações é verificar o Certificado de Registro Cadastral do possível fornecedor. Caso esse documento não esteja atualizado, será necessário coletar a Certidão de Débitos da Receita Federal. Há dois subfluxos elaborados para atender a essa necessidade, e este post explica alguns detalhes desses subfluxos, que estão na [página do robô elaborado para captar algumas dessas certidões](https://automatiza-mg.github.io/automatizacoes/robos/emiss%C3%A3o_de_certid%C3%B5es_de_fornecedores/#montando-o-seu-robo).  

<!-- more -->

## Certificado de Registro Cadastral (CRC) Estadual

Este código automatiza consultas de CNPJs de fornecedores no sistema [CAGEF](https://www.cagef.mg.gov.br/fornecedor-web) (Cadastro Geral de Fornecedores), simplificando um processo que anteriormente exigia interações manuais repetitivas. Um dos principais desafios enfrentados durante o desenvolvimento foi lidar com a natureza dinâmica dos IDs dos botões da página, que mudam a cada recarregamento. Para superar essa limitação, o código utiliza a execução de **JavaScript** no Power Automate, permitindo que a automação interaja com os elementos desejados com base em características mais estáveis, como  atributos fixos, ao invés de depender de identificadores voláteis.
Além disso, o código é capaz de identificar e classificar o status do CNPJ consultado como **ativo, não encontrado ou vencido**. Essa funcionalidade amplia sua utilidade ao fornecer uma visão clara sobre a situação dos fornecedores, ajudando na tomada de decisões e no gerenciamento de contratos. 

## Certidão de Débitos da Receita Federal

Este código automatiza consultas simples no site da [Receita Federal](https://solucoes.receita.fazenda.gov.br/servicos/certidaointernet/pj/emitir) para verificar a existência de pendências ou a emissão de certidões negativas de débitos para pessoas jurídicas. Como o site não utiliza verificações de robôs, o script opera de forma fluida e, caso não sejam encontradas pendências, realiza o download da certidão **mais recente**. 
