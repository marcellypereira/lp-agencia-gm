export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container">
        <span className="label reveal">[ §IV — MANIFESTO ]</span>
        <p className="manifesto-quote reveal" style={{ marginTop: 24 }}>
          Acreditamos que uma landing page não é um <span className="it">documento</span>,<br />
          é uma <span className="hl">conversa cuidadosamente coreografada</span><br />
          entre uma marca e a pessoa certa, no momento <span className="it">exato</span>.
        </p>
        <div className="manifesto-author reveal">
          <span className="label">— Equipe GM</span>
          <p>
            Nosso trabalho é fazer essa conversa parecer inevitável. Não usamos
            templates, não terceirizamos copy, e nunca entregamos uma página em
            que não colocaríamos nosso próprio nome.
          </p>
        </div>
      </div>
    </section>
  )
}
