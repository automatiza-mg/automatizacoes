# Robô de emissão das chaves: 
  - resultado: arquivos em formato PDF com nome e MASP da pessoa beneficiária, salvos na pasta indicada
  - entradas/dependências:

## 1. Premissas
**Robô de conferências concluído** 

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

- [ ] Conferir se a janela do navegador Google Chrome aberta e deslogada, sem nenhuma outra conta do Gmail aberta simultaneamente 
- [ ] Conferir se a extensão Power Automate ativa para o navegador Chrome
- [ ] Conferir se extensão Kryptonita ativa para o navegador Chrome
- [ ] Conferir se o certificado digital/token de acesso ao Conectividade da CEF está instalado na máquina

## 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-chave-conectividade-23-12.txt)
2. Subfluxo [Login CEF](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/login_CEF.txt) 
