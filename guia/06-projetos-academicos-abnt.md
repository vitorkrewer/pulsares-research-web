# 06. Projetos Acadêmicos ABNT e Importador Estrutural

O módulo de **Projetos Acadêmicos** transforma o Pulsares Research em uma IDE completa para escrita de artigos científicos, monografias, dissertações e teses, unindo normas da ABNT, seu acervo de leituras e ferramentas de importação e exportação.

![IDE de Projetos Acadêmicos ABNT](assets/screenshots/projetos-ide.svg)

## Templates Metodológicos ABNT

Ao clicar em **Novo Projeto**, escolha a estrutura normativa adequada ao seu trabalho:

- **Artigo Científico (`ABNT NBR 6022`)**: Resumo/Abstract, Introdução, Fundamentação Teórica, Procedimentos Metodológicos, Resultados e Discussão, Conclusões e Referências.
- **Monografia / TCC (`ABNT NBR 14724`)**, **Dissertação de Mestrado** e **Tese de Doutorado**: Elementos pré-textuais completos (Capa, Folha de Rosto, Resumo, Abstract) e árvore hierárquica de capítulos e subseções.
- **Projeto de Pesquisa (`ABNT NBR 15287`)** e **Relatório Técnico (`ABNT NBR 10719`)**.

Cada seção traz uma **Orientação Metodológica ABNT** contextual explicando o que deve ser abordado naquele capítulo.

## Importador Estrutural de Manuscritos (`.docx`, `.odt`, `.doc`)

Já possui um artigo ou capítulo em andamento no Microsoft Word ou LibreOffice Writer? Use o botão **Importar** ao lado de *Novo Projeto* para trazer seu manuscrito para dentro da IDE:

![Importador Estrutural de Documentos](assets/screenshots/importador-estrutural.svg)

1. **Seleção do Tipo de Projeto e Formato de Arquivo**: Escolha o modelo ABNT de destino e filtre explicitamente o tipo de arquivo enviado (`Automático`, `Word .docx`, `OpenDocument .odt` ou `Word Legado .doc`).
2. **Tela de Processamento em Tempo Real**: Enquanto o documento é analisado, uma tela de status com spinner animado exibe as 4 etapas de leitura binária, descompactação XML, detecção de capítulos/seções e mapeamento pré-textual.
3. **Detecção Automática de Headings e Numeração**: O motor identifica estilos `Heading 1/2/3`, títulos numerados (`1 INTRODUÇÃO`, `2.1 Referencial Teórico`), blocos de **Resumo / Abstract**, **Palavras-chave** e **Referências Bibliográficas**.
4. **Vinculador Interativo de Bookmarks (Títulos Não Detectados)**: Inspirado em editores profissionais de PDF/EPUB, o importador lista parágrafos curtos que não usavam estilo de título no Word e permite vinculá-los manualmente como **Capítulo (H1)** ou **Subcapítulo (H2)** com 1 clique.
5. **Preenchimento Inteligente do Modelo**: Em vez de descartar a estrutura metodológica do template escolhido, o Pulsares preenche os campos de cada capítulo com o conteúdo importado correspondente.

> [!IMPORTANT]
> O processamento de documentos `.docx`, `.odt` e `.doc` ocorre **100% localmente** na sua máquina, com logs de diagnóstico detalhados no backend Go (`[ImportDocument]`) sem envio de arquivos para a internet.

## IDE em 3 Colunas e Modos de Visualização

Na barra superior da IDE, alterne instantaneamente entre três modos de trabalho usando o seletor compacto:

- **Modo Editor**: Foco na escrita fluida por seção, com barra científica completa.
- **Modo Folha A4**: Escrita com margens reais ABNT (`3 cm` superior/esquerda e `2 cm` inferior/direita), fonte serifada `12pt` e espaçamento `1,5`.
- **Modo Prévia ABNT Paginada**: Simulação completa de todas as folhas A4 do trabalho com Capa, Folha de Rosto, Sumário numerado e lista de Referências compilada ao final.

## Estúdio de Figuras ABNT e Painel de Pesquisa

- **Estúdio de Figuras**: Recorte imagens, ajuste brilho/contraste, aplique escala de cinza e insira a figura já padronizada com título numerado na parte superior e fonte obrigatória na parte inferior.
- **Painel Lateral de Pesquisa**: Consulte suas Obras, Destaques, Notas e Fichamentos sem sair do texto. Clique em **Citar no Texto** para inserir a chamada `(AUTOR, Ano, p. X)` no cursor e adicionar a obra automaticamente às Referências do projeto.

