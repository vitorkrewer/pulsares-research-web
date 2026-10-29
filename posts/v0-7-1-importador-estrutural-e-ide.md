# Pulsares v0.7.1: Importador Estrutural (.docx, .odt, .doc), Vinculador de Bookmarks e Fluidez na IDE

Pesquisadores raramente começam todos os seus trabalhos do zero. Muitas vezes, um artigo científico ou capítulo de dissertação já possui dezenas de páginas redigidas no Microsoft Word (`.docx` ou `.doc`) ou no LibreOffice Writer (`.odt`). Na versão **v0.7.1**, criamos uma ponte completa entre esses documentos e a **IDE de Projetos Acadêmicos ABNT** do Pulsares Research.

![Importador Estrutural de Documentos](assets/screenshots/importador-estrutural.svg)

## O Desafio: De Parágrafos Soltos a uma Árvore Científica ABNT

Importar um documento acadêmico não pode ser apenas copiar e colar um bloco monolítico de texto. Um trabalho científico possui:

- **Elementos Pré-Textuais**: Título, subtítulo, Resumo, Palavras-chave, Abstract e Keywords;
- **Hierarquia de Capítulos e Subcapítulos**: Seções primárias (`1 INTRODUÇÃO`), secundárias (`2.1 Fundamentação`) e terciárias;
- **Lista de Referências**: Fontes citadas ao final do manuscrito.

Além disso, muitos autores formatam títulos apenas em negrito ou caixa alta, sem aplicar estilos formais `Heading 1` ou `Heading 2` no processador de textos.

## Como o Importador Estrutural Funciona

1. **Seletor Explícito de Tipo de Projeto e Formato**: Você escolhe tanto o template ABNT de destino (Artigo NBR 6022, Monografia/TCC, Dissertação ou Tese NBR 14724) quanto o filtro de arquivo (`Automático`, `.docx`, `.odt` ou `.doc`).
2. **Tela de Processamento com Feedback Visual e Logs Go**: Durante a leitura e extração XML/binária, o modal exibe um spinner animado com o progresso passo a passo, enquanto o backend Go registra logs detalhados (`[ImportDocument]`) com tamanho em bytes e tempo de leitura em milissegundos.
3. **Vinculador Interativo de Bookmarks Não Detectados**: Inspirado nos sistemas de *bookmarks* de editores de PDF e EPUB, o analisador destaca parágrafos curtos que parecem títulos mas não possuíam estilo `Heading`. Com um clique, você os promove a **Capítulo (H1)** ou **Subcapítulo (H2)** e a árvore de seções se reconstrói na hora.
4. **Preenchimento Inteligente do Modelo**: Em vez de sobrescrever as instruções metodológicas do template escolhido, o Pulsares mapeia cada capítulo importado para a seção correspondente do modelo ABNT.

## Fluidez Instantânea na IDE de Projetos

Também otimizamos a transição entre a IDE de escrita e a listagem de projetos (que agora abre em **Modo Tabela** por padrão): ao retornar para a lista de projetos, o estado é sincronizado cirurgicamente em memória sem precisar reprocessar todo o catálogo JSON, eliminando qualquer travamento em projetos extensos.

