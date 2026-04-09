const services = [
  {
    n: '01',
    name: 'Estratégia',
    italic: '& posicionamento',
    desc: 'Auditoria do funil, pesquisa com clientes reais, definição de oferta e construção da arquitetura de mensagem antes de qualquer pixel ser desenhado.'
  },
  {
    n: '02',
    name: 'Design',
    italic: 'editorial',
    desc: 'Layouts feitos sob medida, com tipografia rica, hierarquia visual e identidade que diferencia a marca em mercados saturados. Nada de templates.'
  },
  {
    n: '03',
    name: 'Copy',
    italic: 'que vende',
    desc: 'Textos escritos por copywriters especializados em conversão, fundamentados em entrevistas, dados e nas melhores práticas de persuasão ética.'
  },
  {
    n: '04',
    name: 'Desenvolvimento',
    italic: '& performance',
    desc: 'Código limpo, animações sob medida, Lighthouse 95+ garantido, integração com CRMs, pixels e plataformas de tracking. Pronto para escalar.'
  },
  {
    n: '05',
    name: 'CRO',
    italic: '& otimização',
    desc: 'Após o lançamento, rodamos testes A/B, analisamos heatmaps e iteramos a página com base em dados — porque a primeira versão raramente é a melhor.'
  }
]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">[ §I — O QUE FAZEMOS ]</span>
          <h2 className="section-title">
            Cinco etapas para uma página <span className="it">irrecusável</span>.
          </h2>
        </div>

        <div className="service-list reveal">
          {services.map((s) => (
            <div className="service" key={s.n}>
              <div className="service-num">/{s.n}</div>
              <div className="service-name">
                {s.name} <span className="it">{s.italic}</span>
              </div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
