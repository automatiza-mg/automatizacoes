# Automatização da emissão de chaves do FGTS para professores da Lei 100

Este projeto envolveu o processo de emissão e envio de documentos contendo chaves para saque do FGTS para professores elegíveis, da Lei Complementar 100, da Secretaria de Estado de Educação. 

O processo ocorre diariamente, e envolve **Microsoft Excel**, **Site Conectividade - FGTS CEF** e **Gmail**. 

Foram desenvolvidas **três automatizações:**

1. [Conferências prévias à emissão das chaves](https://automatiza-mg.github.io/automatizacoes/projetos/see/fgts/); 
2. [Emissão das chaves no site Conectividade - FGTS CEF](https://automatiza-mg.github.io/automatizacoes/projetos/see/fgts/);
3. [Envio das chaves por email](https://automatiza-mg.github.io/automatizacoes/projetos/see/fgts/).

[Voltar para página dos projetos](../..)

## Robô de conferências prévias à emissão das chaves: 

 - **Resultado**: planilha escrita com colunas dos critérios de elegibilidade e filtros a serem aplicados
 - **Entradas/dependências**: utiliza por base uma cópia da planilha com o formulário de respostas do gmail da SGP, duas planilhas de relações de processos judiciais, relação nominal de guias pagas pela SEE à CEF e relação de nome, MASP, CPF, PIS e email do SISAP (via relatório B.O.)

### 1. Premissas
**Planilhas-base das conferências salvas em pasta do computador onde o robô for rodar:** 

- Formulário respondido do google;

- Processos judiciais - base AGE;

- Processos judiciais (planilha interna atualizada periodicamente); 

- Relatório B.O./SISAP

- Relatório nominal das guias de pagamento

**Procedimentos preparatórios das planilhas**

- Formulário respondido do Google: recortar as linhas desejadas para o período (exemplo: linha 5000 a 6000)

- Atualizar a relação nominal das guias de pagamento (agregar as linhas da planilha da guia paga no último mês e excluir as duplicatas, para constar cada nome/MASP somente uma vez)

### 2. Como funciona? Passo a passo explicado do Automate
Este robô realiza as ações seguintes, por subfluxo:  

#### 2.1. **"Main"**
- Ajustes de formatos de números das colunas MASP, CPF e PIS (exclusões de '/', '.' e '-')
- Retira espaços entre e ao final dos nomes das pessoas 

#### 2.2 **"Subfluxo 'Conferência de Processos'":**
- Sinaliza pessoas que estão constando em alguma das duas planilha de processos judiciais ou que declararam a entrada do processo no formulário 

#### 2.3. **"Subfluxo 'Conferência Sisap'":**
- Sinaliza pessoas com seguintes dados encontrados na planilha extraída do B.O.:
  - Nome
  - MASP
  - CPF
  - PIS
  - E-mail
    
#### 2.4. **"Subfluxo 'Conferência Guias'":**
- Sinaliza pessoas com nome ou MASP não-encontrados na guia de pagamento à CEF

#### 2.5. **"Subfluxo 'Campos Robô'":**
- Escreve cabeçalhos das colunas a serem preenchidas pelos robôs subsequentes, da geração das chaves e do envio das chaves por e-mail:
  - Data Fim
  - Lei 100
  - Resultado Site CEF
  - Datetime site CEF
  - Status após geração da chave
  - Datetime email
- Sinaliza nas colunas DATA FIM e LEI 100 as pessoas cujos dados não foram encontrados na planilha das guias pagas (subfluxo anterior)

### 3. Utilização do robô

- [ ] Conferir se os nomes e caminhos das planilhas estão indicadas corretamente como variáveis de entrada;
- [ ] Conferir se a planilha-cópia do formulário foi recortada para uma versão reduzida, em número de linhas;
- [ ] Conferir se a planilha com a relação nominal das guias de pagamento está atualizada;
- [ ] Conferir se as abas dessas planilhas estão com os nomes (inclusive com a grafia) indicados;
- [ ] Conferir as colunas da planilha final, que deve iniciar na Coluna A e ir até a coluna AK; 
- [ ] É importante assegurar que o Excel esteja fechado antes da execução do robô. 

### 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-main.txt)
2. Subfluxo ['Conferência de Processos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-processos.txt)
3. Subfluxo ['Conferência Sisap'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-sisap.txt)
4. Subfluxo ['Conferência Guias'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-guias.txt)
5. Subfluxo ['Campos Robô'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-campos_robo.txt)  

[Voltar para página dos projetos](../..)

## Robô de emissão das chaves no site Conectividade - FGTS CEF: 
 
 - **Resultado**: arquivos em formato PDF com nome e MASP da pessoa beneficiária, salvos na pasta indicada
 - **Entradas/dependências**: extensões e permissões do site (certificado digital, token, Kryptonita)

### 1. Premissas
**Etapa com o Robô de conferências concluída** 

**Requisitos de acesso ao site da CEF atendidos**

### 2. Como funciona? Passo a passo explicado do Automate
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

### 3. Utilização do robô

- [ ] Conferir se a janela do navegador Google Chrome está aberta e deslogada, sem nenhuma outra conta do Gmail aberta simultaneamente 
- [ ] Conferir se a extensão Power Automate ativa para o navegador Chrome
- [ ] Conferir se extensão Kryptonita ativa para o navegador Chrome
- [ ] Conferir se o certificado digital/token de acesso ao Conectividade da CEF está instalado na máquina

### 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-chave-conectividade-23-12.txt)
2. Subfluxo [Login CEF](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/login_CEF.txt) 

[Voltar para página dos projetos](../..)

## Robô de envio das chaves por email: 
 
 - **Resultado**: email enviado com o arquivo PDF da chave em anexo
 - **Entradas/dependências**: utiliza a planilha-controle atualizada pelo robô de geração de chaves e a conta do Gmail da SGP

### 1. Premissas
**Etapa com o Robô de conferências concluída** 

**Etapa com o Robô de chaves-conectividade concluída**

### 2. Como funciona? Passo a passo explicado do Automate
Este robô realiza as ações seguintes:  

#### 2.1. **"Main"**
- Utiliza loop para percorrer todas as linhas da planilha-controle e enviar o(s) arquivo(s) da chave para sque do FGTS para o e-mail indicado pela pessoa beneficiária
- Identifica o arquivo correto por nome e MASP, evitando encaminhar documento de eventuais homônimos

### 3. Utilização do robô

- [ ] Conferir se a janela do navegador Google Chrome está aberta e logada na conta do Gmail da SGP, sem nenhuma outra janela do navegador aberta simultaneamente 
- [ ] Conferir se a extensão Power Automate está ativa para o navegador Chrome
- [ ] Conferir posteriormente se o email voltou, pois não há como o robô certificar o recebimento do email simultaneamente com o envio dos emails das próximas linhas da planilha

### 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-chave-gmail.txt)

[Voltar para página dos projetos](../..)
