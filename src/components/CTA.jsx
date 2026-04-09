export default function CTA() {
  return (
    <section className="cta" id="contato">
      <div className="container">
        <span className="label reveal">[ §V — VAMOS CONVERSAR ]</span>
        <h2 className="cta-headline reveal" style={{ marginTop: 24 }}>
          Sua próxima<br />
          <span className="it underline">página</span> começa<br />
          aqui<span style={{ color: 'var(--acid-deep)' }}>.</span>
        </h2>

        <div className="cta-row reveal">
          <div>
            <span className="label">Email</span>
            <br />
            <a href="mailto:ola@agenciagm.com.br" className="big">
              ola@agenciagm.com.br
            </a>
          </div>
          <div>
            <span className="label">WhatsApp</span>
            <br />
            <a href="tel:+5511999999999" className="big">
              +55 11 99999-9999
            </a>
          </div>
          <div>
            <p>
              Resposta em até <strong>4 horas úteis</strong>. Envie o briefing
              ou apenas uma ideia — a primeira conversa é sempre gratuita e
              sem compromisso.
            </p>
            <a href="mailto:ola@agenciagm.com.br" className="btn" style={{ marginTop: 18 }}>
              <span className="dot" />
              Agendar reunião
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
