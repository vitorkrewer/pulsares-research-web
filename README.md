# Pulsares Research — site e downloads

Este repositório público reúne o **site**, a **documentação** e os **executáveis** do Pulsares Research, um ambiente desktop pessoal e *local-first* para organizar, ler e estudar ebooks, artigos, teses e dissertações.

O código-fonte do aplicativo é mantido em um repositório privado. Aqui ficam somente o que é público.

## Baixar

Os executáveis estão na página de [Releases](../../releases/latest):

| Sistema | Arquivos |
|---|---|
| Windows (x64) | `Pulsares-Research-Windows-x64.exe` |
| macOS (Universal) | `Pulsares-Research-macOS-universal.zip` |
| Linux (x64) | `Pulsares-Research-Linux-x64.AppImage`, `.deb` e `.tar.gz` |

Cada release inclui o arquivo `SHA256SUMS.txt` para conferir a integridade dos downloads.

> Os executáveis ainda não são assinados digitalmente. O Windows (SmartScreen) e o macOS (Gatekeeper) podem exibir um aviso na primeira execução.

## Conteúdo do repositório

```text
index.html, recursos.html, release.html, help.html, ...   páginas do site
guia/                                                      capítulos do guia do usuário (Markdown)
posts/                                                     publicações do blog (Markdown + posts.json)
assets/                                                    marca e imagens
script.js, styles.css                                      comportamento e estilos
.github/workflows/pages.yml                                publicação no GitHub Pages
```

## Como as publicações funcionam

- **Site:** publicado no GitHub Pages pelo workflow `Publish site`, acionado manualmente em *Actions*.
- **Releases:** geradas e enviadas para este repositório pelo workflow de release do repositório privado. Não crie releases manualmente aqui.
- **Privacidade:** o aplicativo funciona sem conta, rede ou chave de API. O site não coleta dados dos usuários.

