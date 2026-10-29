# 08. Privacidade, Cofre do Sistema, Bunny Sync e IA

O Pulsares Research foi desenhado sob o princípio de **privacidade por padrão e soberania de dados acadêmicos**.

## Garantias de Privacidade Local-First

- **Zero Telemetria de Conteúdo**: O aplicativo nunca registra conteúdo de livros, notas pessoais, manuscritos ou chaves de API em logs ou serviços externos.
- **Banco SQLite Transparente**: Seus metadados, anotações, fichamentos e projetos ficam em um único banco SQLite local com migrações versionadas, facilitando backups pessoais.

## Cofre Seguro do Sistema Operacional

Quando você opta por configurar credenciais externas (como chave de API de IA ou armazenamento em nuvem), o Pulsares utiliza o cofre nativo do sistema operacional:

- **Windows**: Windows Credential Manager;
- **macOS**: Keychain;
- **Linux**: Secret Service / libsecret.

As chaves jamais são salvas em texto puro no banco SQLite ou em arquivos de configuração.

## Sincronização Opcional (Bunny Storage) e IA Ética

- **Réplica Privada em Nuvem**: Caso deseje sincronizar seu acervo entre dois computadores, você pode configurar sua própria zona privada no **Bunny Storage**. Todos os downloads utilizam URLs assinadas e o app continua funcionando integralmente se a rede cair.
- **Assistência de IA Transparente**: Chamadas de IA só ocorrem mediante ação explícita do usuário com provedor configurado, exibindo claramente qual trecho sai do dispositivo e preservando o vínculo obrigatório com a fonte acadêmica.

