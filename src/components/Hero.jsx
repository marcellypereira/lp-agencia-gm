export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-meta">
          <div className="hero-meta-block">
            <span className="label">[01] — Estúdio de conversão</span>
            <p>Sediado em São Paulo, atendendo marcas em todo o Brasil desde 2019.</p>
          </div>
          <div className="hero-meta-block">
            <span className="label">[02] — Disponibilidade</span>
            <p>Aceitando 3 novos projetos para Maio/2026. Fale com a gente.</p>
          </div>
          <div className="hero-meta-block">
            <span className="label">[03] — Coordenadas</span>
            <p>−23.5505° / −46.6333°<br />Vila Madalena, SP</p>
          </div>
        </div>

        <h1 className="hero-headline reveal">
          Landing<br />
          pages que <span className="it">con</span>
          <span className="arrow" aria-hidden="true" />
          <span className="it">vertem</span>.
        </h1>

        <div className="hero-bottom">
          <p className="hero-lede reveal">
            Somos a <strong>GM</strong> — um estúdio editorial de criação de
            landing pages que transformam tráfego em receita. Design feito sob
            medida, copy estratégico e código performático em um único pacote.
          </p>
          <div className="hero-cta reveal">
            <span className="label">// Vamos ao que importa</span>
            <a href="#contato" className="btn">
              <span className="dot" />
              Quero uma proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
