---
comments: true
---

# Robô de conferências prévias à emissão das chaves: 


 - **Resultado**: planilha escrita com colunas dos critérios de elegibilidade e filtros a serem aplicados para geração de chaves do FGTS
 - **Entradas/dependências**: utiliza por base uma cópia da planilha com o formulário de respostas do gmail da SGP, duas planilhas de relações de processos judiciais, relação nominal de guias pagas pela SEE à CEF e relação de nome, MASP, CPF, PIS e email do SISAP (via relatório B.O.)

## 1. Premissas
**Planilhas-base das conferências salvas em pasta do computador onde o robô for rodar:** 

- Formulário respondido do google (auto-declaratório pelos servidores), contendo:
  -  Nome (C),
  -  Masp (E),
  -  CPF (F),
  -  PIS (G),
  -  e-mail (B),
  -  se há processo (X);

- Processos judiciais - base AGE;

- Processos judiciais (planilha interna atualizada periodicamente); 

- Relatório B.O./SISAP

- Relatório nominal das guias de pagamento

**Procedimentos preparatórios das planilhas**

- Formulário respondido do Google: recortar as linhas desejadas para o período (exemplo: linha 5000 a 6000)

- Atualizar a relação nominal dos processos judiciais

- Atualizar a relação nominal das guias de pagamento (agregar as linhas da planilha da guia paga no último mês e excluir as duplicatas, para constar cada nome/MASP somente uma vez)

## 2. Como funciona? Passo a passo explicado do Automate
Este robô realiza as ações seguintes, por subfluxo:  

#### 2.1. **"Ajustes planilha"**
- Delimita espaço exato da tabela recortada do Formulário Goole, para escrever fórmulas nas colunas a partir de AA
- Ajusta formatos de números das colunas MASP, CPF e PIS (exclusões de '/', '.' e '-')
- Escreve cabeçalho das colunas a partir de AA
- Retira espaços entre e ao final dos nomes das pessoas na coluna AA
- Retira acentos e carateres especiais ('ê', 'ç', 'ã', etc...) dos nomes das pessoas na coluna AA (usando nova aba provisória)

#### 2.2 **"Subfluxo 'Conferência de Processos'":**
- Sinaliza pessoas que estão constando em alguma das duas planilhas de processos judiciais ou que declararam a entrada do processo no formulário
- Escreve fórmula na coluna AB, com valores 'Encontrado' ou 'Não encontrado'

#### 2.3. **"Subfluxo 'Conferência Sisap'":**
- Sinaliza pessoas com seguintes dados encontrados na planilha extraída do B.O. [^1], com valores 'Encontrado' ou 'Não encontrado':
  - Nome: coluna AC
  - MASP: coluna AD
  - PIS: coluna AE
  - E-mail: coluna AF
  - CPF: coluna AG
      
#### 2.4. **"Subfluxo 'Conferência Guias'":**
- Sinaliza pessoas com nome ou MASP não-encontrados na guia de pagamento à CEF:
  - MASP: coluna AH, retorna o próprio MASP, quando encontrado, ou o valor 'Não encontrado'
  - Nome: coluna AI, retorna o próprio nome, quando encontrado, ou o valor 'Não encontrado'

#### 2.5. **"Subfluxo 'Campos Robô'":**
- Escreve cabeçalhos das colunas a serem preenchidas pelos robôs subsequentes, da geração das chaves e do envio das chaves por e-mail:
  - Data Fim: coluna AJ
  - Lei 100: : coluna AK
  - Resultado Site CEF: coluna AL
  - Datetime site CEF: coluna AM
  - Status após geração da chave: coluna AN
  - Datetime email: coluna AO
- Sinaliza nas colunas DATA FIM e LEI 100 as pessoas cujos dados não foram encontrados na planilha das guias pagas (subfluxo anterior)
- Valores elegíveis para a geração das chaves:
  - Data Fim = 31/12/2015
  - Lei 100 = SIM
  - exceções: 'processo'; 'conferir'
- **OBS.:** o valor 'conferir', a partir da coluna AK, pode indicar:
  - nome digitado incorretamente pelo servidor no formulário Goolge
  - nome abreviado no B.O.
  - nome abreviado nas guias de pagamento
  - nome alterado por nova situação civil  

![image](https://github.com/user-attachments/assets/258a68ef-3ef2-45d9-8f7f-b6860927b5cd)


## 3. Utilização do robô

- [ ] Conferir se todos os arquivos citados em **1** estão salvos e atualizados na mesma pasta, **sem alterar o nome com que já estavam**
- [ ] Conferir se os nomes e caminhos dos arquivos dessas planilhas estão indicadas corretamente como variáveis de entrada;
- [ ] Conferir se a planilha-cópia do formulário foi recortada para uma versão reduzida, em número de linhas;
- [ ] Conferir se a planilha com a relação nominal dos processos está atualizada;
- [ ] Conferir se a planilha com a relação nominal das guias de pagamento está atualizada;
- [ ] É importante assegurar que o Excel esteja fechado antes da execução do robô.
- [ ] Conferir se as abas dessas planilhas estão com os nomes (inclusive com a grafia) indicados;
- [ ] Ao final da execução deste robô, conferir as colunas da planilha final, que deve iniciar na Coluna A e ir até a coluna AO; 
 
## 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-main.txt)
2. Subfluxo ['Conferência de Processos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-processos.txt)
3. Subfluxo ['Conferência Sisap'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-sisap.txt)
4. Subfluxo ['Conferência Guias'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-guias.txt)
5. Subfluxo ['Campos Robô'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-campos_robo.txt)  

[Voltar para Página inicial deste projeto](index.md)

[^1]: planilha de agosto de 2024
