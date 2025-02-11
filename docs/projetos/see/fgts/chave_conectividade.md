---
comments: true
---

# Robô de emissão das chaves no site Conectividade - FGTS CEF: 
 
 - **Resultado**: arquivos em formato PDF com nome e MASP da pessoa beneficiária, salvos na pasta indicada
 - **Entradas/dependências**: extensões e permissões do site (certificado digital, token, Kryptonita)

## 1. Premissas
**Etapa com o Robô de conferências concluída** 

**Requisitos de acesso ao site da CEF atendidos**

## 2. Como funciona? Passo a passo explicado do Automate
Este robô realiza as ações seguintes, por subfluxo:  

#### 2.1. **"Main"**
- Utiliza loop para percorrer todas as linhas da planilha-controle e enviar o PIS para o site conectividade da CEF
- Sinaliza na planilha-controle:
  - se o PIS está inválido
  - se erros 144, 10044, 139 ou 10039
- Salva arquivo PDF com a chave na pasta indicada
  - se pessoa beneficiada tiver dois vínculos, salva 2 arquivos 

#### 2.2 **"Subfluxo 'login CEF**
- Realiza login no site Conectividade, com a senha do certificado digital
- Marca opção de Empresa outorgante para o CNPJ do estado
- Seleciona a opção COmunicar Movimentação do Trabalhador

## 3. Utilização do robô

- [ ] Conferir se a janela do navegador Google Chrome está aberta e deslogada, sem nenhuma outra conta do Gmail aberta simultaneamente 
- [ ] Conferir se a extensão Power Automate ativa para o navegador Chrome
- [ ] Conferir se extensão Kryptonita ativa para o navegador Chrome
- [ ] Conferir se o certificado digital/token de acesso ao Conectividade da CEF está instalado na máquina
- [ ] Conferir se o arquiv salvo pela última vez no Chrome foi na pasta CHAVES; as ações essa variável de entrada (onde o robô está salvando os arquivos em pdf) estão destivadas, para poupar tempo;
- [ ] Conferir impressora quando reiniciar o computador ou mudar de usuário

## 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-chave-conectividade-23-12.txt)
2. Subfluxo [Login CEF](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/login_CEF.txt) 

[Voltar para Página inicial deste projeto](index.md)
