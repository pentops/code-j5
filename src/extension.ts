import { workspace, ExtensionContext } from 'vscode';
import { Executable, LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(_context: ExtensionContext) {
  const serverCommand: Executable = { command: 'bcl', args: ['lsp'] };

  const serverOptions: ServerOptions = {
    run: serverCommand,
    debug: serverCommand,
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'bcl' }],
    synchronize: { fileEvents: workspace.createFileSystemWatcher('**/*.{bcl,j5s}') },
  };

  // Create the language client and start the client.
  client = new LanguageClient('bcl', 'BCL Language Server', serverOptions, clientOptions);

  // Start the client. This will also launch the server
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }

  return client.stop();
}
