# Robô de emissão das chaves: 
  - resultado: email enviado com o arquivo PDF da chave em anexo
  - entradas/dependências: utiliza a planilha-controle atualizada pelo robô de geração de chaves e a conta do Gmail da SGP

## 1. Premissas
**Robô de conferências concluído** 

**Robô de chaves-conectividade concluído**

## 2. Como funciona? Passo a passo explicado do Automate
Este robô realiza as ações seguintes:  

#### 2.1. **"Main"**
- Utiliza loop para percorrer todas as linhas da planilha-controle e enviar o email com o(s) arquivo(s) da chave PIS para o e-mnail indicado pela pessoa beneficiária
- Identifica o arquivo correto por nome e MASP, evitando encaminhar documento de eventuais homônimos

## 3. Utilização do robô

- [ ] Conferir se a janela do navegador Google Chrome aberta e logada na conta do Gmail da SGP, sem nenhuma outra janela do navegador aberta simultaneamente 
- [ ] Conferir se a extensão Power Automate ativa para o navegador Chrome
- [ ] Conferir posteriormente se o email voltou, pois não há como certificar se isso acontece, simultaneamente com o envio dos emails das próximas linhas da planilha

## 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-chave-gmail.txt)
