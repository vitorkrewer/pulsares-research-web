# 02. Biblioteca e Leitor PDF Multi-Abas

A **Biblioteca** é o coração catalográfico do Pulsares Research. Ela combina a rapidez de um banco SQLite local com visualização editorial em **Grade de Capas** ou **Tabela Acadêmica**.

## Importando Obras para o Acervo

Para adicionar novos artigos, livros ou teses:

1. Clique em **Importar Obra** no topo da Biblioteca.
2. Selecione um ou mais arquivos `.pdf` ou `.epub` do seu computador.
3. O núcleo em Go calcula o hash `SHA-256` do arquivo para evitar duplicidades e extrai metadados iniciais (título, número de páginas e caminho local).

> [!NOTE]
> O Pulsares respeita a organização das suas pastas: ele referencia o arquivo original sem movê-lo ou renomeá-lo sem sua permissão.

## Enriquecimento de Metadados (ISBN, DOI e ISSN)

No painel de detalhes de qualquer obra, você pode buscar metadados oficiais automaticamente:

- Informe o **DOI** (ex.: `10.1038/nature12373`), **ISBN** ou **ISSN**.
- O Pulsares consulta as bases abertas (Crossref e OpenLibrary) e apresenta os dados encontrados como **candidatos revisáveis**.
- Nenhum campo (autor, ano, periódico ou editora) é sobrescrito sem sua confirmação explícita.

## Leitor PDF Nativo Multi-Abas

Ao abrir uma obra, ela é carregada no **Leitor Integrado Multi-Abas**:

- **Sessões Persistentes**: Abra vários artigos simultaneamente em abas superiores. O Pulsares memoriza exatamente a página, o nível de zoom e a aba ativa entre sessões.
- **Modo Integrado vs. Modo Foco**: Utilize o painel lateral direito para consultar notas, destaques e referências ABNT enquanto lê, ou recolha as barras laterais para leitura imersiva em tela cheia.
- **Busca Textual e Miniaturas**: Localize termos exatos ao longo do PDF e navegue rapidamente pelo sumário ou grade de páginas.

