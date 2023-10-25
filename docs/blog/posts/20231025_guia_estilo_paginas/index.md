---
date: 2023-10-25
authors: [gabrielbdornas]
comments: true
categories:
  - ferramentas
  - instâncias e variáveis
---

# Guia de estilo de nossas páginas

Neste post definiremos algumas regras simples, mas muito efetivas, para manter o padrão entre as páginas deste site.
Criado com auxílio da ferramenta [MkDocs](https://www.mkdocs.org/) e um de seus temas mais famosos, [Material](https://squidfunk.github.io/mkdocs-material/)[^2], este conteúdo está, quase exclusivamente, em arquivos de texto no formato [Markdown](https://www.markdownguide.org/basic-syntax/) (`.md`).

<!-- more -->

Neste sentido, proponho as seguintes regras durante a elaboração de conteúdo nos arquivos `.md`:

## Blog post

- Escrito em arquivo `index.md` dentro de uma pasta principal que deverá ser criada com a seguinte estrutura:

```yml
- docs  
  - blog
    - posts
      - yyyymmaa_nome_post_reduzido
        - assets
          - .gitkeep
          # apropriado para armazenar imagens e caminho de arquivos
        - index.md
```

- Nome da pasta principal deverá sempre iniciar com data no padrão `yyyymmaa`[^3].
- Imagens e outros materiais utilizados na elaboração de um post deverão ser incluídas dentro da pasta `assets`, criada dentro da pasta principal do post.
- Posts não finalizados deverão ser marcados com a [propriedade `draft: true`](https://squidfunk.github.io/mkdocs-material/setup/setting-up-a-blog/?h=blog#writing-your-first-post:~:text=Create%20a%20new%20file%20called):

> If you mark a post as a draft, a red marker appears next to the post date on index pages. When the site is built, drafts are not included in the output. This behavior can be changed, e.g. for rendering drafts when building deploy previews.


## Cabeçalhos

- Somente primeira letra maiúscula[^1].
- Título da página definido com [heading level 1](https://www.markdownguide.org/basic-syntax/#:~:text=%23-,Heading%20level%201,-%3Ch1%3EHeading%20level) (`#`).
- Demais cabeçalhos da página definidos com [heading level 2](https://www.markdownguide.org/basic-syntax/#:~:text=%23%23-,Heading%20level%202,-%3Ch2%3EHeading%20level) (`#`).
- Não utilizar heading level 3 em diante.

## Listas

- Somente primeira letra maiúscula[^1].
- Finalizados com pontos (`.`) e não com ponto e vírgula (`.`).

## Navbar

- Inclusão de itens na navbar ocorrerá sempre pela propriedade `nav` do arquivo `mkdocs.yml`:

```yml
# Arquivo mkdocs.yml na raiz do repositório

--8<-- "mkdocs.yml:nav"
```

## Nomenclatura de arquivos e pastas

- Arquivos e pastas serão sempre nomeados no padrão [snake small case](https://en.wikipedia.org/wiki/Snake_case).
- Arquivos e pastas deverão ser criados, preferencialmente, dentro da pasta `docs`.

## Parágrafos

- Somente primeira letra maiúscula[^1].
- Para simplificar o processo de revisão dos arquivos `.md`, incluir cada frase em uma linha.
- A separação entre parágrafos deverá ser feita com a utilização de uma linha em branco entre um bloco de frases ou parágrafos.

## Robôs

- Criado em arquivo `index.md` dentro de uma pasta principal que deverá ser criada com a seguinte estrutura:

```yml
- docs  
  - robos
    - nome_robo
      - assets
        - codigo_fonte.txt
        - fluxo.md
        - arquivo_auxiliar_1.xlsx
        - arquivo_auxiliar_2.csv
        - arquivo_auxiliar_3.xls
      - index.md
```

- Arquivo `index.md` deverá seguir padrão do [modelo para criação de robôs](../../robos/modelo/).
- Pasta `assets` deverá conter com, no mínimo `codigo_fonte.txt`.

## Tags

- Tags são categorias padronizadas de nosso [catálogo de robôs](../../robos/)[^4].
- Deverão ser evitadas tags com duas palavras. Tente utilizar apenas uma palavra, sempre que possível, englobando todas as características principais de um grupo de robôs.
- Robôs com mais de uma característica principal poderão receber, no máximo, duas tags.

[^1]: Com exceção de nomes próprios e ou siglas.
[^2]: Use e abuse da documentação do tema [Material](https://squidfunk.github.io/mkdocs-material/) para criar páginas cada vez mais atrativas.
[^3]: Ano com quatro dígitos, mês e dia com do dois. Exemplo `20231025`.
[^4]: O [Issue número 5](https://github.com/lab-mg/automatizacoes/issues/5) do repositório [automatizações](https://github.com/lab-mg/automatizacoes) contém a discussão inicial para a criação deste guia de estilo das tags.


