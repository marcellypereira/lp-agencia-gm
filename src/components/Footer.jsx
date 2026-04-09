export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#top" className="brand">
            <span className="brand-mark" />
            Agência <em>GM</em>
          </a>
          <div className="footer-cols">
            <div className="footer-col">
              <span>Estúdio</span>
              <a href="#servicos">Serviços</a>
              <a href="#processo">Processo</a>
              <a href="#cases">Cases</a>
            </div>
            <div className="footer-col">
              <span>Social</span>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Behance</a>
            </div>
            <div className="footer-col">
              <span>Contato</span>
              <a href="mailto:ola@agenciagm.com.br">ola@agenciagm.com.br</a>
              <a href="tel:+5511999999999">+55 11 99999-9999</a>
              <span style={{ textTransform: 'none', letterSpacing: 0 }}>
                Vila Madalena · São Paulo
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Agência GM — Todos os direitos reservados</span>
          <span>Feito à mão em São Paulo ✦</span>
        </div>
      </div>
    </footer>
  )
}
