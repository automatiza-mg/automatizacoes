---
date: 2024-11-27
draft: true
authors: [andrelamor, diegovianasilva, JoaoVitorFonsseca, leidisalves]
comments: true
categories:
  - Power Automate
  - Compras
---

# Certidões de fornecedores em processo de compra

Na instrução de processos de compra, uma necessidade frequente é coletar certidões de vários fornecedores para compor um processo e selecionar as opções mais vantajosas para a Administração. Este post explica como utilizar o [robô elaborado para captar algumas dessas certidões]().  

<!-- more -->


## Certidões coletadas

Este robô visa acessar sites, registrar dados e salvar documentos correspondentes às certidões:

- [Certificado de Registro Cadastral (CRC) de Minas Gerais]();
- [Cadastro Nacional de Pessoa Jurídica (CNPJ)]();
- [Certidão do Fundo (FGTS)]();
- [Certidão da Justiça do Trabalho]();
- [Certidão Negativa de Débitos (CND)]() da Fazenda Nacional
  - da [Fazenda Estadual de Minas Gerais](), se for o caso;
  - da [Fazenda Municipal de Belo Horizonte](), se for o caso

Cada consulta acima corresponde a um subfluxo difernte na [página do robô](). Explicações com mais detalhes, funcionalidades e pontos de atenção de cada um deles podem ser acessadas clicando nos respectivos hiperlinks acima. 

## Premissas

**Regra de negócio**

A princípio, o robô acessa o site do Cadastro Geral de Empresas e Fornecedores do Estado de Minas Gerais (CAGEF/MG), para verificar a situação do CRC da empresa. Se e empresa estiver ativa, o robô irá consultar a empresa constante na próxima linha da planilha-modelo. Se a empresa não estiver ativa no CRC, o robô irá consultar todas as outras certidões mencionadas acima.

Para o caso de empresas sediadas em Minas Gerais e Belo Horizonte, há também a consulta às CNDs dessas respectivas esferas. Se a empresa for sediada em outro logadouro, será necessária a coleta manual dessas CNDs.  

A representação desse fluxo inicialmente proposto para o robô:

??? note "**Clique para ver o fluxo do robô**"

    ```mermaid
    --8<-- "docs/robos/emissão_de_certidões_de_fornecedores/assets/fluxo.md"
    ```

**Planilha `modelo`:**

Para aumentar a escala e eficiência do robô, usamos uma planilha-modelo, com o seguinte cabeçalho:

Essas colunas são necessárias para:

- que o robô realize iterações em loop sobre cada linha (empresa/fornecedor)
- anotar o resultado correspondente à consulta do site de cada certidão
- registrar o resultado final (output) ao final das consultas de cada empresa, na última coluna, em formato `datetime`, para favorecer o controle 
- verificar quais empresas estão sediadas em Minas Gerais e Belo Horizonte, para possibilitar a consulta a essas respectivas CNDs
- cadastrar o endereço no site do SIARE-SEFAZ/MG (CND Estadual), a partir do CEP, quando for o caso

Essa planilha também pode ser baixada [aqui]()  

## Utilização do robô - cuidados e ajustes

- [x] É necessário cadastrar uma variável de entrada `pasta` contendo o caminho da pasta onde serão salvas todas as certidões salvas pelo robô.
- [x] É necessário salvar a planilha-modelo e informar o seu caminho.
- [x] Na planilha-modelo, utilizar números sem pontos ou hífens nas colunas `CNPJ` e `CEP`
- [x] Os sites das certidões foram pré-cadastrados na ação  `Iniciar novo Chrome` de cada subfluxo. É conveniente verificar periodicamente se houve atualizações nos endereços das URLs dessas páginas.
- [x] Antes da execução do robô, nenhum arquivo excel além da planilha modelo deve estar aberto. O robô é que vai abri-la.
- [x] Antes da execução do robô, também é mais seguro fechar os navegadores que estiverem abertos, para identificação e leitura correta das páginas que devem ser acessadas.  

## Resultados

Este robô é um protótipo. Após ajustes pelas áreas de negócio, atualizaremos a seção seguinte:

**Ganho de tempo estimado**

Processo manual x tempo. Passou a ser realizado em x tempo.

**Ganhos de escala**

- Na condução de pregões

- Na instrução de processos de compra