# Trilha Full Stack — Planilha de Estudos (versão estática)

Versão **estática** do workbook/planilha de estudos full stack, pronta para **GitHub Pages**.

Progresso é salvo no `localStorage` do navegador. Não precisa de servidor, banco ou autenticação.

## Como publicar no GitHub Pages

### 1. Crie o repositório
1. Vá em https://github.com/new
2. Nome sugerido: `trilha-fullstack` (ou o que preferir)
3. Deixe público
4. **Não** marque "Add a README"

### 2. Suba o código
No terminal (na pasta deste projeto):

```bash
git init
git add .
git commit -m "Trilha Full Stack — versão estática para GitHub Pages"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

### 3. Build e publique a pasta `dist`

**Opção A — GitHub Actions (recomendado)**

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Depois:
1. Settings → Pages → Source: **GitHub Actions**
2. Faça push; o site sobe automaticamente.

**Opção B — Manual (branch gh-pages)**

```bash
npm run build
npx gh-pages -d dist
```

(Settings → Pages → Source: Deploy from branch `gh-pages` / root)

### 4. Acesse
`https://SEU_USUARIO.github.io/SEU_REPO/`

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Conteúdo
- Capa, Roadmap, Passo a passo, Vídeos, Livros, Projetos, Como usar
- Marque progresso (Não iniciado → Em andamento → Concluído)
- Baixe a planilha Excel
- Progresso fica no navegador

