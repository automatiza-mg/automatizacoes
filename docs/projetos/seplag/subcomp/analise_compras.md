# Robô de Busca e Análise de Informações de Compras de Medicamentos

A análise de propostas de medicamentos em processos de compras públicas, como nas atas de registro de preços, exige conferências em múltiplas fontes de dados. Tradicionalmente, esse fluxo envolve etapas manuais executadas por analistas da Diretoria Central de Licitações (DCLIC), exigindo tempo e atenção para preenchimento de planilhas e verificação em portais externos.

No cenário atual, cada processo possui cerca de 100 linhas, levando, em média, 30 minutos para análise de cada uma delas. Diante da necessidade de aumentar a eficiência e reduzir erros provocados por inconsistências nos dados (como erros no nome do princípio ativo), esse robô automatiza as consultas necessárias e reduz a atuação manual, promovendo padronização e segurança na análise.

<!-- more -->
## 1. O que o robô faz
- [x] Busca os dados da planilha no SharePoint e identifica os registros a serem analisados.
- [x] Consulta a situação cadastral da empresa por meio do CNPJ.
- [x] Verifica se a empresa é optante pelo Simples Nacional.
- [x] Consulta a planilha CMED, utilizando o número de registro (RMS) para obter o princípio ativo correto e outras informações técnicas.
- [x] Realiza análise da substância (princípio ativo) no portal do Conselho Nacional de Política Fazendária - CONFAZ.
- [x] Utiliza inteligência artificial para confirmação da substância (diferencia as diversas descrições).
- [x] Realiza a consulta da substância (princípio ativo) por meio do Coeficiente de Adequação de Preços - CAP.
- [x] Com base nas informações obtidas, executa lógica para preenchimento automático de campos na planilha.
- [x] Salva todas as informações processadas automaticamente.


## 2. Como funciona? Passo a passo explicado do Automate

### 2.1.  *Main*
   Fluxo principal que orquestra a execução dos subfluxos em ordem lógica.

### 2.2. *baixar_informacoes*
   Realiza o download dos arquivos necessários e configura o ambiente de trabalho do robô.

### 2.3. *dados_planilha*
   Conecta-se à planilha no SharePoint e coleta os dados necessários para iniciar as análises.

### 2.4. *situação_cadastral*
   Consulta a situação cadastral da empresa a partir do CNPJ no site da Anvisa, retornando UF e razão social.

### 2.5. *simples_nacional*
   Verifica, a partir do CNPJ, se a empresa é optante pelo Simples Nacional.

### 2.6. *cmed*
   Consulta a planilha da CMED a partir do número de registro (RMS) e obtém o princípio ativo com ortografia padronizada, além de outras informações úteis (tipo, PMC etc).

### 2.7. *analise_confaz*
   Realiza busca por convênios relacionados à substância nos portais do CONFAZ a partir do nome da substância coletada na tabela cmed.

### 2.8. *cap*
   Pesquisa a substância no documento da CAP, a partir da especificação do item definido na planilha do pregoeiro, para identificar se há PMVG (Preço Máximo de Venda ao Governo). Utiliza IA para confirmar se o princípio ativo está descrito na resolução CAP.

### 2.9. *analisar_informacoes*
   Executa a lógica de preenchimento e análise automática com base nas variáveis obtidas nas etapas anteriores.


## 3. Utilização do robô

Antes de executar o robô, **o(a) usuário(a) deverá adicionar as seguintes variáveis de entrada**:

- :material-application-variable: **`caminho_excel`**: caminho completo da planilha hospedada no SharePoint. A planilha deve estar acessível e sincronizada com o computador local para edição em tempo real.
- :material-application-variable: **`pasta_download`**: caminho local da pasta de downloads do computador para a busca da planilha CMED. O valor deve estar sem aspas (ex: `C:\Projetos\SUBCOMP`).
- :material-application-variable: **`resolucao_cap`**: link direto para o site da resolução CAP.
- :material-application-variable: **`vazio`**: variável sem valor de texto no campo `valor padrão`.
- :Chave de API: Configuração da integração com a IA no fluxo cap. O corpo da solicitação deve definir o comportamento do robô como um "analista de compras", estabelecendo critérios rigorosos de comparação exata (nome e dosagem) entre os itens e a Resolução, garantindo o retorno dos dados em formato JSON padronizado.

Outras observações:

- O usuário deve estar logado na conta Microsoft.
- A pasta local definida em `pasta_download` deve estar disponível e acessível.
- A planilha deve estar acessível via OneDrive/SharePoint e formatada de acordo com os padrões da DCLIC.
- Os campos obrigatórios da planilha, para funcionamento correto do robô, incluem: `Especificação do Item`; `É Judicial?`; `CNPJ`; `RMS`.


## 4. Resultados
 - Processo manual: ~7 minutos por linha.
 - Processo automatizado: ~50 segundos por linha.

 - A automação representa uma economia potencial de **10 horas e 17 minutos** (por processo contendo 100 linhas), além de padronizar as análises, reduzir erros e eliminar a necessidade de acesso manual a portais externos.


## 5. Códigos
- ['Main'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/main.txt)
- ['analisar_informacoes'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/analisar_informacoes.txt)
- ['analise_confaz'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/analise_confaz.txt)
- ['baixar_informacoes'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/baixar_informacoes.txt)
- ['cap'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/cap.txt)
- ['cmed'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/cmed.txt)
- ['dados_planilha'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/dados_planilha.txt)
- ['simples_nacional'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/simples_nacional.txt)
- ['situacao_cadastral'](https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/seplag_subcomp_dclic_compramedicamentos/situacao_cadastral.txt)
