const stats = [
  { num: '247', suffix: '+', label: 'Landing pages entregues para marcas em todo o Brasil.' },
  { num: '4.7', suffix: 'x', label: 'ROAS médio dos clientes no primeiro trimestre.', italic: true },
  { num: '12', suffix: 'd', label: 'Prazo médio de entrega, do briefing ao deploy.' },
  { num: '98', suffix: '%', label: 'Taxa de retenção. A maioria volta para o segundo projeto.' }
]

export default function Stats() {
  return (
    <section className="stats reveal">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">
              <span className={s.italic ? 'it' : ''}>{s.num}</span>
              <span className="small">{s.suffix}</span>
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
