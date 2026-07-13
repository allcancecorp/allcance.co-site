# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server (Vite, hot reload)
npm run build     # tsc && vite build → dist/
npm run preview   # Preview the production build locally
node scripts/fetch-hero-images.mjs  # Re-baixa as 5 imagens do hero do Unsplash CDN
```

No lint script or test suite configured.

## Deploy

Build output goes to `dist/`. Deploy by copying to the VPS:

```bash
# From project root, after npm run build:
scp -r dist/* root@187.77.242.217:/var/www/allcance-site/
```

The site is served by an Nginx container at `/var/www/allcance-site/`. Infrastructure details are in `VPS/CLAUDE.md`.

---

## Architecture

SPA React + TypeScript (Vite) para o site institucional da Allcance em https://allcance.co.

### Routing (`src/app/routes.tsx`)

Todas as rotas são wrapped por `renderWithNav()`, que injeta `<Navbar>` e `<Footer>`. O flag `isLanding` passado ao `Navbar` controla o comportamento:
- `isLanding: true` → links de nav usam `react-scroll` (scroll suave para seções da landing)
- `isLanding: false` → links usam `react-router-dom` (navegam para `/`)

Rotas de blog (`/blog`, `/single`, `/Nr1`, `/Disc`, `/Cultura`) foram removidas e redirecionam para `/` via `<Navigate replace to="/" />`.

### Landing page (`src/pages/index.tsx`)

Renderiza seções em sequência. **Ordem atual (pós-reestruturação AIDA):**

1. `HomeSection` — hero com H1 rotativo + carrossel de imagens
2. `TransformBlock` — headline rotativa segmentada por decisor ("Transforme...")
3. `InterestNumbers` — o problema em números (3 cards de dados)
4. `DesireSolution` — "Saúde mental como sistema, não como evento"
5. `DesireAllcare` — "Ecossistema Allcare" (fundo navy)
6. `DesireNr1` — "NR-1: de passivo a ativo"
7. `DesireDiferenciais` — 4 cards de diferenciais com ícones FontAwesome
8. `DesireTabs` — abas por decisor: Sou RH / Sou do financeiro / Sou sócio
9. `Services` — grade de serviços **(pendente reestruturação — Fase 6)**
10. `Portfolio` — cases/portfólio
11. `Clients` — logos de clientes
12. `Skills` — competências
13. `Team` — equipe **(pendente ajuste de bios — Fase 8)**
14. `Milestones` — entregas/marcos **(pendente reformulação de números — Fase 8)**
15. `About` — sobre a empresa
16. `Pricing` — planos **(pendente remoção e substituição por "Como Começamos" — Fase 7)**
17. `Contact` — formulário de contato **(pendente ajuste de microcopy — Fase 9)**

Tem loader animado de 500ms com fade-out.

### Seções novas (branch `feat/copy-aida`)

| Arquivo | Descrição |
|---------|-----------|
| `src/pages/sections/TransformBlock.tsx` | Headline rotativa por decisor (RH / Jurídico / Financeiro) |
| `src/pages/sections/InterestNumbers.tsx` | 3 cards de dados com fonte visível |
| `src/pages/sections/DesireSystem.tsx` | Exporta `DesireSolution`, `DesireAllcare`, `DesireNr1` |
| `src/pages/sections/DesireDiffs.tsx` | Exporta `DesireDiferenciais`, `DesireTabs` |

### Hero (`src/pages/sections/Home.tsx`)

- H1 rotativo com fade (7s, pausa no hover, reduced-motion)
- **Carrossel automático de imagens** com slide lateral (5s, efeito `translateX`)
  - 5 imagens em `src/assets/images/home/hero-01.jpg` a `hero-05.jpg`
  - Substituir os arquivos quando houver fotos definitivas (manter nomes ou atualizar os imports)
  - `.hero-slides-clip` isola o `overflow: hidden` para não cortar botão nem bolinhas
- Subheadline fixa, CTA WhatsApp (`https://wa.me/5571992905843?text=Quero%20diagnosticar%20minha%20empresa`), barra de confiança
- TODO comentado no arquivo: trocar por imagem corporativa quando disponível

### Mecânica de rotação compartilhada

`TransformBlock.tsx` e `Home.tsx` usam o mesmo padrão: `useState` + `useCallback(scheduleNext)` + dois refs (`outerTimerRef`, `innerTimerRef`) para cleanup correto de ambos os timeouts do fade. Não usar `setInterval` — o padrão de `setTimeout` encadeado é intencional para evitar drift e garantir cleanup no unmount.

### Conteúdo e copy (`src/data/`)

Conteúdo editável fica em JSONs. As novas seções AIDA têm copy **hardcoded nos componentes** (não em JSON), pois são textos longos únicos validados pelo cliente. `markdownToHTML()` em `src/utils/converter.ts` converte markdown simples para HTML.

### Guardrails de copy (validados por Weber Jatahy, CEO)

Aplicar em TODO texto novo, meta tag, alt e microcopy:
- **Allcare nunca é software/SaaS/plataforma vendável.** Usar: "ecossistema proprietário", "ferramenta de suporte técnico à consultoria". Proibido: "plataforma", "assine", "software", "app", "acesso ao sistema".
- **Zero gatilho de medo regulatório.** Proibido citar multas, prazo 26/05/2026, "fiscalização punitiva". NR-1 = ativo e consequência do trabalho bem feito.
- **Sem preço público.** Nenhum valor ou tabela de pricing.
- **Sem travessões** (nem — nem –) em texto visível. Usar vírgulas ou dois-pontos.
- **Sem emojis.**
- **Português brasileiro com acentuação correta.**

### Styling

Bootstrap 5 + CSS customizado em `src/assets/css/`. Estilos das novas seções AIDA estão em `style.css` nas seções correspondentes. Fontes: Karla e Roboto via `@fontsource`. Paleta: `#1F4E79` (navy), `#2E75B6` (azul), `#dc6041` (laranja/CTA), `#264549` (texto escuro).

### Navbar (`src/components/Navbar.tsx`)

Logo links para `/` via RouterLink. Links de nav do `navbar.json` renderizam como ScrollLinks na landing e RouterLinks nas outras páginas. "Artigos" e `internalLinks` (blog) foram removidos.

---

## Plano de implementação

Documento completo: `202607131800-Plano-Implementacao-Site-Allcance-Copy-AIDA.md`

### Status das fases (branch `feat/copy-aida`)

| Fase | Status | Descrição |
|------|--------|-----------|
| 1 | ✅ Concluída | Remoção do blog e rotas |
| 2 | ✅ Concluída | Hero com H1 rotativo + carrossel de imagens |
| 3 | ✅ Concluída | Bloco "Transforme..." rotativo por decisor |
| 4 | ✅ Concluída | Seção Interesse: números |
| 5 | ✅ Concluída | Seções Desejo A–E |
| 6 | ⏳ Pendente | Serviços reestruturados (2 níveis) |
| 7 | ⏳ Pendente | "Como começamos" (substitui pricing) |
| 8 | ⏳ Pendente | Equipe e Prova |
| 9 | ⏳ Pendente | CTA final e microcopy do formulário |
| 10 | ⏳ Pendente | SEO, metadados e verificação final |

### Próxima sessão — retomar em:

**Fase 6 — Serviços reestruturados.** O ponto de entrada visual na página é a seção `TransformBlock` ("Transforme obrigação regulatória..."). As fases 6–10 estão descritas no documento do plano.
