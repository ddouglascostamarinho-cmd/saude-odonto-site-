# 🦷 Saúde Odonto — Site Clínica Odontológica

## Visão Geral
Landing page profissional e premium para a **Saúde Odonto — Clínica Odontológica**, localizada em Porto Velho, RO. Design minimalista e sofisticado com identidade visual neutra/charcoal, totalmente responsivo (mobile-first).

---

## ✅ Funcionalidades Implementadas

### Estrutura
- [x] **Header fixo** com scroll behavior (transparente → branco fosco com blur)
- [x] **Menu mobile** hamburger animado com slide-down
- [x] **Hero section** com background animado (zoom suave), stats counter
- [x] **Seção Sobre** com imagem, card flutuante e features
- [x] **Seção Equipe** — Dr. Lucas Nogueira + Dra. Gleidiane Nogueira
- [x] **Serviços com tabs** — 3 categorias: Clínica | Ortodontia | Estética (18 serviços)
- [x] **Galeria** com grid responsivo e lightbox embutido
- [x] **Diferenciais** — 4 pilares da clínica (fundo dark)
- [x] **CTA Banner** com overlay e fundo elegante
- [x] **Contato** — endereço, WhatsApp, e-mail, Instagram
- [x] **Google Maps** embedado
- [x] **Footer** completo com grid 4 colunas
- [x] **Botão WhatsApp flutuante** com pulse animation

### Visual / UX
- [x] **Paleta exclusiva**: `#343434` · `#b9bdbe` · `#ddd5d6` · `#FFFFFF`
- [x] **Tipografia dupla**: Cormorant Garamond (serif) + DM Sans (sans)
- [x] **Animações de entrada** via IntersectionObserver (sem libs externas)
- [x] **Counter animation** nos stats do Hero
- [x] **Lightbox** nas imagens da galeria
- [x] **Destaque de nav** conforme seção visível
- [x] **SEO básico** (meta tags, OG tags, lang, alt texts)
- [x] **Fallback** para imagens que não carregarem

---

## 📁 Estrutura de Arquivos

```
index.html              ← Página principal
css/
  └── style.css         ← Todos os estilos (paleta, tipografia, layout, responsivo)
js/
  └── main.js           ← Interatividade (nav, tabs, animações, lightbox, counter)
images/
  ├── logo.svg          ← Logo versão escura (para header light)
  ├── logo-white.svg    ← Logo versão clara (para footer e hero)
  ├── hero-bg.svg       ← Background hero (placeholder elegante)
  ├── cta-bg.svg        ← Background CTA banner
  ├── clinica-interior.svg  ← Placeholder: interior da clínica
  ├── dr-lucas.svg      ← Placeholder: Dr. Lucas Nogueira
  ├── dra-gleidiane.svg ← Placeholder: Dra. Gleidiane Nogueira
  ├── galeria-1.svg     ← Placeholder: Sala de atendimento
  ├── galeria-2.svg     ← Placeholder: Recepção
  ├── galeria-3.svg     ← Placeholder: Consultório
  └── galeria-4.svg     ← Placeholder: Tecnologia
```

---

## 🔗 URIs Funcionais

| Path | Âncora | Descrição |
|------|--------|-----------|
| `index.html` | `#home` | Hero section |
| `index.html` | `#sobre` | Sobre a clínica |
| `index.html` | `#equipe` | Nossa equipe |
| `index.html` | `#servicos` | Serviços (tabs) |
| `index.html` | `#estrutura` | Galeria da estrutura |
| `index.html` | `#contato` | Contato e mapa |

---

## 🎨 Identidade Visual

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-dark` | `#343434` | Textos, botões, ícones ativos |
| `--color-mid` | `#b9bdbe` | Textos secundários, ícones |
| `--color-light` | `#ddd5d6` | Bordas, separadores, fundos |
| `--color-white` | `#FFFFFF` | Backgrounds, textos sobre escuro |
| `--color-off` | `#f7f5f5` | Backgrounds alternativos |
| `--font-serif` | Cormorant Garamond | Títulos, destaques |
| `--font-sans` | DM Sans | Corpo, labels, botões |

---

## 📷 Próxima Etapa — Fotos Reais

**Substituir os placeholders SVG pelas fotos reais:**

| Arquivo a substituir | Conteúdo esperado |
|---------------------|-------------------|
| `images/hero-bg.jpg/png` | Foto principal da clínica ou sorriso em fundo escuro |
| `images/clinica-interior.jpg/png` | Interior/recepção da clínica |
| `images/dr-lucas.jpg/png` | Foto profissional do Dr. Lucas |
| `images/dra-gleidiane.jpg/png` | Foto profissional da Dra. Gleidiane |
| `images/galeria-1.jpg/png` | Sala de atendimento |
| `images/galeria-2.jpg/png` | Recepção |
| `images/galeria-3.jpg/png` | Consultório odontológico |
| `images/galeria-4.jpg/png` | Equipamentos/tecnologia |

> Após upload das fotos, atualizar as referências em `index.html` de `.svg` para `.jpg` ou `.png`.

---

## 🔧 Dados da Clínica

| Campo | Valor |
|-------|-------|
| **Nome** | Saúde Odonto — Clínica Odontológica |
| **Endereço** | Rua Plácido de Castro, 7591 — JK, Porto Velho, RO |
| **WhatsApp** | (69) 9 9340-2645 |
| **E-mail** | clinicasaudeodontopvh@gmail.com |
| **Instagram** | @saudeodontopvh |
| **Dr. Lucas Nogueira** | CRO-RO 4076 — Ortodontia e Ortopedia |
| **Dra. Gleidiane Nogueira** | CRO-RO 3785 — Odontopediatria e Estética |

---

## 🚀 Próximos Passos Recomendados

1. **Inserir fotos reais** da clínica e da equipe (extraídas do Instagram ou tiradas profissionalmente)
2. **Logo real** — substituir logo.svg / logo-white.svg pelos arquivos do Canva (PNG com fundo transparente)
3. **Google Maps API** — chave para embed mais preciso
4. **Domínio** — registrar domínio (ex: `saudeodonto.com.br`)
5. **Google Analytics** — adicionar tag de rastreamento
6. **WhatsApp link dinâmico** — adicionar mensagem pré-definida por serviço
7. **Antes & Depois** — seção com cases reais (slider)
8. **Formulário de agendamento** — integração com calendário ou sistema interno
9. **Depoimentos** — carrossel de avaliações Google
10. **SEO Local** — Google Business Profile linkado ao site
