<div align="center">

<br />

# ✦ Agência GM

### *Landing pages que convertem.*

Estúdio editorial de criação de landing pages — design sob medida,
copy estratégico e código performático em um único pacote.

<br />

![React](https://img.shields.io/badge/React-18.3-0c0c0c?style=flat-square&labelColor=f1ebe0)
![Vite](https://img.shields.io/badge/Vite-5.4-0c0c0c?style=flat-square&labelColor=d8ff3c)
![Status](https://img.shields.io/badge/status-em%20produção-0c0c0c?style=flat-square&labelColor=f1ebe0)
![License](https://img.shields.io/badge/license-MIT-0c0c0c?style=flat-square&labelColor=f1ebe0)

<br />

[**Ver demo ↗**](https://lp-agencia-gm.vercel.app) &nbsp;·&nbsp; [Reportar bug](https://github.com/marcellypereira/lp-agencia-gm/issues) &nbsp;·&nbsp; [Sugerir feature](https://github.com/marcellypereira/lp-agencia-gm/issues)

<br />

</div>

---

## §I — Sobre o projeto

Esta é a landing page oficial da **Agência GM**, um estúdio especializado
em criar landing pages de alta conversão. O site foi construído como uma
peça **meta**: a própria página é o portfólio — se a Agência GM faz LPs
que convertem, a LP dela mesma precisa ser irrepreensível.

A direção estética é **editorial-moderna**, inspirada em revistas
impressas: tipografia serifada dramática, hierarquia rigorosa, paleta
cream + tinta com um único acento ácido, e detalhes "magazine" como
numeração de seções (`§I`, `§II`...) e meta-info entre colchetes.

<br />

## §II — Stack

| Camada | Ferramenta |
|---|---|
| **Framework** | React 18.3 (componentes funcionais + hooks) |
| **Build** | Vite 5.4 |
| **Animações** | CSS puro + IntersectionObserver (reveal on-scroll) |
| **Tipografia** | Instrument Serif · Bricolage Grotesque · JetBrains Mono |
| **Deploy** | Vercel |

> Sem Tailwind, sem CSS-in-JS, sem dependências de UI. Apenas CSS
> vanilla bem escrito, com variáveis e um design system enxuto. O bundle
> final pesa **~52kb gzipped**.

<br />

## §III — Estrutura

```
lp-agencia-gm/
├── index.html              # Preconnect Google Fonts
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # createRoot + StrictMode
    ├── App.jsx             # IntersectionObserver para reveal
    ├── index.css           # Design system + estilos por seção
    └── components/
        ├── Nav.jsx         # Navegação fixa com blur
        ├── Hero.jsx        # Headline gigante com "arrow disc"
        ├── Marquee.jsx     # Faixa preta infinita
        ├── Stats.jsx       # 4 métricas em tipografia serif
        ├── Services.jsx    # Lista que inverte no hover
        ├── Process.jsx     # Grid 4 colunas sobre fundo preto
        ├── Cases.jsx       # Bento grid 12-col assimétrico
        ├── Manifesto.jsx   # Citação editorial
        ├── CTA.jsx         # Headline massiva + contatos
        └── Footer.jsx
```

<br />

## §IV — Rodando localmente

**Pré-requisitos:** Node 18+ e npm.

```bash
# 1. Clone o repositório
git clone git@github.com:marcellypereira/lp-agencia-gm.git
cd lp-agencia-gm

# 2. Instale as dependências
npm install

# 3. Suba o servidor de desenvolvimento
npm run dev
```

O Vite abre automaticamente em **http://localhost:5173**.

### Outros comandos

```bash
npm run build      # Build de produção (gera dist/)
npm run preview    # Preview local do build
```

<br />

## §V — Decisões de design

<details>
<summary><strong>Tipografia</strong></summary>

- **Display:** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — uma serifa moderna com itálicos dramáticos. Escolhida pela personalidade editorial e pelo contraste forte entre regular e itálico, que permite jogos visuais nas headlines.
- **Body:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) — sem-serifa contemporânea com ótima legibilidade em tamanhos pequenos e variantes ópticas.
- **Mono:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — usada apenas em rótulos, números e meta-info, criando contraste tátil com a serifa.

Evitamos deliberadamente fontes "padrão de IA" como Inter, Space Grotesk e Roboto.

</details>

<details>
<summary><strong>Cor</strong></summary>

```css
--cream:     #f1ebe0;   /* fundo principal, quente e analógico */
--ink:       #0c0c0c;   /* texto, bordas, alto contraste */
--acid:      #d8ff3c;   /* único acento — usado com parcimônia */
```

A regra é simples: dois tons dominantes, um acento ácido para guiar o
olhar exatamente onde a conversão precisa acontecer (CTAs, números,
detalhes do hero).

</details>

<details>
<summary><strong>Movimento</strong></summary>

- Reveal on-scroll via **IntersectionObserver** nativo (sem libs)
- Marquee infinito com `@keyframes` puro
- Hover na lista de serviços inverte cores num gesto contínuo de 0.55s
- Sem motion library — tudo é CSS puro pra manter o bundle leve

</details>

<br />

## §VI — Performance

| Métrica | Alvo |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| First Contentful Paint | < 1.0s |
| Total Bundle (gzip) | ~52kb |

<br />

## §VII — Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais informações.

<br />

---

<div align="center">

**Agência GM** &nbsp;·&nbsp; Vila Madalena, São Paulo &nbsp;·&nbsp; ola@agenciagm.com.br

<sub>Feito à mão em São Paulo ✦</sub>

</div>
