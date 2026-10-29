# 03. Anotações Resilientes e Citações ABNT

No Pulsares Research, cada trecho destacado ou anotado durante a leitura permanece **permanentemente vinculado à fonte original**.

## Âncoras Resilientes de Leitura

Quando você seleciona um trecho no leitor de PDF ou EPUB, o Pulsares registra uma âncora composta por:

- Identificador único da obra e hash da versão do arquivo;
- Número exato da página (para PDFs) ou localização `CFI` e capítulo (para EPUBs);
- Trecho selecionado e contexto textual anterior/posterior para recuperação segura.

Ao clicar sobre qualquer nota, citação ou cartão de fichamento em qualquer módulo do aplicativo, o Pulsares abre a obra correspondente exatamente na página e posição do destaque.

## Menu de Seleção no Leitor

Ao selecionar um parágrafo no PDF, quatro ações imediatas são oferecidas:

1. **Destacar**: Aplica grifo semântico (Amarelo Editorial, Terracota, Verde Esmeralda ou Azul Cobalto).
2. **Criar Nota de Leitura**: Abre o editor lateral já vinculado ao trecho e página selecionados.
3. **Gerar Citação ABNT**: Prepara a citação direta ou indireta com chamada `(SOBRENOME, Ano, p. X)`.
4. **Rascunho Assistido (Opcional)**: Quando um provedor de IA está configurado, auxilia na síntese preservando o trecho original e marcando o texto como *rascunho revisável*.

## Motor Determinístico ABNT (NBR 6023 e NBR 10520)

O pacote `@pulsares/citations` formata referências e chamadas de citação seguindo rigorosamente as normas brasileiras:

- **Citação Direta Curta (até 3 linhas)**: Entre aspas duplas, com indicação obrigatória de autor, ano e página.
- **Citação Direta Longa (mais de 3 linhas)**: Bloco recuado em `4 cm`, fonte menor, espaçamento simples e sem aspas.
- **Citação Indireta (Paráfrase)**: Chamada `(SOBRENOME, Ano)` vinculada à obra de origem.

> [!TIP]
> Todas as citações salvas ficam disponíveis no **Painel Lateral de Pesquisa** dentro da IDE de Projetos Acadêmicos para inserção em 1 clique no seu artigo ou dissertação.

