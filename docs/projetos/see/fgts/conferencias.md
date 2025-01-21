# Robô de Conferências prévias à emissão das chaves: 
  - resultado: planilha escrita com colunas dos critérios de elegibilidade e filtros a serem aplicados
  - entradas/dependências: utiliza por base uma cópia da planilha com o formulário de respostas do gmail da SGP, duas planilhas de relações de processos judiciais, relação nominal de guias pagas pela SEE à CEF e relação de nome, MASP, CPF, PIS e email do SISAP (via relatório B.O.)

## 1. Premissas
**Planilhas-base das conferências salvas em pasta do computador onde o robô for rodar:** 
- Formulário respondido do google;
- Processos judiciais - base AGE;
- Processos judiciais (planilha interna atualizada periodicamente); 
- Relatório B.O./SISAP
- Relatório nominal das guias de pagamento

**Procedimentos preparatórios das planilhas**
- Formulário respondido do Google: recortar as linhas desejadas para o período (exemplo: linha 5000 a 6000)
- Atualizar a relação nominal das guias de pagamento (agregar as linhas da planilha da guia paga no último mês e excluir as duplicatas, para constar cada nome/MASP somente uma vez)

## 2. Como funciona? Passo a passo explicado do Automate
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

## 3. Utilização do robô

- [ ] Conferir se os nomes e caminhos das planilhas estão indicadas corretamente como variáveis de entrada;
- [ ] Conferir se a planilha-cópia do formulário foi recortada para uma versão reduzida, em número de linhas;
- [ ] Conferir se a planilha com a relação nominal das guias de pagamento está atualizada;
- [ ] Conferir se as abas dessas planilhas estão com os nomes (inclusive com a grafia) indicados;
- [ ] Conferir as colunas da planilha final, que deve iniciar na Coluna A e ir até a coluna AK; 
- [ ] É importante assegurar que o Excel esteja fechado antes da execução do robô. 

## 4. Códigos

1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-main.txt)
2. Subfluxo ['Conferência de Processos'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-processos.txt)
3. Subfluxo ['Conferência Sisap'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-sisap.txt)
4. Subfluxo ['Conferência Guias'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-guias.txt)
5. Subfluxo ['Campos Robô'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-conferencia-campos_robo.txt)  
