const steps = [
  {
    n: '01',
    title: 'Imersão',
    desc: 'Mergulhamos no seu negócio, público e oferta. Entrevistas, análise de concorrência, leitura de dados existentes.'
  },
  {
    n: '02',
    title: 'Estratégia',
    desc: 'Definimos a narrativa, hierarquia da página e KPIs. Você aprova um wireframe estratégico antes do design.'
  },
  {
    n: '03',
    title: 'Criação',
    desc: 'Design e copywriting acontecem em paralelo, com revisões semanais. Você acompanha tudo no Figma.'
  },
  {
    n: '04',
    title: 'Lançamento',
    desc: 'Desenvolvimento, QA cross-browser, integrações de tracking e deploy. Suporte por 30 dias após o go-live.'
  }
]

export default function Process() {
  return (
    <section className="process" id="processo">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">[ §II — COMO TRABALHAMOS ]</span>
          <h2 className="section-title">
            Um método <span className="it">enxuto</span><br />em quatro tempos.
          </h2>
        </div>
        <div className="process-grid reveal">
          {steps.map((s) => (
            <div className="process-step" key={s.n}>
              <div className="process-step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
