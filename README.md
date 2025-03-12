# bcl/j5s Visual Studio Code LSP client plugin

VS Code (AKA VSCode) LSP support for the [Block Config Language (BCL)](https://github.com/pentops/bcl.go).

## Requirements

Have the J5 Build CLI installed from https://github.com/pentops/j5build (and in your path?).

Ensure `j5 lsp` works. Press the enter key to exit the LSP.

## Packaging for use

Prereqs:

```bash
npm install -g @vscode/vsce

npm install -g typescript
```

Package:

```bash
vsce package
```

Install:

* [In VS Code](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
* Shell:

```bash
code --install-extension vscode-j5s-0.0.1.vsix
```
