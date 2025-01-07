# Publicação de pareceres de equivalência de estudos - Secretaria de Estado de Educação
 
Na mentoria de "publicação de pareceres de equivalência de estudos" na Secretaria de Estado de Educação (SEE), a automatização de processos consiste em tornar público, após análise e pronunciamento da Secretaria de Estado de Educação, a equivalência de estudos realizados no exterior a nível de conclusão do ensino médio.
<!-- more -->
 
Este post tem como objetivo explicar o funcionamento do robô e os parâmetros que ele deve seguir para que a execução seja feita corretamente.
 
 
## 1. Premissas
**Word configurado conforme orientação do IOFMG**
 
- Formato “rich text.rtf”; 
- Fonte “Times New Roman” com tamanho 6; 
- Margens formatadas para publicação nos seguintes moldes: Superior 1,5cm; Inferior 1,5cm; Esquerda 7,5cm e; Direita 7,5cm.
 
**Planilha de Excel com os processos:**
 
<!-- more -->
- Iniciar o Excel com a planilha que contém o número dos processos SEI de cada situação de Equivalência de Estudo
 
 
## 2. Como funciona? Passo a passo explicado do Automate
 
#### 2.1. **"Main"**
 
Este fluxo, ramo principal do robô, contempla as ações principais:  
 
- Iniciar o Word no documento esepcífico; 
- Iniciar o Excel no documento esepcífico; 
- Ler a planilha do Excel 
- Executar o subfluxo ‘login_sei’; 
- Executar o subfluxo ‘troca_unidade’;
- Executar o subfluxo ‘registro_sei_word’;
- Executar o subfluxo ‘cria_processo_sei’;
- Executar o subfluxo ‘autorizacao’; 

 
#### 2.2 **"Subfluxo 'login_sei'":**
 
Esse subfluxo é executado para abrir o google chrome na página do SEI e realizar o login. É necessário criar as variáveis 'login_sei', 'orgao_sei' e 'senha_sei'.
 
 
#### 2.3. **"Subfluxo 'troca_unidade'":**
Esse subfluxo é executado para abrir trocar a unidade do SEI para a correta. É necessário criar a variável 'unidade_protocolo'.


#### 2.4. **"Subfluxo 'registro_sei_word'":**
Esse subfluxo é executado para:
- Navegar até a página do processo iterado;
- Selecionar o documento 'Parecer';
- Ler a página da Web;
- Realizar os tratamentos no texto lido e registrar as variáveis;
- Registrar o resumo do parecer no Word.
 
As ações ocorrem em loop.


#### 2.5. **"Subfluxo 'cria_processo_sei'":**
Esse subfluxo é executado para criar um novo processo SEI onde será adiconada a autorização com os resumos dos pareceres. É necessário criar as variáveis 'especificacao', 'hipotese_restricao_autorizacao' e 'tipo_do_processo_criar'.


#### 2.6. **"Subfluxo 'autorizacao'":**
Esse subfluxo é executado para criar um novo documento chamado 'Autorização' no processo SEI e preenchê-lo com as informações do Word. 
 
## 3. Utilização do robô
 
- [ ] Conferir se a planilha está com o nome e caminho correto;
- [ ] Conferir se o arquivo Word está com o nome e caminho correto;
- [ ] Conferir se o arquivo Word está com a formatação correta;
- [ ] Criar as variáveis login_sei, orgao_sei, senha_sei e unidade_sei;
- [ ] É importante assegurar que o Excel e o Word estejam fechados antes da execução do robô.
 
 
## 4. Resultados
 
Ao final, o robô terá lido todos os processos constantes na planilha e gravado o resumo de cada parecer no arquivo Word.
 
 
## 5. Códigos
 
1. [Main](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-mentoria-main.txt)
2. Subfluxo ['login_sei'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-mentoria-loginsei.txt)
3. Subfluxo ['troca_unidade'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-mentoria-trocaunidade.txt)
4. Subfluxo ['registro SEI Word'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-mentoria-seiword.txt)
5. Subfluxo ['cria processo'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-mentoria-criaprocessosei.txt)
6. Subfluxo ['autorizacao'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/see/see-mentoria-autorizacao.txt)
