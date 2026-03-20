# 🦷 Saúde Odonto — Site Institucional

**URL Produção:** https://saude-odonto-site.pages.dev  
**Domínio:** https://saudeodontopvh.com.br *(em propagação DNS)*  
**Repositório GitHub:** https://github.com/ddouglascostamarinho-cmd/saude-odonto-site-

---

## ✅ Funcionalidades Implementadas

### SEO & Performance
- Title tag otimizado com palavras-chave locais
- Meta description com nomes dos dentistas e CROs
- URL canônica `https://saudeodontopvh.com.br/`
- Local SEO: `geo.region: BR-RO`, `geo.placename: Porto Velho`
- Open Graph completo (Facebook, WhatsApp, LinkedIn)
- Twitter Card `summary_large_image`
- Schema.org JSON-LD tipo `Dentist` / `LocalBusiness`
- Preload hero image (reduz LCP)
- `sitemap.xml`, `robots.txt`, `favicon.svg`, `site.webmanifest`

### Visual & UX
- Header transparente com transição ao scroll
- Logo 56px no header (branca sobre dark, colorida após scroll)
- **Logo 80px no footer** com `filter: brightness(0) invert(1)` *(v2)*
- **Tagline footer legível** (opacidade 0.6, fonte 0.9375rem) *(v2)*
- **Botão "Agendar" com contraste melhorado** no header *(v2)*
- **Hero `background-position: center 40%`** (evita marca d'água) *(v2)*
- **Seções com padding 80px** (reduzido de 100px) *(v2)*
- Fotos dos dentistas com `aspect-ratio: 3/4` e `object-position: top`
- Galeria com lightbox
- WhatsApp flutuante com animação pulse
- Animações de entrada (Intersection Observer)
- Mobile-first totalmente responsivo

### Formulário de Agendamento
- Campos: Nome, WhatsApp (máscara automática), Serviço (select), Observações
- Envio direto ao WhatsApp — **zero backend**
- Aviso LGPD no footer

### Seções do Site
1. Hero com stats (2 especialistas, 18+ especialidades, 100% dedicação)
2. Sobre a Clínica
3. Equipe (Dr. Lucas + Dra. Gleidiane)
4. Serviços com tabs (Clínica Geral / Ortodontia / Estética)
5. Galeria / Estrutura
6. Diferenciais
7. CTA Banner
8. Formulário de Agendamento
9. Contato + Mapa Google
10. Footer completo

---

## 📁 Estrutura de Arquivos

```
index.html          ← Página principal
favicon.svg         ← Ícone do navegador
sitemap.xml         ← Indexação Google
robots.txt          ← Rastreadores web
site.webmanifest    ← PWA / Instalar como app
images/
  ├── logo.png
  ├── sala-espera.jpg
  ├── recepcao.jpg
  ├── equipe.jpg
  ├── dr-lucas.jpg
  ├── dra-gleidiane.jpg
  ├── sala-atendimento-1.jpg
  └── sala-atendimento-2.jpg
```

---

## 🚀 Deploy

**Cloudflare Pages** — auto-deploy via GitHub commit.  
Cada push ao `main` do repositório publica em ~30 segundos.

---

## 📋 Pendente

- [ ] Vincular domínio `saudeodontopvh.com.br` no Cloudflare Pages (aguardando DNS ativo)
- [ ] Enviar `sitemap.xml` ao Google Search Console
- [ ] Configurar e-mail profissional via Cloudflare Email Routing
- [ ] Adicionar depoimentos de pacientes quando disponível
- [ ] Google Analytics / GTM

---

*Atualizado: 2026-03-20 — v2 com 8 melhorias visuais*
