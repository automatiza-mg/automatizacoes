---
comments: true
---

# Robô de envio das chaves por email: 
 
 - **Resultado**: email enviado com o arquivo PDF da chave em anexo
 - **Entradas/dependências**: utiliza a planilha-controle atualizada pelo robô de geração de chaves e a conta do Gmail da SGP

## 1. Premissas
**Etapa com o Robô de conferências concluída** 

**Etapa com o Robô de chaves-conectividade concluída**

## 2. Como funciona? Passo a passo explicado do Automate
Este robô realiza as ações seguintes:  

#### 2.1. **"Main"**
- Utiliza loop para percorrer todas as linhas da planilha-controle e enviar o(s) arquivo(s) da chave para sque do FGTS para o e-mail indicado pela pessoa beneficiária
- Identifica o arquivo correto por nome e MASP, evitando encaminhar documento de eventuais homônimos

## 3. Utilização do robô

- [ ] Conferir se a janela do navegador Google Chrome está aberta e logada na conta do Gmail da SGP, sem nenhuma outra janela do navegador aberta simultaneamente 
- [ ] Conferir se a extensão Power Automate está ativa para o navegador Chrome
- [ ] Conferir posteriormente se o email voltou, pois não há como o robô certificar o recebimento do email simultaneamente com o envio dos emails das próximas linhas da planilha

## 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-chave-gmail.txt)

[Voltar para Página inicial deste projeto](index.md)