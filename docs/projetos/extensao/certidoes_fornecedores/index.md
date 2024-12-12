# Certidões de fornecedores em processo de compra

Na instrução de processos de compra, uma necessidade frequente é coletar certidões de vários fornecedores para compor um processo e selecionar as opções mais vantajosas para a Administração. Este post explica como utilizar o [robô elaborado para captar algumas dessas certidões]().  


## Certidões coletadas

Este robô visa acessar sites, registrar dados e salvar documentos correspondentes às certidões:

- [Certificado de Registro Cadastral (CRC) de Minas Gerais]();
- [Cadastro Nacional de Pessoa Jurídica (CNPJ)]();
- [Certidão do Fundo de Garantia por Tempo de Serviço (FGTS)]();
- [Certidão da Justiça do Trabalho]();
- [Certidão Negativa de Débitos (CND)]() da Fazenda Nacional
  - da [Fazenda Estadual de Minas Gerais](), se for o caso;
  - da [Fazenda Municipal de Belo Horizonte](), se for o caso

Cada consulta acima corresponde a um subfluxo diferente na [página do robô](). Explicações com mais detalhes, funcionalidades e pontos de atenção de cada um deles podem ser acessadas clicando nos respectivos hiperlinks acima. 

## Premissas

**Regra de negócio**

A princípio, o robô acessa o site do Cadastro Geral de Empresas e Fornecedores do Estado de Minas Gerais (CAGEF/MG), para verificar a situação do CRC da empresa. Se e empresa estiver ativa, o robô irá consultar a empresa constante na próxima linha da planilha-modelo. Se a empresa não estiver ativa no CRC, o robô irá consultar todas as outras certidões mencionadas acima.

Para o caso de empresas sediadas em Minas Gerais e Belo Horizonte, há também a consulta às CNDs dessas respectivas esferas. Se a empresa for sediada em outro logadouro, será necessária a coleta manual dessas CNDs.  

A representação desse fluxo inicialmente proposto para o robô:

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/emissão_de_certidões_de_fornecedores/assets/fluxo.md"
    ```

**Planilha modelo:**

Para aumentar a escala e eficiência do robô, usamos uma planilha-modelo, com o seguinte cabeçalho:

![image](https://github.com/user-attachments/assets/f19adf12-6eac-441e-94bf-23ee54cd234b)

Essas colunas são necessárias para:

- que o robô realize iterações em loop sobre cada linha (empresa/fornecedor)
- anotar o resultado correspondente à consulta do site de cada certidão
- registrar o resultado final (output) ao final das consultas de cada empresa, na última coluna, em formato `datetime`, para favorecer o controle 
- verificar quais empresas estão sediadas em Minas Gerais e Belo Horizonte, para possibilitar a consulta a essas respectivas CNDs
- cadastrar o endereço no site do SIARE-SEFAZ/MG (CND Estadual), a partir do CEP, quando for o caso

Essa planilha também pode ser baixada [aqui]()  

## Utilização do robô - cuidados e ajustes

- [x] Não utilizar caracteres especiais nos nomes das pastas e arquivos. Por exemplo, `usuario/trabalho/projeto-extensao/pregao` em vez de `usuário/trabalho/projeto-extensão/pregão`
- [x] No navegador Chrome, é necessário ir em configurações `chrome://settings/downloads` do navegador e marcar a opção _"Perguntar onde salvar cada arquivo antes de fazer download"_

![image](https://github.com/user-attachments/assets/35347b5a-c535-4bf9-89bc-6a3c66b719c1)


- [x] Em alguns sites, como o da Justiça do Trabalho, é necessário "Aceitar Cookies" para emissão das certidões pelo robô. Se isso não tiver sido feito antes, numa consulta manual, é provável que o robô seja interrompido.
- [x] É necessário cadastrar uma variável de entrada `pasta` contendo o caminho da pasta onde serão salvas todas as certidões salvas pelo robô.
- [x] É necessário salvar a planilha-modelo e informar o seu caminho em uma variável de entrada `planilha`.
- [x] Os sites das certidões foram pré-cadastrados na ação  `Iniciar novo Chrome` de cada subfluxo. É conveniente verificar periodicamente se houve atualizações nos endereços das URLs dessas páginas.
      
![image](https://github.com/user-attachments/assets/d50fc64c-cac9-431c-a0a7-00e1e6ffbc0b)

- [x] Na planilha-modelo, utilizar números sem pontos e sem hífens nas colunas `CNPJ` e `CEP`
- [x] Antes da execução do robô, nenhum arquivo excel além da planilha modelo deve estar aberto. O robô é que vai abri-la.
- [x] Antes da execução do robô, é mais seguro também fechar os navegadores que estiverem abertos, para identificação e leitura correta das páginas que devem ser acessadas.  

## Resultados

Este robô é um protótipo. Após ajustes pelas áreas de negócio, atualizaremos a seção seguinte:

**Ganho de tempo estimado**

Processo manual x tempo. Passou a ser realizado em x tempo.

**Ganhos de escala**

- Na condução de pregões

- Na instrução de processos de compra
