# 01. Introdução e Instalação

O **Pulsares Research** é um ambiente desktop pessoal e **local-first** projetado para pesquisadores, pós-graduandos, professores e autores que organizam, leem e estudam ebooks, artigos científicos, dissertações e teses.

Diferente de plataformas baseadas em nuvem que aprisionam suas anotações em servidores proprietários, o Pulsares mantém seu acervo de PDFs/EPUBs na pasta que você escolher e armazena o catálogo, destaques, fichamentos e projetos em um banco **SQLite versionado** diretamente na sua máquina.

> [!IMPORTANT]
> O Pulsares Research funciona **100% offline** sem exigir criação de conta, assinatura ou chave de API. Integrações com provedores de metadados (Crossref, OpenLibrary), sincronização em nuvem (Bunny Storage) e assistentes de IA são estritamente opcionais.

## Fluxo de Trabalho Científico de Ponta a Ponta

1. **Biblioteca & Acervo Local**: Importe artigos e livros mantendo os arquivos originais sob seu controle, com detecção de duplicatas via hash `SHA-256`.
2. **Leitura Ativa & Citações ABNT**: Grife trechos com âncoras resilientes de página e coordenadas, gerando citações diretas/indiretas (`NBR 10520`) e referências completas (`NBR 6023`).
3. **Fichamentos & Grafo de Conhecimento**: Sintetize obras em fichas estruturadas com suporte a fórmulas LaTeX (`KaTeX`) e diagramas `Mermaid`, conectando ideias em um grafo semântico `D3.js`.
4. **IDE de Projetos Acadêmicos & Importador Estrutural**: Redija artigos, TCCs, dissertações e teses em uma IDE de 3 colunas com visualização em **Folha A4 ABNT**, ou importe manuscritos `.docx`, `.odt` e `.doc` existentes com detecção automática de capítulos e vinculação de *bookmarks*.

## Instalação por Sistema Operacional

### Windows (10 / 11 — 64 bits)

1. Acesse a seção de [Downloads na página inicial](index.html#download) ou a página oficial de Releases no GitHub.
2. Baixe o instalador `Pulsares-Research-Setup.exe` ou o executável portátil.
3. Ao iniciar pela primeira vez, selecione a pasta onde sua biblioteca acadêmica reside (ou aceite o diretório padrão em `Documentos/Pulsares`).

### Linux (Ubuntu, Debian, Fedora, Arch)

1. Baixe o pacote `.AppImage` ou `.deb` correspondente à sua distribuição.
2. Certifique-se de que a biblioteca `libwebkit2gtk-4.1-0` (ou `4.0`) esteja instalada no sistema.
3. Conceda permissão de execução (`chmod +x Pulsares-*.AppImage`) e inicie o aplicativo.

### macOS (Apple Silicon & Intel)

1. Baixe o arquivo universal `.dmg`.
2. Arraste o ícone do **Pulsares Research** para a pasta `Applications`.

> [!TIP]
> Você pode alternar entre o **Tema Papel Editorial Claro** e o **Tema Ardósia Escuro** a qualquer momento no menu lateral esquerdo ou em **Configurações**, reduzindo a fadiga visual em sessões noturnas de leitura.

