export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" />
          Agência <em>GM</em>
        </a>
        <nav className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#cases">Cases</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href="#contato" className="btn">
          <span className="dot" />
          Iniciar projeto
        </a>
      </div>
    </header>
  )
}
