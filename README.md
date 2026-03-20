# Saúde Odonto — Site Institucional

**Clínica odontológica em Porto Velho, RO**  
Dr. Lucas Nogueira (CRO-RO 4076) · Dra. Gleidiane Nogueira (CRO-RO 3785)

---

## URLs de produção

| Ambiente | URL |
|---|---|
| Domínio oficial | https://saudeodontopvh.com.br |
| Cloudflare Pages | https://saude-odonto-site.pages.dev |
| GitHub (repo) | https://github.com/ddouglascostamarinho-cmd/saude-odonto-site- |

---

## Estrutura do projeto

```
index.html            ← Página principal (HTML + CSS + JS inline)
favicon.svg           ← Ícone da aba do navegador
sitemap.xml           ← Mapa do site para Google
robots.txt            ← Instruções para rastreadores
site.webmanifest      ← Configuração PWA / mobile
images/
  logo.png            ← Logo colorida (header scrolled)
  logo-white.png      ← Logo branca (footer)
  sala-espera.jpg     ← Foto hero background + seção Sobre
  recepcao.jpg        ← Foto CTA banner background
  dr-lucas.jpg        ← Foto do Dr. Lucas
  dra-gleidiane.jpg   ← Foto da Dra. Gleidiane
  equipe.jpg          ← Foto da equipe juntos
  sala-atendimento-1.jpg  ← Consultório 02 — Dr. Lucas
  sala-atendimento-2.jpg  ← Consultório 01 — Dra. Gleidiane
```

---

## Seções do site

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#inicio` | Banner principal com foto, título, stats e CTAs |
| Sobre | `#sobre` | Apresentação da clínica |
| Equipe | `#equipe` | Cards Dr. Lucas e Dra. Gleidiane |
| Serviços | `#servicos` | 3 abas: Clínica Geral, Ortodontia, Estética |
| Estrutura | `#estrutura` | Galeria com lightbox |
| Diferenciais | `#diferenciais` | 4 cards de diferencial |
| CTA Banner | — | Banner dark com WhatsApp |
| Agendamento | `#agendamento` | Formulário → WhatsApp (sem backend) |
| Contato | `#contato` | Info + mapa Google |
| Footer | — | Links + LGPD |

---

## SEO implementado

- **Title** otimizado para "dentista porto velho"
- **Meta description** com CROs dos especialistas
- **Canonical URL** apontando para o domínio oficial
- **Open Graph** completo (Facebook, WhatsApp, LinkedIn)
- **Twitter Card** summary_large_image
- **Geo Local SEO** (geo.region, geo.placename)
- **Schema.org JSON-LD** tipo `Dentist` + `LocalBusiness`
  - Endereço, telefone, horários, especialistas, especialidades
- **Preload** da imagem hero (reduz LCP)
- **Favicon SVG** + webmanifest

---

## Formulário de agendamento

- Campos: Nome, WhatsApp, Serviço, Observações
- Máscara automática no campo telefone
- Ao submeter: abre WhatsApp com mensagem formatada
- **Zero backend** — nenhum dado é armazenado
- **Compatível com LGPD** — aviso no footer

---

## Deploy

**Fluxo automático:**
```
Editar index.html (Genspark) → Exportar ZIP → Extrair → Upload GitHub → Cloudflare Pages publica em ~30s
```

**Manual (Cloudflare Pages):**
- Arrastar pasta para: https://dash.cloudflare.com/workers-and-pages

---

## Contato da clínica

- WhatsApp: (69) 9 9340-2645 → https://wa.me/5569993402645
- E-mail: clinicasaudeodontopvh@gmail.com
- Instagram: @saudeodonto2023
- Endereço: Rua Plácido de Castro, 7591 — Bairro JK, Porto Velho, RO

---

## Próximos passos sugeridos

- [ ] Configurar Google Analytics 4 (GA4)
- [ ] Registrar no Google Search Console
- [ ] Configurar Cloudflare Email Routing para email profissional
- [ ] Adicionar depoimentos de pacientes (quando disponíveis)
- [ ] Foto profissional da Dra. Gleidiane com jaleco
