export default function Marquee() {
  const items = [
    'Estratégia',
    'Design editorial',
    'Copywriting',
    'Desenvolvimento',
    'CRO',
    'Performance',
    'Analytics',
    'A/B testing'
  ]
  const row = (
    <span>
      {items.map((it, i) => (
        <span key={i}>
          {it} <em className="star">✦</em>
        </span>
      ))}
    </span>
  )
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
