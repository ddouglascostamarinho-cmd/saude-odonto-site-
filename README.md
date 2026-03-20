# Saúde Odonto — Site Institucional v3

**Clínica Odontológica | Porto Velho, RO**
Site: [saudeodontopvh.com.br](https://saudeodontopvh.com.br) | [saude-odonto-site.pages.dev](https://saude-odonto-site.pages.dev)

---

## ✅ Funcionalidades Implementadas

### SEO Completo
- Title tag otimizado para "Dentista em Porto Velho RO"
- Meta description com nomes dos doutores e CROs
- URL canônica: `https://saudeodontopvh.com.br/`
- Open Graph (Facebook, WhatsApp, LinkedIn)
- Twitter Card (summary_large_image)
- Local SEO: geo.region BR-RO, geo.placename Porto Velho, coordenadas GPS
- Preload do hero image (melhora LCP)

### Schema.org JSON-LD (Dentist / LocalBusiness)
- Tipo: Dentist + MedicalBusiness + LocalBusiness
- Endereço completo: Rua Plácido de Castro, 7591 — JK, Porto Velho
- Horários: Seg–Sex 08h–18h, Sáb 08h–12h
- Dr. Lucas Nogueira (CRO-RO 4076), Dra. Gleidiane Nogueira (CRO-RO 3785)
- Especialidades, telefone, e-mail, Instagram, coordenadas geo

### Design e Layout
- Identidade visual: #343434 · #b9bdbe · #ddd5d6 · #FFFFFF · #c9a96e (ouro)
- Fontes: Cormorant Garamond (serif) + DM Sans (sans)
- Animações fade-in em scroll
- Responsivo mobile-first

### Seções
1. **Header** — fixo, transparente, logo 56px, botão Agendar com contraste reforçado
2. **Hero** — imagem local `sala-espera.jpg`, bg-position: center 40%, contador animado (fixo: 2 / 18+ / 100%)
3. **Sobre** — foto da clínica + texto + lista de diferenciais
4. **Equipe** — Dr. Lucas + Dra. Gleidiane, fotos 3:4 com object-position: top
5. **Serviços** — 20+ serviços em tabs (5 categorias)
6. **Galeria** — grid assimétrico com fotos locais
7. **Diferenciais** — 4 cards com ícones
8. **CTA Banner** — fundo dourado com botão WhatsApp
9. **Contato** — endereço, horários, badge "Atendimento Especial", mapa
10. **Agendamento** — formulário WhatsApp (sem backend) com máscara de telefone
11. **Footer** — logo 80px, tagline legível, contato, LGPD

### Melhorias v3 (9 correções aplicadas)
| # | Correção | Detalhe |
|---|---|---|
| 1 | Logo footer | 40px → **80px** + filtro branco |
| 2 | Números hero | JS: sempre restaura `18+`, `100%`, `2` |
| 3 | Padding seções | 100px → **80px** |
| 4 | Imagens locais | Todas apontam para `images/` |
| 5 | Tagline footer | `.9375rem`, opacidade **0.60** |
| 6 | Texto footer | opacity **0.40** |
| 7 | Botão Agendar | `rgba(255,255,255,.12)`, border `.85`, font-weight 600 |
| 8 | Hero bg-position | `center 40%` (reduz marca d'água) |
| 9 | Atendimento Especial | Badge escuro com CTA WhatsApp direto |

### Arquivos extras
- `favicon.svg` — ícone na aba do navegador
- `sitemap.xml` — indexação Google
- `robots.txt` — instrução para rastreadores
- `site.webmanifest` — instalação como PWA no mobile

---

## 📁 Estrutura de Arquivos

```
index.html           ← Página principal (todas as seções)
favicon.svg          ← Favicon SVG (ícone da aba)
sitemap.xml          ← Sitemap para Google Search Console
robots.txt           ← Regras para rastreadores
site.webmanifest     ← PWA manifest
images/
  logo.png           ← Logo da clínica (branch do GitHub)
  sala-espera.jpg    ← Foto hero + galeria
  recepcao.jpg       ← Recepção
  sala-atendimento-1.jpg  ← Consultório Dr. Lucas
  sala-atendimento-2.jpg  ← Consultório Dra. Gleidiane
  dr-lucas.jpg       ← Foto Dr. Lucas
  dra-gleidiane.jpg  ← Foto Dra. Gleidiane
  equipe.jpg         ← Foto equipe
```

---

## 🚀 Deploy no GitHub + Cloudflare

1. Acesse: [github.com/ddouglascostamarinho-cmd/saude-odonto-site-](https://github.com/ddouglascostamarinho-cmd/saude-odonto-site-)
2. **Add file → Upload files**
3. Suba: `index.html`, `favicon.svg`, `sitemap.xml`, `robots.txt`, `site.webmanifest`
4. Commit → Cloudflare publica em ~30s ✅

> ⚠️ A pasta `images/` já está no GitHub — **não precisa subir novamente.**

---

## 📊 KPIs para acompanhar

- Site: [saude-odonto-site.pages.dev](https://saude-odonto-site.pages.dev)
- Domínio: saudeodontopvh.com.br (DNS propagando ~1-4h)
- Google Search Console: enviar sitemap após domínio ativar
- Instagram: [@saudeodonto2023](https://www.instagram.com/saudeodonto2023/)
