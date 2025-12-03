# Visualizador de Perfil do GitHub

Aplicação simples que busca e exibe informações de perfis do GitHub.

**Funcionalidades**
- Buscar usuário pelo nome de login do GitHub
- Exibir avatar, nome, bio, seguidores e seguindo
- Estado de carregamento e tratamento básico de erros

## Pré-requisitos
- Navegador moderno (Chrome, Edge, Firefox, Safari)
- Node/Python/VS Code (opcional) para servir os arquivos localmente

## Como executar localmente

Opção 1 — Usando o Live Server do VS Code (recomendado):

1. Abra a pasta do projeto no Visual Studio Code.
2. Instale e ative a extensão **Live Server**.
3. Clique em **Go Live** no canto inferior direito.

Opção 2 — Usando Python (se instalado):

Abra o PowerShell na pasta do projeto e rode:

```powershell
python -m http.server 5500

# Abra no navegador:
# http://localhost:5500
```

Opção 3 — Abrir diretamente o arquivo `index.html` (pode funcionar, mas o uso de módulos ES6 recomenda um servidor local):

Abra `index.html` com duplo clique no explorador de arquivos.

## Uso

1. Digite o nome de usuário do GitHub no campo de busca.
2. Clique em **Buscar** ou pressione **Enter**.
3. Aguarde o estado de carregamento e visualize os resultados.

## Estrutura do projeto

- `index.html` — página principal
- `src/css/` — estilos do projeto
- `src/js/index.js` — ponto de entrada (ES module)
- `src/js/api.js` — responsável pelas requisições à API do GitHub
- `src/js/ui.js` — funções de UI (loading, renderização, alert)

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature: `git checkout -b feat/minha-feature`
3. Faça commit das suas mudanças: `git commit -m "feat: descrição"`
4. Abra um Pull Request.

## Publicação (opcional)

Você pode habilitar o GitHub Pages nas configurações do repositório (branch `main` / pasta `/root`) para publicar a aplicação como site estático.

## Licença

Licença MIT — sinta-se livre para usar e modificar.

